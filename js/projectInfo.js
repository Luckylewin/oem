var app = new Vue({
	el:"#lenene",
	data:{
		carList:[
			
		],
		productList:[
			{id:1,type:"video", img:"img/video.mp4", isMove:true, cover:"img/cover.png", color:"red"},
			{id:2,type:"image", img:"img/cover.png", isMove:false, color:"red"},
			{id:3,type:"image", img:"img/cover.png", isMove:false, color:"red"},
			{id:4,type:"image", img:"img/cover.png", isMove:false, color:"red"},
			{id:5,type:"image", img:"img/cover.png", isMove:false, color:"red"},
			{id:6,type:"video", img:"img/video.mp4", isMove:true, cover:"img/cover.png", color:"green"},
			{id:7,type:"image", img:"img/car_goods.png", isMove:false, color:"green"},
			{id:8,type:"image", img:"img/car_goods.png", isMove:false, color:"green"},
			{id:9,type:"image", img:"img/car_goods.png", isMove:false, color:"green"},
			{id:10,type:"image", img:"img/car_goods.png", isMove:false, color:"green"},
			{id:11,type:"video", img:"img/video.mp4", isMove:true, cover:"img/cover.png", color:"blue"},
			{id:12,type:"image", img:"img/cover.png", isMove:false, color:"blue"},
			{id:13,type:"image", img:"img/cover.png", isMove:false, color:"blue"},
			{id:14,type:"image", img:"img/cover.png", isMove:false, color:"blue"},
			{id:15,type:"image", img:"img/cover.png", isMove:false, color:"blue"}
		],
		thisProduct:{id:1, img:"img/cover.png", isMove:false},
		thisSelectColor:"red",
		active: ""
	},
	mounted() {
		
	},
	methods:{
		addToCar:function() {
			this.carList.push(this.thisProduct);
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
		selectProject:function(id) {
			var _this = this;
			for(var i=0;i<_this.productList.length;i++){
				if(id==_this.productList[i].id){
					_this.thisProduct = _this.productList[i];
				}
			}
		},
		selectColor:function(color){
			var _this = this;
			this.active = color;
			this.thisSelectColor = color;
			for(var i=0;i<_this.productList.length;i++){
				if(color==_this.productList[i].color){
					_this.thisProduct = _this.productList[i];
					break;
				}
			}
		}
	}
})