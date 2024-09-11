<template>
    <article class="article flex flex-wrap md:flex-nowrap px-6 py-8 mb-6 radius-lg hover:shadow-md">
        <div class="article__image mb-3 max-w-2xl" :style="`background-image: url(${image});`">
        </div>

        <div class="ml-4">
            <div class="">
                <g-link :to="`/paper?paper=${article.submissionId}_${galley.publicationId}`" class="text-lg font-medium">
                    {{ article.fullTitle.en_US }}
                </g-link>
            </div>
            <p class="text-sm">
                <span class="gray-text">Author(s): </span>{{
                    article.authorsString || article.authorsStringShort || 'No Author Provided'
                }}
            </p>
            <p class="text-sm">
                <span class="gray-text">Pages: </span>{{ article.pages || 'N/A' }}
            </p>
            <p class="text-sm" v-if="article.datePublished">
                <span class="gray-text">Published on </span>{{ article.datePublished | date }}
            </p>
            <!-- <p class="text-sm">
                <span class="gray-text">Keywords: </span>{{ article.keywords || 'No Keywords' }}
            </p> -->
            <div class="mt-6">
                <a :href="downloadUrl" target="_blank" @click="recordDownload"
                    class="py-2 text-sm px-4 rounded mr-3 font-medium hover:shadow-sm light-orange orange-text"
                    :download="galley.file.fileName">
                    Download
                </a>
                <span :title="`${article.downloads} downloads`" class="gray-text text-sm">
                    {{ downloads }} <span class="iconify" data-icon="entypo:download"></span>
                </span>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'article-card',
    props: {
        article: {
            type: Object,
            required: true
        }
    },

    async mounted () {
        // Fetch Number of Downloads
        let submissions = await this.$downloadApi.get(`/downloads/${this.article.submissionId}`)
        this.downloads = submissions.data.count
    },

    data () {
        return {
            parseId: '',
            downloads: 0
        }
    },

    computed: {
        image () {
            return this.article.image || 'https://img.icons8.com/fluent/96/000000/journal.png'
        },

        downloadUrl () {
            let baseUrl = this.article.urlPublished.replace(/\/view.+$/, '/download')
            return `${baseUrl}/${this.article.submissionId}/${this.galley.id}/${this.galley.fileId}`
        },

        galley () {
            return this.article.galleys[0] || {
                file: {}
            }
        }
    },

    methods: {
        async recordDownload () {
            this.downloads++
            await this.$downloadApi.put(`/downloads/${this.article.submissionId}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.article {
    background-color: darken($light-blue, 1);
    border-radius: $radius;
}

.article__image {
    position: relative;
    width: 60px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;

    &:before {
        // content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: $radius;
        background: rgba($white, 0.3);
    }
}
</style>