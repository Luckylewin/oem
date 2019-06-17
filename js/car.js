var app = new Vue({
	el:"#lenene",
	data:{
		carList:[
			{id:1, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1, isSelect:false},
			{id:2, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1, isSelect:false},
			{id:3, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1, isSelect:false},
			{id:4, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1, isSelect:false},
			{id:5, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1, isSelect:false},
			{id:6, name:"HP922", img:"img/car_goods.png", color:"Pink", quantity:1, isSelect:false}
		],
		isSelectAll:false,
		selectNum:0
	},
	mounted() {
		
	},
	computed:{
		getSelectNum:function() {
			var _this = this;
			for(var i=0;i<_this.carList.length;i++){
				if(_this.carList[i].isSelect){
					_this.selectNum ++;
				}
			}
			return _this.selectNum;
		}
	},
	methods:{
		addNum:function(product){
			product.quantity++;
		},
		mineNum:function(product){
			if(product.quantity>1){
				product.quantity--;
			}
		},
		selectAll:function(e) {
			//var isChecked = e.target.checked;
			var _this = this;
			if(this.isSelectAll){
				for(var i=0;i<_this.carList.length;i++){
					_this.carList[i].isSelect = true;
				}
			} else {
				for(var i=0;i<_this.carList.length;i++){
					_this.carList[i].isSelect = false;
				}
			}
		},
		deleteProduct:function(id) {
			var _this = this;
			for(var i=0;i<_this.carList.length;i++){
				if(_this.carList[i].id==id){
					_this.carList.splice(i,1);
				}
			}
		}
	}
})