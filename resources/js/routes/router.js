import Vue from 'vue';
import VueRouter from 'vue-router';

import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'
import AdminComponent from '../components/admin/AdminComponent'
Vue.use(VueRouter);

const routes = [
    {
        path : '/admin',
        component: AdminComponent,
        children: [
            {
                path : '/', 
                component: DashboardComponent, 
                name: 'admin.dashboard'
            },
            {
                path : 'categorias', 
                component: CategoriesComponent, 
                name: 'admin.categories'
            },
            {
                path : 'categorias/registrar', 
                component: AddCategoryComponent, 
                name: 'admin.categories.create'
            },
            {
                path : 'categorias/:id/editar', 
                component: EditCategoryComponent, 
                name: 'admin.categories.edit',
                props: true
            },
        ]
    },
];

const router = new VueRouter({
    routes
})

export default router;