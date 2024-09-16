<template>
    <Layout>
      <div class="profile-container flex mt-10">
        <div class="profile-picture w-1/4 mr-10">
          <img :src="member.picture" alt="Profile Picture" class="rounded-full w-full h-auto" />
        </div>
        <div class="profile-details w-3/4">
          <h1 class="text-3xl font-bold mb-3">{{ member.name }}</h1>
          <p class="text-xl mb-2"><strong>Portfolio:</strong> {{ member.portfolio }}</p>
          <p class="text-lg mb-1"><strong>Department:</strong> {{ member.dept }}</p>
          <p class="text-lg mb-1"><strong>Institution:</strong> {{ member.institution }}</p>
          <p class="text-lg mb-1"><strong>Location:</strong> {{ member.location }}</p>
        </div>
      </div>
    </Layout>
  </template>
  
  <script>
  import board from '~/contents/board.json'
  
  export default {
    name: 'Profile',
    data () {
      return {
        member: null
      }
    },
    created() {
      const memberName = this.$route.params.memberName
      this.member = this.getMemberDetails(memberName)
    },
    methods: {
      getMemberDetails(name) {
        const allMembers = [...board.main, ...board.section, ...board.guest, ...board.advisory]
        return allMembers.find(member => member.name === name)
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-container {
    display: flex;
  }
  .profile-picture {
    width: 25%;
  }
  .profile-details {
    width: 75%;
  }
  </style>