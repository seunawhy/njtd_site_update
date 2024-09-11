<template>
    <div class="mb-6">
        <div class="pane-section__header flex items-center justify-start pt-3 px-5">
            <span
                class="iconify text-xl gray-text mr-3 -mt-3"
                :data-icon="`entypo:${icon}`">
            </span>
            <h3 class="font-medium text mb-2">{{ title }}</h3>
        </div>
        <div class="pane-section__body px-5 py-3">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pane-section',
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.pane-section__header {
    background-color: #F7F7F7;
    border-bottom: 1px solid #EAEAEA;
    border-radius: $radius $radius 0 0;
}

.pane-section__body {
    background-color: #F7F7F7;
    border-radius: 0 0 $radius $radius;
}
</style>