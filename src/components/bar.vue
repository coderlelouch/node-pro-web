<template>
		<el-breadcrumb class="bar" separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
		  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
		  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
</template>

<script>
	export default{
		name:'bar',
		data(){
			return{
			}
		}
	}
</script>

<style scoped>
	.bar{
		margin-bottom: 30px;
	}
</style>
