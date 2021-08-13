import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		excelTable:[{
			name:'示范表1',//表名
			status:1,//0表示允许超级管理员查询,1表示所有人可查询,
			sequence:1,
			label:[
				{id:'1',title:'姓名',type:'单行文本',search:true,fill:true,show:true,sequence:1},
				{id:'2',title:'手机号',type:'单行文本',search:false,fill:true,show:true,sequence:1},
				{id:'3',title:'证书编号',type:'单行文本',search:true,fill:false,show:true,sequence:1},
				{id:'4',title:'证书名称',type:'单行文本',search:true,fill:false,show:false,sequence:1}
				],
			data:[{
				'1':'路人丙',
				'2':'13700000003',
				'3':'523000AE88',
				'4':'注册会计师证',
				sequence:3
			},{
				'1':'路人乙',
				'2':'13700000002',
				'3':'523000AE18',
				'4':'中级会计师证',
				sequence:2
			},{
				'1':'路人甲',
				'2':'13700000001',
				'3':'523000AE18',
				'4':'中级会计师证',
				sequence:1
			}]
		}]
	},
	getters:{
		excelTable:state =>{
			return state.excelTable
		}
	},
	mutations:{
		updateExcelTable(val){
			
		}
	}
})


export default store