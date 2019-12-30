import Vue from 'vue';
import App from './App.vue';
import MySelectComponent from './components/MySelectComponent.vue';

Vue.config.productionTip = false;


Vue.use(MySelectComponent);
Vue.component('my-select-component', MySelectComponent); //初始化组件

new Vue({
    render: h => h(App),
}).$mount('#app')

