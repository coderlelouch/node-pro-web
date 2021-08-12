<template>
  <div class="login-bg">
	  <div class="login-box">
		  <h1 class="title">海燕产品管理系统</h1>
		  <el-form :model="user" :rules="rules" ref="ruleForm" label-width="60px">
			 <el-form-item label="用户名" prop="userName">
			 <el-input v-model="user.userName" ></el-input>
			 </el-form-item>
			 
			 <el-form-item label="密码" prop="passsWord">
			 <el-input  v-model="user.passWord" show-password></el-input>
			 </el-form-item> 
			 
			 <el-form-item>
			   <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
			 </el-form-item>
		  </el-form>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
	  return{
		  user:{
			  userName:'admin',
			  passWord:'admin'
		  },
	  }
  },
  methods:{
	  submitForm(formName){
		  this.$router.push('/');
	  }
  }
}
</script>
<style scoped>
	.login-bg{
		background-color: #0f175f;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 100vh;
	}
	.login-box{
		padding: 30px 50px;
		background-color: #fff;
		border-radius: 1rem;
		box-shadow: 0 0 10px rgba(0,0,0,.6);
	}
	.login-box .title{
		text-align: center;
		font-size: 3rem;
		color: #999;
		margin-bottom: 4rem;
		padding-right: 3rem;
	}
</style>
