<template>
    <Layout>
        <!-- <h1 class="text-3xl font-bold mb-5">Contact</h1> -->

        <section class="mb-10">
          <h1 class="text-xl font-bold">Nigerian Journal of Technological Development</h1>
          <h2>Faculty of Engineering and Technology</h2>
          <h2>University of Ilorin</h2>
          <h2>PMB 1515</h2>
          <h2>Ilorin, Kwara State</h2>
          <h2>Nigeria.</h2>
        </section>

        <section class="flex -mx-2">
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 p-3">
            <div class="contact-box py-5 px-8 rounded-lg mb-8">
              <h4 class="text-xl orange-text mb-1">Principal Contact</h4>
              <p class="text-lg">
                Engr. Dr. H. U. Hambali
              </p>
              <p class="dark-text">Managing Editor</p>

             <h5 class="font-semibold mt-3">Email Address</h5>
              <a href="mailto://njtd_man_editor@unilorin.edu.ng">
                njtd_man_editor@unilorin.edu.ng
              </a>
            </div>
          </div>

          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 p-3">
            <div class="contact-box py-5 px-8 pb-12 rounded-lg mb-8">
              <h4 class="text-xl orange-text mb-1">Support Contact</h4>
              <p class="text-lg">
                Engr.(Mrs).O. F. Atilola
              </p>
              <p>Editorial Assistant</p>

              <h5 class="font-semibold mt-3">Email Address</h5>
              <a href="mailto://atilolaolubunmi@gmail.com">
                atilolaolubunmi@gmail.com
              </a>
            </div>
          </div>

        </section>
    </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style lang="scss" scoped>
.contact-box {
  background-color: #FAFAFA;
}
</style>
