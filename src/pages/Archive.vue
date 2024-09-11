<template>
    <Layout>
        <section>
          <div class="gray-text" v-if="loading">
            Loading Archives ...
          </div>

          <div v-else>
            <div class="text-lg font-medium mb-8">
              Showing {{ pagination.offset + 1 }} - {{ maxItems }} of {{ pagination.max }} items
            </div>
            <div v-for="(issue) in archives" :key="issue.id" class="mb-3">
              <Issue :issue="issue" />
            </div>
            <div class="flex justify-between items-center">
              <Pagination @previous="go(-1)" @next="go" />
              <div>
                Showing {{ pagination.offset + 1 }} - {{ maxItems }} of {{ pagination.max }} items
              </div>
            </div>
          </div>
        </section>

    </Layout>
</template>

<script>
import Issue from '~/components/Issue'
import Pagination from '~/components/Pagination'

export default {
  metaInfo: {
    title: 'Archives'
  },

  components: {
    Issue,
    Pagination
  },

  async mounted () {
    this.fetchArchive()
  },

  data () {
    return {
      loading: true,
      archives: [],
      pagination: {
        count: 20,
        offset: 0,
        max: 1
      }
    }
  },

  computed: {
    item () {
      return this.pagination.offset - this.count
    },

    items () {
      return Math.floor(this.pagination.max / this.count)
    },

    maxItems () {
      return Math.min(this.pagination.offset + this.pagination.count, this.pagination.max)
    }
  },

  methods: {
    async fetchArchive () {
      try {
        this.loading = true
        const archives = (await this.$http.get(`/issues?offset=${this.pagination.offset}`))
        this.archives = archives.items
        this.pagination.max = archives.itemsMax
        this.loading = false
      } catch (E) {}
    },

    go (direction = 1) {
      if (direction === -1 && this.pagination.offset === 1) return null
      else if (direction === 1 && (
        this.pagination.offset + this.pagination.count >= this.pagination.max
      )) return null
      this.pagination.offset += (direction * this.pagination.count)
      this.fetchArchive()
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
