import Vue from 'vue';
import Router from 'vue-router';
import Team from '~/components/Team.vue'; // Import your Team component
import Profile from '~/components/Profile.vue'; // Import your Profile component

Vue.use(Router);

export default new Router({
  mode: 'history', // Use history mode to avoid hash in URLs (optional)
  routes: [
    {
      path: '/',
      name: 'Team',
      component: Team
    },
    {
      path: '/profile/:memberName',  // Dynamic route for member profiles
      name: 'Profile',
      component: Profile,
      props: true  // Allow route params to be passed as props
    },
    // Add other routes as needed
    { path: '*', redirect: '/' }  // Redirect any 404s to the homepage
  ]
});