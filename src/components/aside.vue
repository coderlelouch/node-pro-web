<template>
	<div class="aside-box">
		<div class="logo">
			<img src="../assets/img/logo.png" />
		</div>
		<el-menu router 
		default-active="1" 
		background-color="#0F175F"
		text-color="#fff" >
			<el-menu-item index="/index">
			  <span slot="title">项目管理</span>
			</el-menu-item>
			<el-menu-item index="/label">
			  <span slot="title">字段管理</span>
			</el-menu-item>
			<el-menu-item index="/product">
			  <span slot="title">全部产品</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name:'Aside',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.aside-box{
			 flex: 0 0 24rem;
			 width: 24rem;
			 background-color: #0F175F;
			 padding: 2rem;
			 padding-right: 0;
	}
	.aside-box .logo{
			 margin-bottom: 3rem;
	}
	.aside-box .logo img{
			 max-width: 100%;
			 padding-right: 2rem;
	}
	.el-menu{
			 border: none;
	}
	.el-menu-item:hover{
			 background-color: #151d90!important;
	}
</style>
