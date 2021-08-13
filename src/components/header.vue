<template>
	<div class="header">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/index' }">项目管理</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: this.$route.path }">{{this.$route.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default{
		name:'Header',
		data(){
			return{
			}
		}
	}
</script>

<style scoped>
	.header{
		display: flex;
		margin-bottom: 30px;
		background-color: #fff;
		padding: 25px;
		border-radius: 3px;
	}
</style>
