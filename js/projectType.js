var app = new Vue({
	el:"#lenene",
	data:{
		projectList:[
			{id:1, cover:'img/goods_list.png', name:'HG8895', info:'7.1 SURROUND GAMING HEADSET', projectType:'DJ Headphone', isCheck:false},
			{id:2, cover:'img/goods_list.png', name:'HG8895', info:'7.1 SURROUND GAMING HEADSET', projectType:'DJ Headphone', isCheck:false},
			{id:3, cover:'img/goods_list.png', name:'HG8895', info:'7.1 SURROUND GAMING HEADSET', projectType:'DJ Headphone', isCheck:false},
			{id:4, cover:'img/goods_list.png', name:'HG8895', info:'7.1 SURROUND GAMING HEADSET', projectType:'DJ Headphone', isCheck:false},
			{id:5, cover:'img/goods_list.png', name:'HG8895', info:'7.1 SURROUND GAMING HEADSET', projectType:'DJ Headphone', isCheck:false},
			{id:6, cover:'img/goods_list.png', name:'HG8895', info:'7.1 SURROUND GAMING HEADSET', projectType:'DJ Headphone', isCheck:false},
			{id:7, cover:'img/goods_list.png', name:'HG8895', info:'7.1 SURROUND GAMING HEADSET', projectType:'DJ Headphone', isCheck:false}
		],
		carList:[
			
		],
		projectType:["ALL","Bluetooth Headphone","DJ Headphone","Low-end Headphone","Middle-end Headphone","High-end Headphone","Microphone","USB Headphone"],
		thisProjectType:"ALL",
		menuULLeft:0,
		typeMenusWidth:0,
		menuUlWidth:0
	},
	mounted() {
		this.setMenuUlWidth();
	},
	methods:{
		addToCar:function(id) {
			var _this = this;
			for(var i=0;i<_this.projectList.length;i++){
				if(id==_this.projectList[i].id){
					_this.carList.push(_this.projectList[i]);
					_this.projectList[i].isCheck = true;
				}
			}
		},
		mineToCar:function(id) {
			var _this = this;
			for(var i=0;i<_this.projectList.length;i++){
				if(id==_this.projectList[i].id){
					_this.projectList[i].isCheck = false;
				}
			}
			for(var i=0;i<_this.carList.length;i++){
				if(id==_this.carList[i].id){
					_this.carList.splice(i,1);
				}
			}
		},
		changeTabBar:function(name) {
			this.thisProjectType = name;
		},
		setMenuUlWidth:function(){
			var li = $(".menus_li");
			var width = 0;
			for(var i=0;i<li.length;i++){
				width = width + li.eq(i).outerWidth();
			}
			/* $(".menus_ul").css("width",width); */
			this.menuUlWidth = width;
			this.typeMenusWidth = $('.type_menus').outerWidth();
		},
		menuLeft:function() {
			var _this = this;
			if(this.menuULLeft!=0){
				_this.menuULLeft = _this.menuULLeft + 300;
				$(".menus_ul").animate({"left":_this.menuULLeft+"px"});
			}
		},
		menuRight:function() {
			var _this = this;
			var sumWidth = this.typeMenusWidth + this.menuULLeft*(-1);
			if((this.typeMenusWidth<this.menuUlWidth) && (sumWidth<this.menuUlWidth)){
				_this.menuULLeft = _this.menuULLeft - 300;
				$(".menus_ul").animate({"left":_this.menuULLeft+"px"});
			}
		}
	}
})