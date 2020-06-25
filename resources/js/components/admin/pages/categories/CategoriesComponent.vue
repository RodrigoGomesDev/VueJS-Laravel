<template>
    <div>
        <h1>Listagem das categorias</h1>
        <!-- <a href="" class="btn btn-success">Cadastrar</a> -->

        <router-link :to="{name: 'admin.categories.create'} "  class="btn btn-success">Cadastrar</router-link>
         <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th width="100">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td class="d-flex">
                    <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}} "  class="btn btn-info">Editar</router-link>
                    <a href="#" class="btn btn-danger" @click.prevent="confirmDestroy(category)">Remover</a>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created () {
        this.loadCategories();
    },

    computed: {
        categories() {
            return this.$store.state.Categories.items
        }
    },

    methods: {
        loadCategories() {
            this.$store.dispatch('loadCategories')
        },

        confirmDestroy (category) {
            this.$snotify.error(`Deseja realmente deletar a categoria: ${category.name}`, 'Deletar?', {
                timeout: 10000,
                showProgressBar: true,
                closeOnClick : true,
                oneInQueue: true,
                buttons: [
                    {text: 'Não'},
                    {text: 'Sim', action: () => this.destroy(category)}
                ]
            })
        },

        destroy(category) {
            return this.$store.dispatch('destroyCategory', category.id)
                                .then(() => {
                                    this.$snotify.success(`Sucesso ao deletar a categoria: ${category.name}`)

                                    this.loadCategories();
                                })
                                .catch(error => {
                                    console.log(error)

                                    this.$snotify.error('Erro ao deletar a categoria', 'Erro')
                                })
        }
    }
}
</script>

<style scoped>

</style>