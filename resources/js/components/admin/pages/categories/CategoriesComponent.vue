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
                <td>
                    <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}} "  class="btn btn-info">Editar</router-link>
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
        return this.$store.dispatch('loadCategories')
    },

    computed: {
        categories() {
            return this.$store.state.Categories.items
        }
    }
}
</script>

<style scoped>

</style>