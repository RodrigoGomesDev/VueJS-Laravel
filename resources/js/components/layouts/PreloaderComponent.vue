<template>
  <div class="vld-parent" v-show="preloader">
        <loading :active.sync="preloader" 
        
        ></loading>
    </div>
    <!-- <div class="preloader" v-show="preloader">
        <img src="../../../../public/images/" alt="Preloader...">
    </div> -->
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    components: {
        Loading
    },
    computed: {
        preloader() {
            return this.$store.state.preloader.loading
        }
    }
}
</script>

<style scoped>
/* .preloader{
    background: #000;
    position: absolute;
    z-index: 9999;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
}
.preloader img{
    padding: 15% 0;

} */
</style>