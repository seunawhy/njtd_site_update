<template>
  <div class="downloads-pane-section">
    <PaneSection title="Information for Authors" icon="info-with-circle">
      <div class="mb-2">
        <g-link to="/publication-ethics#abstracting_and_indexing">
          Abstracting and Indexing
        </g-link>
      </div>
      <div class="mb-2">
        <g-link to="/submissions#open_access_agreement">
          Article Publication Charge
        </g-link>
      </div>
      <div class="mb-2">
        <g-link to="/publication-ethics">
          Publication Ethics
        </g-link>
      </div>
      <div class="mb-2">
        <g-link to="/publication-ethics#privacy-statement">
          Peer Review Process
        </g-link>
      </div>
    </PaneSection>
  </div>
</template>

<script>
import PaneSection from "~/components/PaneSection";

export default {
  name: "information",
  components: {
    PaneSection,
  },
};
</script>

<style lang="scss" scoped></style>``
