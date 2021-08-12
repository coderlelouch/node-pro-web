import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		excelName : '案例表名',//excel表名
		excelData:[],//excel数据
	},
	mutations:{
		changeName(state,newName){
			newName
		},
		saveData(saveData,newData){
			newData
		}
	}
})


export default store