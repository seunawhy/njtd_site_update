<template>
    <Layout>
        <div>
            <a @click="$router.back()" class="cursor-pointer font-medium flex">
                <span class="iconify text-2xl"
                    data-icon="entypo:chevron-small-left"></span>
                Back
            </a>
        </div>

        <div class="gray-text mt-5" v-if="loading">
            Loading paper ...
        </div>

        <div v-else-if="found">
            <div class="block sm:block md:flex lg:flex justify-start items-start mt-5">
                <g-image :src="img" responsive class="shadow-lg rounded-lg mb-4" />

                <div class="md:ml-8 lg:ml-8">
                    <h1 class="font-bold text-2xl">
                        {{ article.fullTitle[locale] }}
                    </h1>

                    <div class="my-2 dark-text font-semibold">
                        {{ article.datePublished | date }}
                    </div>

                    <div class="my-2">
                        <span class="mr-1" v-if="volume">{{ volume }}. </span>
                        Page <strong>{{ article.pages }}</strong>
                    </div>

                    <div class="my-2" v-if="!article.hideAuthor">
                        <span class="gray-text">By</span>
                        {{ article.authorsString }}
                        <!-- E. Ayodele, C. J. Okolie, C. U. Ezeigbo, F. A. Fajemirokun -->
                    </div>

                    <div class="my-3 flex flex-wrap justify-start items-center">
                        <span v-for="keyword in article.keywords[locale]"
                            :key="keyword"
                            class="block py-2 px-4 mb-2 text-xs font-medium rounded-md mr-1 bg-gray-200 capitalize">
                            {{ keyword }}
                        </span>
                    </div>

                    <!-- <div class="gray-text text-xs mt-5">
                        {{ article.copyrightHolder[locale] }} &copy; {{ article.copyrightYear }}
                    </div> -->

                    <div class="my-6 flex justify-start items-center">
                        <a @click="recordDownload" :href="downloadUrl" target="_blank" :download="galley.file.fileName"
                            class="py-2 px-4 orange text-sm white-text font-semibold hover:shadow-md rounded-md">
                            Download
                        </a>
                        <div class="ml-2 dark-text">{{ downloads ?? 0 }} downloads</div>
                    </div>
                </div>
            </div>
            <div class="my-10">
                <section class="tabs w-full">
                    <ul class="w-full overflow-auto mb-3">
                        <li v-for="(tab, tx) in tabs" :key="tab.name"
                            class="inline px-2 mx-1"
                            :class="{ selected: selectedTab === tx }">
                            <a href="#" class="inline-block text-lg"
                                @click="selectedTab = tx">
                                {{ tab.name }}
                            </a>
                        </li>
                    </ul>

                    <section class="px-3 py-2">
                        <transition name="paper-tabs"
                            enter-active-class="animate__animated animate__fadeIn">
                            <div class="paper_excerpt text-justify" key="article" v-if="selectedTab === 0">
                                <div v-html="article.abstract[locale]"></div>
                            </div>

                            <!-- Citations Tab -->
                            <div class="paper_excerpt" key="references" v-else-if="selectedTab === 1">
                                <template v-if="article.citations.length > 0">
                                    <div v-for="reference in article.citations"
                                        :key="reference"
                                        class="mb-5"
                                        v-html="reference">
                                    </div>
                                </template>
                                <p v-else class="gray-text">
                                    No references
                                </p>
                            </div>

                            <!-- References Tab -->
                            <div class="paper_excerpt" key="citations" v-else-if="selectedTab === 2">
                                No Citations
                            </div>

                            <!-- Related Articles Tab -->
                            <div class="paper_excerpt" key="related_articles" v-else-if="selectedTab === 3">
                                No related articles
                            </div>
                        </transition>
                    </section>
                </section>
            </div>
        </div>

        <div class="text-lg mt-5 ml-2" v-else>
            Paper not found
        </div>
    </Layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'paper',
    metaInfo: {
        title: 'Paper'
    },

    async mounted () {
        try {
            this.article = await this.$http.get(
                `/submissions/${this.paper.submissionId}/publications/${this.paper.publicationId}`
            )
            this.found = true
            // Fetch Number of Downloads
            let submissions = await this.$downloadApi.get(`/downloads/${this.article.submissionId}`)
            this.downloads = submissions.data.count
        } catch (E) {
            if (E.response.status !== 404) {
                this.$router.push('/')
            }
        } finally {
            this.loading = false
        }
    },

    data () {
        return {
            found: false,
            loading: true,
            selectedTab: 0,
            downloads: 0,
            article: {},
            tabs: [
                { name: 'Abstract' },
                { name: 'References' },
                { name: 'Citations' },
                { name: 'Related Articles' },
            ],
            references: ''
        }
    },

    computed: {
        ...mapGetters({
            currentIssue: 'currentIssue'
        }),

        paper () {
            try {
                let ids = this.$route.query.paper.split('_')
                return {
                    submissionId: ids[0],
                    publicationId: ids[1]                
                }
            } catch (E) {
                this.$router.push('/')
            }
        },

        img () {
            return this.article.coverImage[this.locale] || 'https://img.icons8.com/fluent/96/000000/journal.png'
        },

        downloadUrl () {
            let baseUrl = this.article.urlPublished.replace(/\/view.+$/, '/download')
            return `${baseUrl}/${this.article.submissionId}/${this.galley.id}/${this.galley.fileId}`
        },

        galley () {
            return this.article.galleys[0] || {
                file: {}
            }
        },

        locale () {
            return this.article.locale
        },

        volume () {
            if (this.currentIssue) {
                return this.article.issueId === this.currentIssue.id ? this.currentIssue.identification : null
            }
            return null
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
h1 {
    line-height: 35px;
}

ul {
    white-space: nowrap;
    // border-bottom: 1px solid #F0F0F0;

    li {
        position: relative;
        border-bottom: 2px solid transparent;

        a {
            color: #CCC;
        }

        &.selected {
            // border-bottom-color: $navy-blue;

            a {
                color: $orange;
                font-weight: 600;
            }
        }
    }
}

.paper_excerpt {
    line-height: 25px;
}
</style>