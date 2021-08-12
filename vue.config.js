module.exports={
    lintOnSave:false,
	devServer: {       
	        proxy: {
	          '/api': {
	            target: 'http://local:313',
	            changeOrigin: true,
				ws:true
	          }
	        }
	    }
}