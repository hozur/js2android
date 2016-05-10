var json_home_ui={
		retCode:101,
		msg:'请求成功',
		data:{
			res_type:'1001',
			ui:{
				view_id:'0',
				parent_id:'-1',
				view_type:'9999',
				view_name:'VgContentLayout',
				view_width:'1080',
				view_height:'1920',
				bg_normal_color:'#ffffffff',
				bg_focus_color:'#ffffffff',
				view_of:['-1','-1','-1','-1'],
				view_paddings:['0','0','0','0'],
				view_margins:['0','0','0','0'],
				layout_mode:'1',
				gravity:'center',
				centers:['1','6','11'],
				refs:[],
				orientation:'0',
				action_type:'null',
				action:'null',
				actionLink:{},
				res_key:'null',
				childs:[{
					view_id:'12',
					parent_id:'0',
					view_of:['-1','11','-1','-1'],
					view_type:'30001',
					datas:[
						{labelid:'1',title:'问答',text:'有问必答',time:'2016-04-22 16:21:22',msgNum:'2',imgUrl:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png'},
						{labelid:'2',title:'知乎',text:'你不知道的我都知道',time:'2016-04-22 16:21:22',msgNum:'10',imgUrl:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png'},
						{labelid:'3',title:'晓得',text:'你不晓得的我都晓得',time:'2016-04-22 16:21:22',msgNum:'10',imgUrl:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png'},
					]
				},{
					view_id:'13',
					parent_id:'0',
					view_of:['-1','12','-1','-1'],
					view_type:'30002',
					datas:[
						{labelid:'1',title:'总排行',imgUrl:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png'},
						{labelid:'2',title:'关注榜',imgUrl:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png'},
						{labelid:'3',title:'被赞榜',imgUrl:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png'},
						{labelid:'4',title:'大爷榜',imgUrl:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png'}
					]
				},{
					view_id:'14',
					parent_id:'0',
					view_of:['-1','-1','-1','-1'],
					view_type:'20004',
					view_name:'VgContentLayout',
					view_width:'1080',
					view_height:'1920',
					bg_normal_color:'#ffefefef',
					bg_focus_color:'#ffefefef',
					view_paddings:['0','0','0','0'],
					view_margins:['0','0','0','0'],
					layout_mode:'1',
					gravity:'center',
					centers:['1','6','11'],
					refs:[],
					orientation:'0',
					action_type:'null',
					action:'null',
					actionLink:{},
					res_key:'null',
					childs:[],
					datas:[
						{labelid:'1',title:'问答',text:'有问必答',msgNum:'2',unFocusImage:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png',focusImage:'http://192.168.16.198:8080/sign.png'},
						{labelid:'2',title:'知乎',text:'你不知道的我都知道',msgNum:'10',unFocusImage:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png',focusImage:'http://192.168.16.198:8080/sign.png'},
						{labelid:'3',title:'晓得',text:'你不晓得的我都晓得',msgNum:'10',unFocusImage:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png',focusImage:'http://192.168.16.198:8080/sign.png'},
						{labelid:'3',title:'晓得',text:'你不晓得的我都晓得',msgNum:'10',unFocusImage:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png',focusImage:'http://192.168.16.198:8080/sign.png'},
						{labelid:'3',title:'晓得',text:'你不晓得的我都晓得',msgNum:'10',unFocusImage:'http://192.168.16.198:8080/qxr_index_qiuzhi_icon.png',focusImage:'http://192.168.16.198:8080/sign.png'}
					]
				},{
					view_id:'1',
					parent_id:'0',
					view_type:'9999',
					view_name:'VgContentLayout',
					view_width:'1080',
					view_height:'300',
					bg_normal_color:'#ffffffff',
					bg_focus_color:'#ffffffff',
					view_of:['-1','-1','-1','-1'],
					view_paddings:['0','0','0','0'],
					gravity:'center',
					centers:['2','3','4','5'],
					orientation:'1',
					view_margins:['0','0','0','0'],
					refs:[],
					action_type:'null',
					action:'null',
					actionLink:{},
					res_key:'null',
					childs:[{
						view_id:'2',
						parent_id:'1',
						view_type:'10001',
						view_name:'VgTextView',
						view_width:'255',
						view_height:'255',
						bg_normal_color:'#ff00ff00',
						bg_focus_color:'#ff00ff00',
						view_of:['-1','-1','-1','-1'],
						view_paddings:['0','0','0','0'],
						view_margins:['12','12','0','12'],
						centers:[],
						orientation:'0',
						gravity:'',
						refs:[],
						action_type:'null',
						action:'null',
						actionLink:{},
						res_key:'null',
						text:'故障分析',
						input_type:'1',
						hint:'',
						text_size:'56',
						text_align:"0",
						text_color:'#ff00ff00',
						childs:[]
					},{
						view_id:'3',
						parent_id:'1',
						view_type:'10001',
						view_name:'VgTextField',
						view_width:'255',
						view_height:'255',
						bg_normal_color:'#ffffff00',
						bg_focus_color:'#ff00ff00',
						view_of:['2','-1','-1','-1'],
						view_paddings:['0','0','0','0'],
						view_margins:['12','12','0','12'],
							centers:[],
							orientation:'0',
						gravity:'',
						refs:[],
						action_type:'null',
						action:'null',
						actionLink:{},
						res_key:'username',
						text:'故障码',
						password:'0',
						text_align:"0",
						input_type:'1',
						hint:'',
						text_size:'56',
						text_color:'#ff000000',
						childs:[]
					},{
						view_id:'4',
						parent_id:'1',
						view_type:'10001',
						view_name:'VgTextField',
						view_width:'255',
						view_height:'255',
						bg_normal_color:'#ffff00ff',
						bg_focus_color:'#ff00ff00',
						view_of:['3','-1','-1','-1'],
						view_paddings:['0','0','0','0'],
						view_margins:['12','12','0','12'],
							centers:[],
							orientation:'0',
						gravity:'',
						refs:[],
						action_type:'null',
						action:'null',
						actionLink:{},
						res_key:'username',
						text:'常用资料',
						password:'0',
						text_align:"0",
						input_type:'1',
						hint:'',
						text_size:'56',
						text_color:'#ff000000',
						childs:[]
					},{
						view_id:'5',
						parent_id:'1',
						view_type:'10001',
						view_name:'VgTextField',
						view_width:'255',
						view_height:'255',
						bg_normal_color:'#ff00ff00',
						bg_focus_color:'#ff00ff00',
						view_of:['4','-1','-1','-1'],
						view_paddings:['0','0','0','0'],
						view_margins:['12','12','12','12'],
							centers:[],
							orientation:'0',
						gravity:'',
						refs:[],
						action_type:'null',
						action:'null',
						actionLink:{},
						res_key:'username',
						text:'维修店',
						password:'0',
						text_align:"0",
						input_type:'1',
						hint:'',
						text_size:'56',
						text_color:'#ff000000',
						childs:[]
					}]
				},{
						view_id:'6',
						parent_id:'0',
						view_type:'9999',
						view_name:'VgContentLayout',
						view_width:'1080',
						view_height:'280',
						bg_normal_color:'#ffffffff',
						bg_focus_color:'#ffffffff',
						view_of:['-1','1','-1','-1'],
						view_paddings:['0','0','0','0'],
						view_margins:['0','10','0','10'],
						gravity:'center',
						centers:['7','8','9','10'],
							orientation:'1',
						refs:[],
						action_type:'null',
						action:'null',
						actionLink:{},
						res_key:'null',
						childs:[{
								view_id:'7',
								parent_id:'6',
								view_type:'10001',
								view_name:'VgTextView',
								view_width:'255',
								view_height:'255',
								bg_normal_color:'#ff00ff00',
								bg_focus_color:'#ff00ff00',
								view_of:['-1','-1','-1','-1'],
								view_paddings:['0','0','0','0'],
								view_margins:['12','0','0','12'],
								refs:[],
								centers:[],
								gravity:'',
								orientation:'0',
								action_type:'null',
								action:'null',
								actionLink:{},
								res_key:'null',
								text:'汽修案例',
								input_type:'1',
								hint:'',
								text_size:'56',
								text_align:"0",
								text_color:'#ff0000ff',
								childs:[]
							},{
								view_id:'8',
								parent_id:'6',
								view_type:'10001',
								view_name:'VgTextField',
								view_width:'255',
								view_height:'255',
								bg_normal_color:'#ff00ff00',
								bg_focus_color:'#ff00ff00',
								view_of:['7','-1','-1','-1'],
								view_paddings:['0','0','0','0'],
								view_margins:['12','0','0','12'],
									centers:[],
						gravity:'',orientation:'0',
								refs:[],
								action_type:'null',
								action:'null',
								actionLink:{},
								res_key:'userpass',
								text:'技师学堂',
								input_type:'2',
								password:'1',
								text_align:'0',
								hint:'请填写密码',
								text_size:'56',
								text_color:'#ff000000',
								childs:[]
							},{
								view_id:'9',
								parent_id:'6',
								view_type:'10001',
								view_name:'VgTextField',
								view_width:'255',
								view_height:'255',
								bg_normal_color:'#ff00ff00',
								bg_focus_color:'#ff00ff00',
								view_of:['8','-1','-1','-1'],
								view_paddings:['0','0','0','0'],
								view_margins:['12','0','0','12'],
								centers:[],
								gravity:'',
								orientation:'0',
								refs:[],
								action_type:'null',
								action:'null',
								actionLink:{},
								res_key:'userpass',
								text:'提需求',
								input_type:'2',
								password:'1',
								text_align:'0',
								hint:'请填写密码',
								text_size:'56',
								text_color:'#ff000000',
								childs:[]
							},{
								view_id:'10',
								parent_id:'6',
								view_type:'10001',
								view_name:'VgTextField',
								view_width:'255',
								view_height:'255',
								bg_normal_color:'#ff00ff00',
								bg_focus_color:'#ffffcccc',
								view_of:['9','-1','-1','-1'],
								view_paddings:['0','0','0','0'],
								view_margins:['12','0','12','12'],
									centers:[],
								gravity:'',
								orientation:'0',
								refs:[],
								action_type:'null',
								action:'null',
								actionLink:{},
								res_key:'userpass',
								text:'积分换购',
								input_type:'2',
								password:'1',
								text_align:'0',
								hint:'请填写密码',
								text_size:'56',
								text_color:'#ff000000',
								childs:[]
							}]
					},{
						view_id:'11',
						parent_id:'0',
						view_type:'10003',
						view_name:'VgButton',
						view_width:'300',
						view_height:'300',
						bg_normal_color:'#ffffcccc',
						bg_focus_color:'#ff0099cc',
						view_of:['-1','6','-1','-1'],
						view_paddings:['10','10','10','10'],
						view_margins:['20','20','20','20'],
						centers:[],
						gravity:'',orientation:'0',
						refs:['3_username','6_userpass','-1_deviceId'],
						action_type:'jump',
						action:'http://192.168.16.198:8082',
						actionLink:{},
						res_key:'userpass',
						text:'登陆',
						text_size:'64',
						text_align:'0',
						text_color:'#ff000000',
						childs:[]
					}]
		}
	}
};
function loadHome(req,res,DATA){
	var string =JSON.stringify(json_home_ui);
	res.end(string);
}
exports.loadHome=loadHome;