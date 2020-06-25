<template>
    <div>
        <form class="form" @submit.prevent="submitForm" data-toggle="validator">
            <div class="form-group">
                <div class="help-block with-errors" id="error"></div>	
                <input type="text" v-model="category.name" class="form-control c-error c-validation" placeholder="Nome da Categoria:" data-error="O campo nome é obrigatório." required>
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
                        .then(() => {
                            this.$snotify.success('Sucesso ao cadastrar', 'Sucesso')

                            this.$router.push({ name: 'admin.categories' })
                        })
                        .catch(error => {
                            this.$snotify.error('Algo deu errado no registro', 'Error')

                        })
        }
    }
}
</script>

<style scoped>
    #error {
        background-color: #fddfde;
        border-color: #fbc7c6;
        color: #404040;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    }
</style>