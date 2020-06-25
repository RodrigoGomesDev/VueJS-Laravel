require('./bootstrap');
window.Vue = require('vue');

import Snotify from 'vue-snotify';
import router from './routes/router';
import store from './vuex/store';

Vue.use(Snotify, {toast: {showProgressBar: false}})
// Vue.use(Snotify);

Vue.component('admin-component', require('./components/admin/AdminComponent').default)
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default)

import Vue from 'vue';

const app = new Vue({
    router,
    store,
    el: '#app'
});