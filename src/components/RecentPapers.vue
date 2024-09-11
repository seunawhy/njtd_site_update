<template>
    <div class="my-10 mb-16">
        <div class="mb-3">
            <h5 class="font-bold">RECENT</h5>
            <h2 class="font-bold text-4xl -mt-3">Papers</h2>
        </div>


        <section class="gray-text" v-if="loading">
            Please wait while we load Recent Papers ...
        </section>

        <section v-else-if="recentPublications">
            <template v-for="(article, ax) in recentPublications">
                <ArticleCard :article="article" :key="`article_${ax}`" />
            </template>
        </section>

        <div class="gray-text" v-else>
            No articles found
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleCard from '~/components/ArticleCard'

export default {
    name: 'recent-papers',
    components: {
        ArticleCard
    },

    async mounted () {
        try {
            let sub = (
                await this.$http.get(`/submissions?status=3&orderBy=dateLastActivity&count=${this.max}`)
            ).items
            sub.sort((f, s) => {
                let fPages = f.publications[0].pages.split('-')
                let sPages = s.publications[0].pages.split('-')
                if (isNaN(parseInt(fPages[0]))) return 1
                else if (isNaN(parseInt(sPages[0]))) return 1
                return parseInt(fPages[0]) > parseInt(sPages[0]) ? 1 : -1
            })
            this.submissions = sub
            this.loading = false
        } catch (e) {
            console.warn(e)
        }
    },

    data () {
        return {
            max: 5,
            submissions: null,
            loading: true
        }
    },

    computed: {
        recentPublications () {
            let pubs = []
            this.submissions.forEach((submission) => {
                pubs.push(...submission.publications)
            })
            return pubs
        }
    }
}
</script>

<style lang="scss" scoped>

</style>