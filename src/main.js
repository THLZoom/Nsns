// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import Vuex from 'vuex'
import $ from 'jquery'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Home from './components/home'
import Goods from './components/goods'
import Cart from './components/cart'
import Mine from './components/mine'
import Detail from './components/detail'
import Theme from './components/theme'
import GoodsList from './components/goodsList'
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(MintUI)

var routes=[
	{path:'/',component:Home},
	{path:'/home',component:Home},
	{path:'/goods',component:Goods},
	{path:'/cart',component:Cart},
  {path:'/mine',component:Mine},
  {path:'/detail',component:Detail},
  {path:'/theme',component:Theme},
  {path:'/goodsList',component:GoodsList}
]
var router = new VueRouter({
  	routes // （缩写）相当于 routes: routes
})

var store = new Vuex.Store({
  state: {
    anthor:'thl'
  },
  mutations: {
    changeColor(state,value){
      state.anthor=value
    }
  }
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
  router,
  store
})
