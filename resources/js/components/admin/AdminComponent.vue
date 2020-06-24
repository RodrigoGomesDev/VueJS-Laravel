<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav">
                <li class="nav-item mr-5">
                    <router-link :to="{name: 'admin.dashboard'}">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'admin.categories'}">Categories ({{ totalCategories }})</router-link>
                </li>
            </ul>
        </nav>
        <div class="container">

        <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        totalCategories() {
            return this.$store.state.Categories.items.data.length
        }
    }
}
</script>

<style scoped>

</style>