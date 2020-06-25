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
                        // console.log(response)
                    
                        context.commit('LOAD_CATEGORIES', response)
                    })
                    .catch(errors => {
                        console.log(errors);
                        this.$snotify.errors('Categoria não encontrada', '404')

                        this.$router.push({name: 'admin.categories'})

                    })
                    .finally(() => context.commit('CHANGE_PRELOADER', false))
        },

        loadCategory (context, id) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject ) => {
                axios.get(`http://laravel-vue.test/api/category/${id}`)
                        .then(response => resolve(response.data))                    
        
                        .catch(errors => reject(errors))

                        .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        },

        storeCategory (context, params) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject ) => {
                axios.post(`http://laravel-vue.test/api/category`, params)
                        .then(response => resolve())                    
                        
                        .catch(errors => reject(errors))

                        .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        },
       
        updateCategory (context, params) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject ) => {
                axios.put(`http://laravel-vue.test/api/category/${params.id}`, params)
                        .then(response => resolve())                    
                        
                        .catch(errors => reject(errors))

                        .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        },

        destroyCategory (context, id) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject ) => {
                axios.delete(`http://laravel-vue.test/api/category/${id}`)
                        .then(response => resolve())                    
                        
                        .catch(errors => reject(errors))
            })
        }
    },
     getters: {
        
    }
}