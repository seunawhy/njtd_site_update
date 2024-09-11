<template>
    <div class="flex">
        <button @click="go(-1)" class="py-3 px-4 rounded-tl-md rounded-bl-md bg-gray-700 white-text text-xs font-medium">
            Prev
        </button>
        <button @click="go(1)" class="py-3 px-4 rounded-tr-md rounded-br-md bg-gray-600 white-text text-xs font-medium">
            Next
        </button>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    methods: {
        go (direction) {
            this.$emit(direction === 1 ? 'next' : 'previous')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>