<template>
  <Layout>
    <!-- <h1 class="text-3xl font-bold mb-5">Home</h1> -->
    <section class="">
      <p class="text-justify">
        The <em>Nigerian Journal of Technological Development</em> (NJTD) is a quarterly publication of the Faculty of Engineering & Technology, is a quarterly publication of the Faculty of Engineering & Technology, University of Ilorin, Ilorin, Nigeria.
        It publishes original high-quality articles focusing on all aspects of Engineering and Applied Sciences. Manuscripts are double-blind peer-reviewed and if found suitable, are published as full length research articles or review papers. Our publications are scheduled for March, June, September and December.</p>
      <p class="mt-8 mb-2">
        The Journal covers research in the following subject areas:
      </p>

      <ul class="coverage ml-5">
        <li v-for="discipline in disciplines" :key="discipline" class="mt-2">
          {{ discipline }}  
        </li>
      </ul>

      <section class="mt-8">
        <h3 class="gray-text text-2xl font-medium">
          <span class="iconify" data-icon="entypo:link" data-inline="false"></span>
          Abstracting and Indexing
        </h3>
        <!-- <p>
          NJTD is currently indexed in the following bodies:
        </p> -->
        <section class="flex my-3 p-8 rounded-lg flex-wrap">
          <div
            v-for="body in bodies"
            :key="body.name"
            class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center mb-8">
            <a :href="body.url" target="_blank" :title="body.name" class="block mx-8 xl:mx-6 lg:mx-6 xl:mx-8">
              <g-image :src="`/bodies${body.img}`" style="max-width: 150px;" />
            </a>
          </div>
        </section>
      </section>

      <MostDownloadedPapers />
      <!-- <RecentPapers /> -->
      <Articles />
    </section>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteDescription
  }
}
</static-query>

<script>
import { mapGetters, mapActions } from 'vuex'
// import RecentPapers from '~/components/RecentPapers'
import MostDownloadedPapers from '~/components/MostDownloaded'
import Articles from '~/components/Articles'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    // RecentPapers,
    MostDownloadedPapers,
    Articles
  },

  beforeMount () {
  },

  data () {
    return {
      disciplines: this.$store.getters.disciplines,
      bodies: this.$store.getters.indexee_bodies
    }
  },

  methods: {
  }

  
}
</script>

<style lang="scss" scoped>
ul.coverage {

  li {
    list-style-type: square;
  }
}

@media screen and (min-width: 1024px) {
  ul.coverage {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
}
</style>
