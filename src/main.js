import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  devServer: {
    disableHostCheck: true,
  },
  render: (h) => h(App),
}).$mount('#app');
