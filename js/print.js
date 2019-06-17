var app = new Vue({
	el:"#lenene",
	data:{
		name:'',
		email:'',
		skype:'',
		carList:[
			{id:1, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1},
			{id:2, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1},
			{id:3, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1},
			{id:4, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1},
			{id:5, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1},
			{id:6, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1}
		]
	},
	mounted() {
		
	},
	methods:{
		send:function() {
			var _this = this;
			var data = {
				name: _this.name,
				email:_this.email,
				skype:_this.skype
			}
		},
		cancel:function() {
			$(".send").css("display","none");
		}
	}
})