//state
export const state = () => ({

    //threads
    threads: [],

    //page
    page: 1,

    //thread
    thread: {}
})

//mutations
export const mutations = {

    //mutation "SET_THREADS_DATA"
    SET_THREADS_DATA(state, payload) {

        //set value state "threads"
        state.threads = payload
    },

    //mutation "SET_PAGE"
    SET_PAGE(state, payload) {

        //set value state "page"
        state.page = payload
    },

    //mutation "SET_THREAD_DATA"
    SET_THREAD_DATA(state, payload) {

        //set value state "product"
        state.thread = payload
    },

}

//actions
export const actions = {

    //get threads data
    getThreadsData({ commit, state }, payload) {

        //search
        let search = payload ? payload : ''

        //set promise
        return new Promise((resolve, reject) => {

            //fetching Rest API "/threads" with method "GET"
            this.$axios.get(`/threads?q=${search}&page=${state.page}`)
            
            //success
            .then((response) => {

                //commit ti mutation "SET_THREADS_DATA"
                commit('SET_THREADS_DATA', response.data.data)

                //resolve promise
                resolve()
            })

        })

    },

    //store thread
    storeThread({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/thread" with method "POST"
            this.$axios.post('/threads', payload)

            //success
            .then(() => {

                //dispatch action "getThreadsData"
                dispatch('getThreadsData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },

    //get detail thread
    getDetailThread({ commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //get to Rest API "/threads:id" with method "GET"
            this.$axios.get(`/threads/${payload}`)

            //success
            .then(response => {

                //commit to mutation "SET_THREAD_DATA"
                commit('SET_THREAD_DATA', response.data.data)

                //resolve promise
                resolve()

            })

        })

    },

    //update Thread
    updateThread({ dispatch, commit }, { productId, payload }) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/threads" with method "POST"
            this.$axios.post(`/threads/${productId}`, payload)

            //success
            .then(() => {

                //dispatch action "getThreadsData"
                dispatch('getThreadsData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },

    //destroy threads
    destroyThread({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {
        
            //delete to Rest API "/threads" with method "DELETE"
            this.$axios.delete(`/threads/${payload}`)

            //success
            .then(() => {

                //dispatch action "getThreadsData"
                dispatch('getThreadsData')

                //resolve promise
                resolve()

            })

        })

    }

}