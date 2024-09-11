<template>
  <Layout>
    <!-- <h1 class="text-3xl font-bold mb-5">Submissions</h1> -->
    <section class="mt-5">
      <div
        class="bg-orange-200 mb-6 border-t-2 border-orange-500 rounded-b black-text p-4 mb-10"
        role="alert"
      >
        <div class="flex">
          <div class="">
            <svg
              class="fill-current h-6 w-6 text-orange-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
              />
            </svg>
          </div>
          <div>
            <h5 class="font-bold text-sm">NOTICE</h5>
            <div class="text-sm">
              <a :href="$ojsUrl('login')" target="_blank" class="font-semibold">
                Login
              </a>
              or
              <a
                :href="$ojsUrl('user/register')"
                target="_blank"
                class="font-semibold"
              >
                Register
              </a>
              to make a submission
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <SubmissionPreparationChecklist />
        <AuthorGuidelines />
        <!-- <NJTDPublicationEthics />
        <OpenAccessPolicy />
        <AbstractingAndIndexing />
        <CopyrightNotice />
        <PrivacyStatement /> -->
      </div>
    </section>
  </Layout>
</template>

<script>
import SubmissionPreparationChecklist from "~/components/SubmissionPreparationChecklist";
import AuthorGuidelines from "~/components/AuthorGuidelines";
// import NJTDPublicationEthics from "~/components/NJTDPublicationEthics";
// import OpenAccessPolicy from "~/components/OpenAccessPolicy";
// import CopyrightNotice from "~/components/CopyrightNotice";
// import PrivacyStatement from "~/components/PrivacyStatement";
// import AbstractingAndIndexing from "~/components/abstractingAndIndexing";

export default {
  metaInfo: {
    title: "Submit Paper",
  },

  components: {
    SubmissionPreparationChecklist,
    AuthorGuidelines,
    // NJTDPublicationEthics,
    // OpenAccessPolicy,
    // CopyrightNotice,
    // PrivacyStatement,
    // AbstractingAndIndexing,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
