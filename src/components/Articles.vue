<template>
    <div class="my-10 mb-16">
        <div class="mb-3">
            <h2 class="font-bold text-4xl -mt-3">Recent Papers</h2>
        </div>

        <section class="gray-text" v-if="loading">
             Please wait while we load Articles ...
        </section>

        <section v-else-if="articles">
            <template v-for="(article, ax) in articles">
                <ArticleCard :article="article" :key="`article_${ax}`" />
            </template>

            <div class="mt-5 text-center">
                <g-link to="/archive" class="font-medium">
                    View All Issues
                    <span class="iconify" data-icon="entypo:chevron-small-right"></span>
                </g-link>
            </div>
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
    name: 'articles',
    components: {
        ArticleCard
    },

    computed: {
        ...mapGetters({
            articles: 'Article/allArticles',
            loading: 'loading'
        }),
    },

    methods: {
        getSortedArticles () {
            let articles = [ ...this.articles ]
            articles.reverse()
            return articles
        }
    }
}
</script>

<style lang="scss" scoped>

</style>