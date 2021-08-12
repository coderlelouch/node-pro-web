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
			name:'login',
			component: Login,
			meta:{title:'登录页'}
		},
		{
			path:'/index',
			name:'index',
			component: Home,
			meta:{title:'首页'}
		},
		{
			path:'/label',
			name:'label',
			component:Label,
			meta:{title:'字段管理'}
		},
		{
			path:'/product',
			name:'product',
			component: Product,
			meta:{title:'全部信息'}
		}
	]
})


export default router