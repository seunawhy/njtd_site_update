<template>
    <Layout>
        <div>
            <a @click="$router.back()" class="cursor-pointer font-medium flex">
                <span class="iconify text-2xl"
                    data-icon="entypo:chevron-small-left"></span>
                Back
            </a>

        </div>

        <div v-if="loading" class="gray-text mt-5">
            Loading Issue ...
        </div>

        <section class="mt-5" v-else>
            <div class="flex flex-wrap">
                <g-image :src="issue.coverImageUrl.en_US" responsive />
                <div class="ml-5">
                    <h1 class="text-3xl font-bold">{{ issue.identification }}</h1>
                    <h4>Published on {{ issue.datePublished | date }}</h4>
                    <p class="mt-2 text-sm" v-if="issue.description.en_US">
                        {{ issue.description.en_US }}
                    </p>
                    <p class="gray-text mt-2" v-else>No description for this issue</p>
                </div>
            </div>
            <hr class="border-gray-300 my-6">

            <h1 class="text-xl font-bold orange-text">Articles</h1>
            <p class="-mt-1">{{articles.length}} Items</p>

            <div class="mt-6">
                <ArticleCard
                    v-for="article in articles"
                    :key="`article_${article.id}`"
                    :article="article"
                />
            </div>
        </section>
    </Layout>
</template>

<script>
import ArticleCard from '~/components/ArticleCard'

export default {
    name: 'an_issue',
    components: {
        ArticleCard
    },

    async mounted () {
        try {
            this.issue = await this.$http.get(`issues/${this.issueId}`)
            this.loading = false
        } catch (E) {
            this.$router.push('/archive')
        }
    },

    data () {
        return {
            loading: true,
            issue: {}
        }
    },

    computed: {
        issueId () {
            let issue = this.$route.query.issue
            if (issue) return issue
            this.$router.push('/archive')
        },

        articles () {
            let articles = []
            this.issue.articles.forEach((article) => {
                articles.push(...article.publications)
            })
            articles.sort((f, s) => {
                let fPages = f.pages.split('-')
                let sPages = s.pages.split('-')
                if (isNaN(parseInt(fPages[0]))) return 1
                else if (isNaN(parseInt(sPages[0]))) return 1
                return parseInt(fPages[0]) > parseInt(sPages[0]) ? 1 : -1
            })
            return articles
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    height: 120px;
}
</style>