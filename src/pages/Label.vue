<template>
	<div class="container">
		<Aside></Aside>
		<div class="main-box">
			<Header></Header>
			<div class="table-box">
				<el-button>添加信息项</el-button><span style="margin-right: 10px;"></span>
				<el-select v-model="nowSelect" placeholder="请选择">
					<el-option
					v-for="(item,key) in tableData" :key="key" :label="item.name" :value="key">
					</el-option>
				</el-select>
				<el-table :data="tableData[nowSelect].label" stripe style="width: 100%;">
					<el-table-column prop="title" label="信息项名称" width="180"></el-table-column>
					<el-table-column prop="type" label="类型" width="180"></el-table-column>
					<el-table-column prop="serach" label="设为查询条件" width="180">
						<template slot-scope="scope">{{ scope.row.serach | isTrue }}</template>
					</el-table-column>
					<el-table-column prop="fill" label="设为查询必填" width="180">
						<template slot-scope="scope">{{ scope.row.fill | isTrue }}</template>
					</el-table-column>
					<el-table-column prop="show" label="查询结果展示" width="180">
						<template slot-scope="scope">{{ scope.row.show | isTrue }}</template>
					</el-table-column>
					<el-table-column prop="sequence" label="排序" width="180"></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
							<el-button type="danger" size="small"  icon="el-icon-delete">删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../components/header.vue'
	import Aside from '../components/aside.vue'
	export default {
		name: 'Label',
		data() {
			return {
				nowSelect:0
			}
		},
		computed: {
			tableData(){
					return this.$store.state.excelTable
			}
		},
		components: {
			Aside,
			Header
		},
		filters:{
			isTrue(value){
				return value?'√':'×'
			}
		}
	}
</script>

<style scoped>
</style>
