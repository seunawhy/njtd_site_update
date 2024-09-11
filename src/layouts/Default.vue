<template>
  <div class="">
    <Navbar />

    <div class="block sm:block md:hidden lg:hidden">
      <Search />
    </div>

    <section class="layout mb-10">
      <div class="grid grid-cols-12 mt-10">
        <div
          class="lg:col-span-9 md:col-span-12 sm:col-span-12 col-span-12 mb-5"
        >
          <transition name="slide" appear>
            <div class="lg:mr-10">
              <slot />
            </div>
          </transition>
        </div>
        <div class="lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
          <div class="py-5 px-0 sticky top-">
            <CurrentIssue />
            <Downloads />
            <Information />
            <!-- <Newsletters /> -->
            <div class="mb-6 mt-3">
              <h3 class="font-medium text-lg mb-2">
                <span
                  class="iconify text-xl gray-text mr-3"
                  data-icon="entypo:area-graph"
                ></span>
                Statistics
              </h3>
              <!-- <div class="ml-10">
                  <a href="https://www.ajol.info/stats/0bfa8d278ac3d3f52fd87681e6b9a9b31e711d75"
                    target="_blank">
                    AJOL views and article downloads by month
                  </a>
              </div> -->
              <div class="textwidget">
                <p>
                  <a
                    href="https://www.ajol.info/stats/0bfa8d278ac3d3f52fd87681e6b9a9b31e711d75"
                    target="_blank"
                    rel="noopener"
                  >
                    AJOL views and article downloads by month
                  </a>
                </p>
                              
                <p class="py-4">
                  <a
                    title="SCImago Journal &amp; Country Rank"
                    href="https://www.scimagojr.com/journalsearch.php?q=21101047441&amp;tip=sid&amp;exact=no"
                    target="_blank"
                    rel="noopener"
                    ><img
                      src="https://www.scimagojr.com/journal_img.php?id=21101047441"
                      alt="SCImago Journal &amp; Country Rank"
                      border="0"
                  /></a>
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>

    <Bottombar />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Search from "~/components/Search";
import Bottombar from "~/components/Bottombar";
import CurrentIssue from "~/components/CurrentIssue";
import Downloads from "~/components/Downloads";
import Information from "~/components/Information";
// import Newsletters from '~/components/Newsletters'

export default {
  components: {
    Navbar,
    Search,
    Bottombar,
    CurrentIssue,
    Downloads,
    Information,
    // Newsletters
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.slide-enter-active {
  transition: all 0.5s;
  transform: translateY(0px);
}

.slide-enter {
  transform: translateY(30px);
  opacity: 0.3;
}
</style>
