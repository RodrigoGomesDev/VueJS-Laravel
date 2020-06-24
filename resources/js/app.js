require('./bootstrap');
window.Vue = require('vue');

import router from './routes/router';
import store from './vuex/store';

Vue.component('admin-component', require('./components/admin/AdminComponent').default)
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default)

import Vue from 'vue';

const app = new Vue({
    router,
    store,
    el: '#app'
});