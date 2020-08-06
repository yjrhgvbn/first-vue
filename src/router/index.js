import Vue from 'vue'
import Router from 'vue-router'
import filter from '../views/homePage/filter'
import index from '../views/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: index
    },
    {
      path:'/home',
      name: 'Home',
      component: filter
    },
    {
      path:'/login',
      name: 'LogIn',
      component: (resolve) => require(['../views/longin/longin'], resolve)
    },
    {
      path:'/user/cart',
      name: 'Cart',
      component: (resolve) => require([`../views/cart/cart`], resolve)
    },
    {
      path:'/home/:id',
      name: 'Product',
      component: (resolve) => require([`../views/productDetail/productSummary`], resolve)
    }
  ]
})
