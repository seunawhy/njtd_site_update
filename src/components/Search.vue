<template>
    <form @submit.prevent="search">
        <div class="flex">
            <input v-model.trim="searchPhrase"
                class="white text-xs black-text flex items-center content-start px-3"
                placeholder="By Title or Author">
            <button class="block orange px-5 white-text text-sm font-medium flex items-center content-center">
                Search
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data () {
        return {
            searchPhrase: ''
        }
    },

    methods: {
        search () {
            if (this.searchPhrase.length > 0) {
                this.$router.push(`search?q=${this.searchPhrase}`)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
input, button {
    height: 32px;
}

input {
    border-radius: 4px 0 0 4px;
}

button {
    border-radius: 0 4px 4px 0;
}
</style>