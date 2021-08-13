<template>
	<div class="container">
		<Aside></Aside>
		<div class="main-box">
			<Header></Header>
			<div class="table-box">
				<el-button>添加信息</el-button>
				<el-button>批量修改</el-button>
				<el-button>删除选中</el-button>
				<span style="margin-right: 10px;"></span>
				<el-select v-model="nowSelect" placeholder="请选择">
					<el-option
					v-for="(item,key) in tableData" :key="key" :label="item.name" :value="key">
					</el-option>
				</el-select>
				<el-table ref="multipleTable" tooltip-effect="dark" 
				:data="tableData[nowSelect].data" 
				@selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column 
					 v-for="(itemLabel) in tableData[nowSelect].label" 
					:key="itemLabel.id"
					:prop="itemLabel.id"
					:label="itemLabel.title">
					</el-table-column>
					<el-table-column align="right">
						 <template slot="header" slot-scope="scope">
						        <el-input
						          v-model="search"
						          size="mini"
						          placeholder="输入关键字搜索"/>
						  </template>
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
	import Aside from '../components/aside.vue'
	import Header from '../components/header.vue'
	export default {
		name: 'Product',
		data() {
			return {
				nowSelect:0,
				multipleSelection: [],
				search:''
			}
		},
		components: {
			Aside,
			Header
		},
		computed: {
			tableData(){
					return this.$store.state.excelTable
			}
		},
		methods:{
			handleSelectionChange(val){
				this.multipleSelection = val;
			}
		}
	}
</script>

<style>
</style>
