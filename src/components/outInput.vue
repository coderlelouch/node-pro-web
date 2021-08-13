<template>
	<div class="outInput-box">
		<el-form label-position="left" label-width="80px" :model="outInput">
		  <el-form-item label="名称">
		    <el-input v-model="outInput.name"></el-input>
		  </el-form-item>
		    <el-form-item label="查询状态" prop="status">
		      <el-radio-group v-model="outInput.status">
		        <el-radio label="可查询"></el-radio>
		        <el-radio label="禁止"></el-radio>
		      </el-radio-group>
		    </el-form-item>
			<el-form-item label="查询权限" prop="orders">
			  <el-radio-group v-model="outInput.orders">
			    <el-radio label="所有人"></el-radio>
			    <el-radio label="禁止"></el-radio>
			  </el-radio-group>
			</el-form-item>
		  <el-form-item label="排序">
		    <el-input v-model="outInput.sequncen"></el-input>
		  </el-form-item>
		    <el-form-item>
		      <el-button type="primary" >保存</el-button>
			  <el-button type="info" plain>重置</el-button>
		      <el-button type="primary" plain>取消</el-button>
		    </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		name:'outInput',
		props:{
			
		},
		data(){
			return{
				outInput:{
					name:'',
					status:'可查询',
					orders:'所有人',
					sequncen:1
				}
			}
		}
	}
</script>

<style scoped>
	.outInput-box{
		border-radius: 10px;
		width: 600px;
		max-width: 100%;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		border: 1px solid #ddd;
		padding: 45px 35px 35px;
		box-shadow: 0 3px 7px rgba(0,0,0,.15);
	}
</style>
