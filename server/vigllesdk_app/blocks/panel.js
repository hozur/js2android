var json_panel_ui={
		retCode:101,
		msg:'请求成功',
		data:{
			res_type:'1001',
			ui:{
				view_id:'1000',
				parent_id:'-1',
				view_type:'9999',
				view_name:'VgContentLayout',
				view_width:'600',
				view_height:'700',
				bg_normal_color:'#ffffffff',
				bg_focus_color:'#ffffffff',
				view_of:['-1','-1','-1','-1'],
				view_paddings:['0','0','0','0'],
				view_margins:['0','0','0','0'],
				refs:[],
				gravity:'center',
				orientation:'0',
				centers:['1','4','7'],
				action_type:'null',
				action:'null',
				actionLink:{},
				res_key:'null',
				childs:[{
						view_id:'1001',
						parent_id:'1',
						view_type:'10001',
						view_name:'VgTextView',
						view_width:'256',
						view_height:'136',
						bg_normal_color:'#ffff0000',
						bg_focus_color:'#ffff0000',
						view_of:['-1','-1','-1','-1'],
						view_paddings:['10','10','10','10'],
						view_margins:['10','10','10','10'],
						gravity:'center',
						centers:[],
							orientation:'0',
						refs:[],
						action_type:'null',
						action:'null',
						actionLink:{},
						res_key:'null',
						text:'帐号:',
						input_type:'1',
						hint:'',
						text_size:'48',
						text_align:"2",
						text_color:'#ff00ff00',
						childs:[]
					}]
		}
	}
};
function panel(req,res,data){
	
	var string =JSON.stringify(json_panel_ui);
	res.end(string);
}
exports.panel=panel;