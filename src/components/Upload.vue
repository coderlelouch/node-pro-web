<template>
	<a href="javascript:;" class="file">
		<input id="upload" type="file" @change="importfxx(this)"
			accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
	</a>
</template>

<script>
	export default {
		name: 'Upload',
		data() {
			return {

			}
		},
		methods: {
			importfxx(obj) {
				let _this = this
				// eslint-disable-next-line no-unused-vars
				let inputDOM = this.$refs.inputer

				// 通过DOM取文件数据

				this.file = event.currentTarget.files[0]

				var rABS = false // 是否将文件读取为二进制字符串

				var f = this.file
console.log(f)
				var reader = new FileReader()

				// if (!FileReader.prototype.readAsBinaryString) {

				FileReader.prototype.readAsBinaryString = function(f) {
					var binary = ''

					var rABS = false // 是否将文件读取为二进制字符串

					// eslint-disable-next-line no-unused-vars
					var pt = this

					var wb // 读取完成的数据

					var reader = new FileReader()
					reader.onload = function(e) {
						var bytes = new Uint8Array(reader.result)

						var length = bytes.byteLength

						for (var i = 0; i < length; i++) {
							binary += String.fromCharCode(bytes[i])
						}

						var XLSX = require('xlsx')
						if (rABS) {
							// eslint-disable-next-line no-undef
							wb = XLSX.read(btoa(fixdata(binary)), { // 手动转化

								type: 'base64'

							})
						} else {
							wb = XLSX.read(binary, {

								type: 'binary'

							})
						}

						_this.outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
						// outdata 数组里面  这里面就是你想要的数据

						console.log(_this.outdata)
						console.log(wb);
						_this.$message({

							message: '请耐心等待导入成功',

							type: 'success'

						})
					}

					reader.readAsArrayBuffer(f)
				}

				if (rABS) {
					reader.readAsArrayBuffer(f)
				} else {
					reader.readAsBinaryString(f)
				}
			},

		}
	}
</script>

<style>
</style>
