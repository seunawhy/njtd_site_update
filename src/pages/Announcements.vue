<template>
  <Layout>
    <!-- <h1 class="text-3xl font-bold mb-5">Announcements</h1> -->
    <section>
      <div
        v-for="(announcement, ax) in announcements"
        :key="`announcement__${ax}`"
        class="announcement bg-gray-200 p-8 rounded-lg mb-3"
        v-html="announcement.body"
      ></div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Announcements",
  },

  data() {
    return {
      announcements: [
        {
          body:
            'Check out NJTD in the <a href="https://www.scopus.com/sourceid/21101047441">Scopus Database</a>.',
        },
        {
          body: `With effect from January 1, 2022, the following shall apply:
          <br><br>
          <ul class="list-disc px-6">
          <li>Article Processing Charge scrapped.</li><br>
          <li>Only articles with Similarity Index of less than or equal to 25% is considered by the Journal.</li>
          <ul>`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.announcement {
  font-size: 16px;
}
</style>
