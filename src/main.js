// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Home from './components/home'
import Goods from './components/goods'
import Cart from './components/cart'
import Mine from './components/mine'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

var routes=[
	{path:'/',component:Home},
	{path:'/home',component:Home,children:[{path:''}]},
	{path:'/goods',component:Goods},
	{path:'/cart',component:Cart},
	{path:'/mine',component:Mine}
]
var router = new VueRouter({
  	routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  methods:{
	  getRem:function(){
		  // rem动态设置  12.5px=1rem
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 30 + 'px';
        window.addEventListener('resize', function () {
            document.documentElement.style.fontSize = innerWidth / 30 + 'px';
        });
	  }()
  },
  router
})
