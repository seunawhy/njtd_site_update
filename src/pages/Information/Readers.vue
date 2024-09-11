<template>
    <Layout>
        <h1 class="text-3xl font-bold mb-5">Information for Readers</h1>

        <section>
            <p>
                We encourage readers to sign up for the publishing notification service for this journal. Use 
                <a :href="$ojsUrl('user/register')" target="_blank">this</a> to register for the journal. This registration will result in the reader receiving the Table of Contents by email for each new issue of the journal. This list also allows the Journal to claim a certain level of support or readership.
            </p>

            <p class="mt-3">
                See the journal's <g-link to="/submissions#privacy-statement">Privacy Statement</g-link>, which assures readers that their name and email address will not be used for other purposes.
            </p>
        </section>
    </Layout>
</template>

<script>
export default {
    name: 'information-for-readers'
}
</script>

<style lang="scss" scoped>

</style>
