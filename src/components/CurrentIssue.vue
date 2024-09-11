<template>
    <div class="mb-6">
        <h3 class="font-medium text-lg mb-2">
            <span class="iconify text-xl gray-text mr-2" data-icon="entypo:open-book"></span>
            Current Issue
        </h3>
        <div class="ml-1 gray-text" v-if="loading">
            Loading current issue ...
        </div>

        <div class="ml-1" v-else-if="currentIssue">
            <p>{{ currentIssue.identification }}</p>
            <p class="text-sm">Published on {{ currentIssue.datePublished | date }}</p>
        </div>

        <div class="ml-1 gray-text" v-else>
            No current issue
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'current-issue',
    
    computed: {
        ...mapGetters({
            loading: 'loading',
            currentIssue: 'currentIssue'
        })
    }
}
</script>

<style lang="scss" scoped>

</style>