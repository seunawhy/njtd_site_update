<template>
    <Layout>
        <h1 class="text-3xl font-bold mb-5">Information for Authors</h1>

        <section>
            <p>
                Interested in submitting to this journal? We recommend that you review the <g-link to="/about">About the Journal</g-link> page for the journal's section policies, as well as the <g-link to="/submissions#author-guidelines">Author Guidelines</g-link>. Authors need to <a :href="$ojsUrl('user/register')" target="_blank">register</a> with the journal prior to submitting or, if already registered, can simply <a :href="$ojsUrl('login')" target="_blank">login</a> and begin the five-step process.
            </p>
        </section>
    </Layout>
</template>

<script>
export default {
    name: 'information-for-authors'
}
</script>

<style lang="scss" scoped>

</style>