<template>
    <Layout>
        <div>
            <a @click="$router.back()" class="cursor-pointer font-medium flex">
                <span class="iconify text-2xl"
                    data-icon="entypo:chevron-small-left"></span>
                Back
            </a>
        </div>

        <div class="mt-10">
            <div class="my-2">
                <label class="gray-text font-medium">Search</label>
                <div class="mt-1">
                    <input v-model="internalQuery" class="w-full rounded-md py-3 px-3 bg-gray-200 focus:bg-gray-300"
                        placeholder="By Title or Author" autocomplete="autocomplete" autofocus>
                </div>
            </div>
            <div class="flex flex-wrap mt-6 hidden">
                <div class="mr-8 mb-5">
                    <label class="gray-text font-medium">Published After</label>
                    <div class="mt-1">
                        <input type="date" class="bg-gray-200 rounded-md py-2 px-3 focus:bg-gray-300">
                    </div>
                </div>
                <div class="mr-8 mb-5">
                    <label class="gray-text font-medium">Published Before</label>
                    <div class="mt-1">
                        <input type="date" class="bg-gray-200 rounded-md py-2 px-3 focus:bg-gray-300">
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <button @click="search" 
                    class="orange outline-none py-3 px-5 white-text text-sm font-medium rounded-md flex items-center content-center">
                    Search
                </button>
            </div>
        </div>

        <div v-if="loading" class="gray-text mt-5">
            Searching ...
        </div>

        <section class="mt-12" v-else>
            <h1 class="text-2xl font-bold orange-text">
                Search Results
            </h1>
            <h5 class="">
                {{ maxItems }} Search Results found for '<em class="font-semibold">{{ internalQuery }}</em>'
            </h5>
        

            <div class="mt-8" v-if="articles.length > 0">
                <div class="mb-5 w-full flex items-center justify-end">
                    <div class="mr-2 text-xs">
                        <div>
                            {{ page }} of {{ maxPages }} page{{ maxPages > 1 ? 's' : '' }} ({{ articles.length }} Items)
                        </div>
                    </div>
                    <Pagination @previous="back" @next="next" />
                </div>

                <template v-for="article in articles">
                    <ArticleCard :article="article" :key="`article_${article.id}`" /> 
                </template>
            </div>

            <div class="mt-8 gray-text text-sm" v-else>
                No Publication matches your search keyword
            </div>
        </section>
    </Layout>
</template>

<script>
import ArticleCard from '~/components/ArticleCard'
import Pagination from '~/components/Pagination'

export default {
    name: 'an_issue',
    components: {
        ArticleCard,
        Pagination
    },

    mounted () {
        this.internalQuery = this.query
        this.search()
    },

    data () {
        return {
            loading: true,
            results: [],
            internalQuery: '',
            page: 1,
            offset: 0,
            maxPages: 0,
            maxItems: 0
        }
    },

    computed: {
        query () {
            return this.$route.query.q
        },

        articles () {
            let articles = []
            this.results.forEach((article) => {
                articles.push(...article.publications)
            })
            return articles
        }
    },

    watch: {
        page (pg) {
            this.search()
        }
    },

    methods: {
        async search () {
            try {
                this.loading = true
                let res = (await this.$http.get(
                    `submissions?searchPhrase=${this.internalQuery}&offset=${this.offset}`
                ))
                this.maxItems = res.itemsMax
                this.maxPages = Math.ceil(res.itemsMax / 20)
                this.results = res.items
                this.loading = false
            } catch (E) {
                // TODO Take off the console log
                console.log(E)
            }
        },

        back () {
            if (this.page > 1) {
                this.offset -= 20
                --this.page
            }
        },
        
        next () {
            if (this.page < this.maxPages) {
                this.offset += 20
                ++this.page
            }
        },
    }
}
</script>

<style lang="scss" scoped>
img {
    height: 120px;
}
</style>