<template>
	 <div class="block">
	    <span class="demonstration">完整功能</span>
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-sizes="[10, 15, 20, 30]"
	      :page-size="10"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="400">
	    </el-pagination>
	  </div>
</template>

<script>
	  export default {
		name:'page',
	    methods: {
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      }
	    },
	    data() {
	      return {
	        currentPage: 1,
			
	      };
	    }
	  }
</script>

<style>
</style>
