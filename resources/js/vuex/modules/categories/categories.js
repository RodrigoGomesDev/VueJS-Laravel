export default {
    state: {
        items: {
            data: []
        },
    },
    mutations: {
        LOAD_CATEGORIES (state, categories) {
            state.items = categories;
        }
    },
    actions: { 
        loadCategories(context) {
            context.commit('CHANGE_PRELOADER', true)
            axios.get('http://laravel-vue.test/api/category')
                    .then(response => {
                        console.log(response)
                    
                        context.commit('LOAD_CATEGORIES', response)
                    })
                    .catch(errors => {
                        console.log(errors);
                    })
                    .finally(() => context.commit('CHANGE_PRELOADER', false))
        },

        storeCategory (context, params) {
            context.commit('CHANGE_PRELOADER', true)

            new Promise((resolve, reject ) => {
                axios.post('http://laravel-vue.test/api/category', params)
                        .then(response => resolve())                    
                        
                        .catch(errors => reject(errors))

                        .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        }
    },
    getters: {
        
    }
}