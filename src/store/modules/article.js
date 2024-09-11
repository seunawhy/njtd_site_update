import { $http } from '~/utils/http'

export default {
    namespaced: true,

    state: {
        articles: [],
        all: [],
        recent: []
    },

    getters: {
        all: state => state.articles,
        allArticles: state => state.all,
        recent: state => state.recent
    },

    mutations: {
        SET(state, property) {
            state[property.target] = property.value
        }
    },

    actions: {
        async fetchArticles({ commit }) {
            let articles = []
            commit('SET_STATE', {
                target: 'loading',
                value: true
            }, { root: true })
            try {
                let submissions = await $http.get('/issues/current')
                submissions.articles.forEach((submission) => {
                    articles.push(...submission.publications)
                })
                commit('SET_STATE', {
                    target: 'currentIssue',
                    value: {
                        id: submissions.id,
                        identification: submissions.identification,
                        coverImage: submissions.coverImageUrl,
                        datePublished: submissions.datePublished
                    }
                }, { root: true })
                let arts = articles
                arts.sort((f, s) => {
                    let fPages = f.pages.split('-')
                    let sPages = s.pages.split('-')
                    if (isNaN(parseInt(fPages[0]))) return 1
                    else if (isNaN(parseInt(sPages[0]))) return 1
                    return parseInt(fPages[0]) > parseInt(sPages[0]) ? 1 : -1
                })
                commit('SET', {
                    target: 'all',
                    value: arts
                })
            } catch (ex) {
                console.log(ex)
                commit('SET_STATE', {
                    target: 'currentIssue',
                    value: null
                }, { root: true })
                commit('SET', {
                    target: 'all',
                    value: null
                })
            }
            commit('SET_STATE', {
                target: 'loading',
                value: false
            }, { root: true })
        }
    }
}