import { createStore } from "vuex";


export default createStore({
    state: {
        title: "Innova Labs Assignment",
        routes: [
            {
                name: "Question A",
                description: 'Communication between components',
                path: '/communication'
            },
            {
                name: 'Question B',
                description: 'Paginated list',
                path: '/paginated'
            },
            {
                name: 'Question C',
                description: 'Dynamic form blocks',
                path: '/blocks'
            }
        ],
        paginatedList: []
    },
    getters: {
        getRoutes(state) {
            return JSON.parse(JSON.stringify(state.routes))
        },
        getList(state) {
            return JSON.parse(JSON.stringify(state.paginatedList))
        }
    },
    mutations: {
        setList(state, value) {
            state.paginatedList = value;
        }
    },
    actions: {
        async getList({ commit }) {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
            commit("setList", result)
        }
    },
    modules: {},
});