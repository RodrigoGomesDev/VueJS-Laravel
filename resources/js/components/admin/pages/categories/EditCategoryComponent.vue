<template>
    <div>
        <h1>Editar Categoria</h1>

        <form-cat :category="category"></form-cat>
    </div>
    
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent'
export default {
    props: {
        id: {
            require: true
        }
    },
    created () {
        this.$store.dispatch('loadCategory', this.id)
                    .then (response => this.category = response)
                    .catch (errors => {
                        console.log(errors)
                    })
    },
    data () {
        return {
            category: {}
        }
    },

    components: {
        formCat: FormCategoryComponent
    }
}
</script>

<style scoped>
</style>