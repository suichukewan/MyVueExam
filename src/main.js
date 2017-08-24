import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'animate.css/animate.css'
import Home from './views/Home.vue'
import Mock from 'mockjs'
import AxiosPlugin from './plugins/axios.js';
//UI库
Vue.use(ElementUI);
Vue.use(AxiosPlugin,'$http');

//路由
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: Home
  }
];
const router = new VueRouter(
  {
    mode: 'history',
    routes
  }
);

//状态管理
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    showDagger: true
  },
  mutations: {
    daggerCtrl(state) {
      state.showDagger = !state.showDagger
    }
  }
});


//模拟数据请求
Mock.mock('/api/getNewItems', {
  "newData|4-8": [{
    'cate|1': [
      "日常记录",
      "重大发现",
      "情感交流"
    ],
    'descript': '@cparagraph(5, 7)',
    'title': '@ctitle(8,14)',
    'datetime': '@date()',
    'image':'@image(220x150,@color,#FFF)'
  }]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
