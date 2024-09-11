<template>
    <div class="my-10 mb-16">
        <div class="mb-3">
            <h5 class="font-bold mb-2">MOST DOWNLOADED</h5>
            <h2 class="font-bold text-4xl -mt-3">Papers</h2>
        </div>

        <section class="gray-text" v-if="loading">
            Please wait while we fetch the Most Downloaded Papers ...
        </section>

        <section class="gray-text" v-else-if="papers.length > 0">
            <template v-for="(paper, ax) in papers">
                <ArticleCard :article="paper" :key="`article_${ax}`" />
            </template>
        </section>

        <section class="" v-else>
            No paper found here.
        </section>
    </div>
</template> 

<script>
import ArticleCard from '~/components/ArticleCard'

export default {
    name: 'most-downloaded',
    components: {
        ArticleCard
    },

    async mounted () {
        let downloads = await this.$downloadApi.get(`/downloads?limit=5`)
        for (let i = 0; i < downloads.data.length; i += 1) {
            let submission = await this.$http.get(`/submissions/${downloads.data[i].publication_id}`)
            this.papers[i] = submission.publications[0]
        }
        this.loading = false
    },

    data () {
        return {
            loading: true,
            papers: []
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
