<template>
  <Layout>
    <!-- <h1 class="text-3xl font-bold mb-5">Aim and Scope</h1> -->
    <p class="text-justify">
      The <em>Nigerian Journal of Technological Development</em> (NJTD) is a quarterly publication of the Faculty of Engineering & Technology, University of Ilorin, Ilorin, Nigeria. It publishes original high-quality articles focusing on all aspects of Engineering and Applied Sciences. Manuscripts are double-blind peer-reviewed and if found suitable, are published as full length research articles or review papers. Our publications are scheduled for March, June, September and December.    </p>

    <p class="mt-8 mb-2">
      The Journal covers research in the following subject areas:
    </p>

     <ul class="coverage ml-5 list-disc">
      <li v-for="discipline in disciplines" :key="discipline" class="mt-2">
        {{ discipline }}  
      </li>
    </ul>

    <section class="mt-8">
      <h3 class="gray-text text-xl font-medium">
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

    <section class="mb-10">
      <h2 class="text-2xl orange-text font-semibold">Open Access Policy</h2>
      <p>
        All research articles published in the Nigerian Journal of Technological Development are fully open access. They are immediately freely available to read, download and share. Articles are published under the terms of a Creative Commons license which permits use, distribution and reproduction in any medium, provided the original work is properly cited.
      </p>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl orange-text font-semibold">Copyright &amp; Licensing</h2>
      <p>
        The Nigerian Journal of Technological Development (NJTD) allows authors to retain the copyright of their papers, without restrictions. The authors can then grant the publisher non-exclusive publishing rights to publish the articles.
      </p>
      <p class="mt-3">
        The NJTD site and its metadata are licensed under CC BY-SA.
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  },

  data () {
    return {
      disciplines: this.$store.getters.disciplines,
      bodies: this.$store.getters.indexee_bodies
    }
  }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 1024px) {
  ul.coverage {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
}
</style>
