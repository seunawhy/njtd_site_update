<template>
  <div class="downloads-pane-section">
    <PaneSection title="Downloads" icon="download">
      <!-- <template v-for="file in files"> -->
        <div v-for="file in files" class="flex items-start justify-start mb-4" :key="file.name">
          <img src="/img/pdf.png" class="" width="25px" />
          <div class="ml-3">
            <h5 class="font-medium text-sm mb-0 -mt-1">
              {{ file.name }}
            </h5>
            <a
              :href="file.url"
              class="block text-sm"
              target="_blank"
              :download="file.name"
            >
              Download
            </a>
          </div>
        </div>
      <!-- </template> -->
    </PaneSection>
  </div>
</template>

<script>
import PaneSection from "~/components/PaneSection";

export default {
  name: "downloads",
  components: {
    PaneSection,
  },
  data() {
    return {
      files: [
        // {
        //     name: 'Open Access Policy',
        //     url: 'https://njtdn.imfast.io/Open_Access.docx'
        // },
        {
          name: "Open Access Agreement",
          url: "../docs/njtd_open_access_agreement.pdf",
          //url: 'https://njtdn.imfast.io/Open_Access.pdf'
        },
        // {
        //     name: 'Copyright form',
        //     url: 'https://njtd.imfast.io/copyright.pdf'
        // },
        {
          name: "Article Processing Flowchart",
          url: "../docs/NJTD_article_processing_flowchart.pdf",
        },
        {
          name: "Submission Guidelines",
          url: "../docs/submission.pdf",
        },
        {
          name: "Journal Template",
          url: "../docs/Journal_Template.docx",
        },
        {
          name: "Call for Submission",
          url: "../docs/Call4Submission.jpg",
        },
      ],
    };
  },
};
</script>

<!-- <style lang="scss" scoped>
img {
  // filter: grayscale(400);
}
</style> -->
