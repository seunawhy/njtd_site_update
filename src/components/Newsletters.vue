<template>
    <div class="downloads-pane-section">
        <PaneSection title="Newsletters" icon="message">
            <p class="gray-text mb-3">
                Receive emails when a new paper is published
            </p>
            <input placeholder="Email Address" class="py-3 px-5 full-width mb-2">
            <button class="orange font-medium white-text py-3 mb-3 full-width">
                Subscribe
            </button>
        </PaneSection>
    </div>
</template>

<script>
import PaneSection from '~/components/PaneSection'

export default {
    name: 'newsletters',
    components: {
        PaneSection
    }
}
</script>

<style lang="scss" scoped>
input {
    background-color: #DEDEDE;
}

input, button {
    border-radius: 4px;
}
</style>