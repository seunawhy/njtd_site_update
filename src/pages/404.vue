<template>
    <div class="w-full h-screen flex flex-col justify-center items-center primary">
        <h1 class="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold secondary-text">
            Page Not Found
        </h1>
        <p class="white-text">
            The page you requested was not found. Try out a different page or Go <g-link to="/" 
            class="font-semibold white-text underline">
                Home
            </g-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'page-404'
}
</script>

<style lang="scss" scoped>

</style>