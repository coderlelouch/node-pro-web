import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../pages/Index.vue'
import Login from '../pages/Login.vue'
import Label from  '../pages/Label.vue'
import Product from '../pages/Product.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			redirect:'/index'
		},
		{
			path:'/login',
			name:'登录',
			component: Login,
			meta:{title:'登录'}
		},
		{
			path:'/index',
			name:'项目管理',
			component: Home,
			meta:{title:'项目管理'}
		},
		{
			path:'/label',
			name:'字段管理',
			component:Label,
			meta:{title:'字段管理'}
		},
		{
			path:'/product',
			name:'全部产品',
			component: Product,
			meta:{title:'全部产品'}
		}
	]
})


export default router