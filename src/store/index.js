import modules from './modules'

const store = {
    state: {
        app: 'NJTD',
        loading: true,
        currentIssue: {},
        apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImViYmQ1NjA4NjAyOTI0MzVlMDRkOWJjMWUwNjVlN2FiNDQzYzFjMDEi.Obwx-fiRNomKBWE3P80rcjENp3lXubphquyWbPf5SrI',
        disciplines: [
            'Agricultural and Biosystems Engineering',
            'Biomedical Engineering',
            'Chemical Engineering',
            'Civil Engineering',
            'Computer Engineering',
            'Electrical and Electronics Engineering',
            'Food and Bioprocessing Engineering',
            'Materials and Metallurgical Engineering',
            'Mechanical Engineering',
            'Water Resources and Environmental Engineering',
            'Petroleum Engineering',
            'Engineering Management',
            'Applied Sciences',
            'Geophysics',
            'Geology',
            'Applied Mathematics'
        ],
        indexee_bodies: [{
            name: 'Scopus',
            img: '/scopus.jpg',
            url: 'https://www.scopus.com/sourceid/21101047441'
        },{
                name: 'Google Scholar',
                img: '/google_sch.png',
                url: 'https://scholar.google.com/citations?user=P7SNLsoAAAAJ&hl=en'
            },
            {
                name: 'AJOL',
                img: '/ajol.png',
                url: 'https://www.ajol.info/index.php/njtd'
            },
            {
                name: 'DOAJ',
                img: '/doaj logo.jpg',
                url: 'https://doaj.org/toc/2437-2110?source=%7B%22query%22%3A%7B%22filtered%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22term%22%3A%7B%22index.issn.exact%22%3A%222437-2110%22%7D%7D%2C%7B%22term%22%3A%7B%22_type%22%3A%22article%22%7D%7D%5D%7D%7D%2C%22query%22%3A%7B%22match_all%22%3A%7B%7D%7D%7D%7D%2C%22from%22%3A0%2C%22size%22%3A100%7D'
            },
             
                    ]
    },
    getters: {
        app: (state) => state.app,
        loading: (state) => state.loading,
        currentIssue: (state) => state.currentIssue,
        apiKey: (state) => state.apiKey,
        disciplines: (state) => state.disciplines,
        indexee_bodies: (state) => state.indexee_bodies,
    },

    mutations: {
        SET_STATE (state, { target, value }) {
            state[target] = value
        }
    },

    actions: {
        setState ({ commit }, payload) {
            commit('SET_STATE', payload)
        },

        setLoading ({ commit }, status) {
            commit('SET_STATE', {
                target: 'loading',
                value: status
            })
        }
    },

    // Modules
    modules
}

export default store
