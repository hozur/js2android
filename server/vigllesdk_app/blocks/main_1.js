var json_main_ui_1={
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
				refs:[],
				gravity:'center',
				orientation:'0',
				centers:[],
				action_type:'null',
				action:'null',
				actionLink:{},
				res_key:'null',
				childs:[{
					view_id:'1',
					parent_id:'0',
					view_type:'20008',
					view_name:'VgViewPager',
					view_width:'1080',
					view_height:'1920',
					noScroll:'1',
					bg_normal_color:'#ffffffff',
					bg_focus_color:'#ffffffff',
					view_of:['-1','-1','-1','2'],
					view_paddings:['0','0','0','0'],
					view_margins:['0','0','0','0'],
					gravity:'',
					centers:[],
					orientation:'0',
					refs:[],
					action_type:'null',
					action:'null',
					actionLink:{},
					res_key:'null',
					childs:[]
				},{
					view_id:'2',
					parent_id:'0',
					view_of:['-1','-1','-1','-1'],
					view_type:'20005',
					view_name:'VgContentLayout',
					view_width:'1080',
					view_height:'144',
					bg_normal_color:'#ffefefef',
					bg_focus_color:'#ffefefef',
					view_paddings:['0','0','0','0'],
					view_margins:['0','0','0','0'],
					layout_mode:'1',
					gravity:'center',
					centers:['1','6','11'],
					refs:['1_verborse'],
					orientation:'0',
					action_type:'null',
					action:'null',
					actionLink:{},
					res_key:'null',
					childs:[],
					datas:[
						{labelid:'1',title:'常用资料',url:'http://192.168.16.198:8083/?code=home',sub_menu:[]},
						{labelid:'2',title:'汽修人',url:'http://192.168.16.198:8083/?code=loginUI',
							sub_menu:[
								{labelid:'201',title:'汽修生活',url:'http://192.168.16.198:8083/?code=loginUI',sub_menu:[]},
								{labelid:'202',title:'汽修案例',url:'http://192.168.16.198:8083/?code=panelUI',sub_menu:[]}
					    ]},
						{labelid:'3',title:'我',url:'http://192.168.16.198:8083/?code=home',
							sub_menu:[
								{labelid:'301',title:'登陆',url:'http://192.168.16.198:8083/?code=loginUI',sub_menu:[]},
								{labelid:'302',title:'注册',url:'http://192.168.16.198:8083/?code=registerUI',sub_menu:[]}
						]}
					]
				}]
			},
		eventLink:[]
	}
}
function loadMain1(req,res,DATA){
	var string =JSON.stringify(json_main_ui_1);
	res.end(string);
}
exports.loadMain1=loadMain1;