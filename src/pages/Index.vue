<template>
	<div class="container">
		<Aside></Aside>
		<div class="main-box">
			<Bar></Bar>
			<div class="table-box">
				<el-button size="medium">excel导入</el-button>
				<el-button size="medium">手动添加</el-button>
				 <el-table :data="tableData"  style="width: 100%">
				 	<el-table-column prop="name" label="项目名称"> 
				 	</el-table-column>
					<el-table-column prop="status" label="查询状态">
					</el-table-column>
					<el-table-column prop="status" label="查询权限">
					</el-table-column>
					<el-table-column prop="sequence" label="排序">
					</el-table-column>
				 </el-table>
			</div>
		</div>
	</div>
</template>

<script>
	import Aside from '../components/aside.vue'
	import Bar from '../components/bar.vue'
	export default {
		name: 'Index',
		data() {
			return {
				tableData:[{
					name:'示范表名',
					status:1,
					sequence:1
				}]
			}
		},
		filters:{
			dataFormat(status){
				return status>0?'√':'×'
			}
		},
		components: {
			Aside,
			Bar
		}
	}
</script>

<style>
	.container {
		display: flex;
		width: 100%;
		max-width: 100%;
		min-height: 100vh;
	}

	.main-box {
		flex: 1;
		background-color: #e8eaed;
		padding: 30px;
	}
	.table-box{
		background-color: #fff;
		padding: 25px;
	}
	.el-table {
		width: 100%;
	}
</style>
