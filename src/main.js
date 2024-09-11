// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuex from 'vuex'
import NProgress from 'nprogress'
import store from '~/store'
import '~/assets/scss/main.scss'
import "nprogress/nprogress.css";
import Filters from '~/utils/filters.js'
import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, {
    appOptions,
    router,
    head,
    isClient
}) {
    Vue.use(Vuex)
    appOptions.store = new Vuex.Store(store)
    appOptions.store.dispatch('Article/fetchArticles', null, { root: true })
        // Append relevant links
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    })
    head.link.push({
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
    })
    head.script.push({
        src: 'https://code.iconify.design/1/1.0.6/iconify.min.js'
    })
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    // Inject filters
    Object.keys(Filters).forEach((filter) => {
        Vue.filter(filter, Filters[filter])
    })

    // Add router hook
    router.beforeEach((to, from, next) => {
        if (!to.hash && typeof document !== "undefined") {
            NProgress.start();
        }
        next();
    });

    router.afterEach((to, from) => {
        if (!to.hash && typeof document !== "undefined") {
            NProgress.done();
        }
    });
}