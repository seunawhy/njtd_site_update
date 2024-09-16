import Team from '@/Pages/Team.vue'
import Profile from '@/Pages/Profile.vue'

const routes = [
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/profile/:memberName',
    name: 'profile',
    component: Profile,
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})