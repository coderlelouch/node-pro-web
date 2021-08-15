<template>
	<div class="container">
		<Aside></Aside>
		<div class="main-box">
			<Header></Header>
			<div class="table-box">
				<el-button size="medium">excel导入</el-button>
				<el-button size="medium">手动添加</el-button>
				<el-table :data="modelData" style="width: 100%">
					<el-table-column prop="name" label="项目名称">
					</el-table-column>
					<el-table-column prop="status | statusFormat" label="查询状态">
						<template slot-scope="scope">{{ scope.row.status | statusFormat }}</template>
					</el-table-column>
					<el-table-column prop="status" label="查询权限">
						<template slot-scope="scope">{{ scope.row.status | orderFormat }}</template>
					</el-table-column>
					<el-table-column prop="sequence" label="排序">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button type="primary" size="small" icon="el-icon-edit" @click="IsUpdate=!IsUpdate">修改</el-button>
							<el-button type="danger" size="small" @click="handledelete(scope.$index)" icon="el-icon-delete">删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
				<out-input v-show="IsUpdate" class="transition-box"></out-input>
				<Upload></Upload>
			</div>
		</div>
	</div>
</template>

<script>
	import Aside from '../components/aside.vue'
	import Header from '../components/header.vue'
	import OutInput from '../components/outInput.vue' 
	import Upload from '../components/Upload.vue'
	export default {
		name: 'Index',
		data() {
			return {
				modelData:this.excelTable,
				IsUpdate:false
			}
		},
		filters: {
			statusFormat(status) {
				return status > 0 ? '√' : '×'
			},
			orderFormat(status) {
				switch (status) {
					case 0:
						return '超级管理员'
					case 1:
						return '所有人'
				}
			}
		},
		methods:{
			handledelete(index){
				console.log('已删除',index)
				this.modelData.splice(index,1);
			},
			handleUpdate(){
				console.log('修改成功!')
			}
		},
		components: {
			Aside,
			Header,
			OutInput,
			Upload
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

	.table-box {
		background-color: #fff;
		padding: 25px;
	}
	.el-table {
		width: 100%;
		margin-top: 20px;
	}
</style>
