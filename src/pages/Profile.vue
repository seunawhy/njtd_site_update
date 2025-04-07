<template>
  <Layout>
    <!-- Content Wrapper to contain all sections and back button -->
    <div class="content-wrapper">
      <!-- Back Button Container with Arrow and Text -->
      <div class="back-button-container" @click="goBack">
        <svg class="back-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="back-text">Back</span>
      </div>

      <!-- Profile and Biography Sections -->
      <div class="profile-container flex items-start mt-10">
        <div class="profile-picture flex-shrink-0">
          <!-- <img :src="member.picture" alt="Profile Picture" class="rounded-full w-full h-auto" /> -->
          <img :src="getImage(member.picture)" alt="Profile Picture"  class="rounded-full w-full h-auto"/>
        </div>
        <div class="profile-details ml-12 flex-grow">
          <h1 class="text-4xl font-bold mb-4">{{ member.name }}</h1>
          <p class="text-xl mb-3"><strong>Portfolio:</strong> {{ member.portfolio }}</p>
          <p class="text-lg mb-3"><strong>Department:</strong> {{ member.dept }}</p>
          <p class="text-lg mb-3"><strong>Institution:</strong> {{ member.institution }}</p>
          <p class="text-lg mb-3"><strong>Location:</strong> {{ member.location }}</p>
        </div>
      </div>

      <!-- Biography Section -->
      <div class="biography-container mt-10">
        <h2 class="text-2xl font-semibold mb-5">Biography</h2>
        <p v-html="member.brief" class="text-base leading-relaxed"></p>
      </div>
    </div>
  </Layout>
</template>

<script>
import board from '~/contents/board.json';

export default {
  name: 'team',
  data() {
    const member = JSON.parse(localStorage.getItem("selected_member"));
    return {
      member,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navigate back to the previous page
    },
    getImage(picture) {
      // Check if the picture path is a relative path and resolve using require
      try {
        return require(`@/assets/img/${picture}`)
      } catch (error) {
        return picture // Return as is if it's an external URL
      }
    }
  }
}
</script>

<style scoped>
/* Content Wrapper to control layout and positioning */
.content-wrapper {
  position: relative; /* Make sure the back button is positioned relative to this container */
  padding: 1rem; /* Add padding if needed for spacing */
}

/* Back Button Styling */
.back-button-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  background-color: #ff6600; /* Bright orange background */
  color: #fff;
  border-radius: 12px; /* Rounded corners */
  padding: 0.5rem 1rem; /* Adjust padding for size */
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visibility */
  font-size: 0.875rem; /* Smaller font size for better fit */
}

.back-button-container:hover {
  background-color: #e65c00; /* Darken color on hover */
}

.back-arrow {
  width: 1rem; /* Adjust arrow size */
  height: 1rem; /* Adjust arrow size */
}

.back-text {
  margin-left: 0.5rem;
}

/* Profile section */
.profile-container {
  display: flex;
  align-items: stretch;
}

.profile-picture {
  width: 35%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-picture img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}

.profile-details {
  flex-grow: 1;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-details h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.profile-details p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  line-height: 1.75rem;
}

/* Biography section */
.biography-container {
  margin-top: 3rem;
}

.biography-container h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.biography-container p {
  font-size: 1rem;
  line-height: 1.75rem;
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
  }

  .profile-picture {
    width: 100%;
    margin-bottom: 2rem;
  }

  .profile-details {
    width: 100%;
    margin-left: 0;
  }
}
</style>
