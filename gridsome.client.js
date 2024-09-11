import { $http, $downloadApi } from '~/utils/http'

export default function(Vue, { appOptions, head }, context) {
    Vue.prototype.$http = $http
    Vue.prototype.$downloadApi = $downloadApi
    Vue.prototype.$ojsUrl = (endpoint) => `https://journal.njtd.com.ng/index.php/njtd/${endpoint}`
}