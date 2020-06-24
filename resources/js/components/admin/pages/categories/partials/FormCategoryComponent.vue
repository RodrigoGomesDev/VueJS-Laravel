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
                    name: ''
                }
            }
        }
    },
    methods: {
        submitForm () {
            this.$store.dispatch('storeCategory', this.category)
                        .then(() => this.$router.push({ name: 'admin.categories' }))
                        .catch()
        }
    }
}
</script>