<template>
    <div>
        <div class="flex flex-wrap">
            <img :src="issue.coverImageUrl.en_US" class="rounded-lg">
            <div class="ml-5">
                <g-link :to="`/issue?issue=${issue.id}`" class="font-semibold text-lg">
                {{ issue.identification }}
                </g-link>
                <h4>Published on {{ issue.datePublished | date }}</h4>
                <p class="mt-2 text-sm" v-if="issue.description.en_US">
                {{ issue.description.en_US }}
                </p>
                <p class="gray-text mt-2" v-else>No description for this issue</p>
            </div>
        </div>
        <hr class="border-gray-300 my-6">
    </div>
</template>

<script>
export default {
    name: 'issue',
    props: {
        issue: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
img {
  height: 120px;
}
</style>