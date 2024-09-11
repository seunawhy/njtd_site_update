<template>
  <div>
    <div class="navy-blue pt-6 pb-6">
      <div
        class="w-full flex flex-col px-3 space-y-4 md:flex-row items-start justify-center md:space-x-7 md:space-y-0 md:px-32"
      >
        <div
          class="flex md:w-64 w-full flex-col flex-auto border-b md:border-r md:border-b-0 border-dashed py-4 "
        >
          <div class="flex justify-start items-start">
            <g-image responsive src="/img/unilorin.png" class="shadow-lg" />
            <div class="ml-5">
              <div class="white-text">
                <h1 class="text-lg font-semibold">
                  Nigerian Journal of Technological Development
                </h1>
              </div>
            </div>
          </div>
          <div class="white-text mt-2">
            <h2 class="font-bold">
              Faculty of Engineering and Technology,
            </h2>
            <h2 class="text-md font-bold">
              University of Ilorin, Kwara State, Nigeria.
            </h2>
            <div class="text-sm text-white mr-5 mt-5 text-justify">
              All research articles published in the Nigerian Journal of
              Technological Development are fully open access. They are
              immediately freely available to read, download and share. Articles
              are published under the terms of a Creative Commons license which
              permits use, distribution and reproduction in any medium, provided
              the original work is properly cited.
            </div>
          </div>
        </div>
        <div
          class="flex md:w-2 w-full h-full flex-col flex-auto space-y-2 border-b md:border-r md:border-b-0 border-dashed pb-4"
        >
          <div class="text-gray-200 text-lg font-bold">Copyright</div>
          <div>
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              <g-image
                responsive
                src="../../static/bodies/copy-right-logo.png"
                class="shadow-lg"
              />
            </a>
          </div>
          <div class="text-white text-justify copyright pr-3">
            This work is licensed under a
            <span>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                Creative Commons Attribution-ShareAlike 4.0 International
                License.
              </a>
            </span>
          </div>
        </div>
        <div
          class="flex md:w-2 w-full h-full flex-col flex-auto space-y-2 border-b sm:border-r sm:border-b-0 border-dashed pb-4"
        >
          <div class="text-xl text-white">Follow us</div>
          <div class="flex w-full socialLinks">
            <div class="bg-gray-100 mx-1">
              <a
                target="_blank"
                rel="noopener"
                href="https://twitter.com/NjtdMan"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
              /></a>
            </div>
            <div class="bg-gray-100 mx-1">
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/nigerian-journal-of-technological-development-668b75140/"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
              /></a>
            </div>
            <div class="bg-gray-100 mx-1">
              <a target="_blank" rel="noopener" href="https://www.youtube.com/">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/youtube--v1.png"
              /></a>
            </div>
            <div class="bg-gray-100 mx-1">
              <a
                target="_blank"
                rel="noopener"
                href="https://web.facebook.com/"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="flex items-center flex-autojustify-start text-left md:justify-center md:text-center"
        >
          <!-- <img src="../../static/bodies/trusted-site-seal.png" />  -->
        </div>
      </div>
    </div>
    <div class="hidden md:flex md:flex-col site-footer">
      <div class="flex w-full items-center justify-center text-white py-4">
        <div
          :class="{
            'border-r': !isLast(i),
          }"
          class=" px-2 text-white"
          v-for="(q, i) in quickLinks"
          :key="i"
        >
          <g-link :to="q.url">
            {{ q.name }}
          </g-link>
        </div>
      </div>
      <div class="flex items-center justify-center text-white">
        © Copyright NJTD 2022. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom-bar",
  data() {
    return {
      quickLinks: [
        { name: "Home", url: "/" },
        { name: "Archives", url: "/archive" },
        { name: "Announcements", url: "/announcements" },
        {
          name: "Publication Ethics",
          url: "/submissions#njtd-publication-ethics",
        },
        { name: "Submit Paper", url: "/submissions" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
      ],
    };
  },
  methods: {
    isLast(i) {
      return i == this.quickLinks.length - 1;
    },
  },
};
</script>
<style scoped>
.site-footer {
  background-color: #15305b;
  /* color: white !important; */
}
.site-footer a {
  color: white !important;
}
.copyright a {
  color: white !important;
}
</style>
