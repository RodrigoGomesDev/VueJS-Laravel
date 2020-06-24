<template>
    <div>
        <form class="form" @submit.prevent="submitForm">
            <div class="form-group">
                <input type="text" v-model="category.name" class="form-control" placeholder="Nome da Categoria:">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            require: false,
            type: Object|Array,
            default: () => {
                return {
                    id: '',
                    name: ''
                }
            }
        },
        updating: {
            require: false,
            type: Boolean,
            default: false
        }
    },
    methods: {
        submitForm () {
            const action = this.updating ? 'updateCategory' : 'storeCategory'

            this.$store.dispatch(action, this.category)
                        .then(() => this.$router.push({ name: 'admin.categories' }))
                        .catch()
        }
    }
}
</script>