<template>
    <div>
        <h1>
            Adicionar nova categoria
        </h1>

        <form-cat></form-cat>

        <!-- <form class="form" @submit.prevent="submitForm">
            <div class="form-group">
                <input type="text" v-model="name" class="form-control" placeholder="Nome da Categoria:">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
        </form> -->
    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent'
export default {
    components: {
        formCat: FormCategoryComponent
    },
}
</script>

<style scoped>

</style>