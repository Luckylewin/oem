var app = new Vue({
	el:"#lenene",
	data:{
		carList:[
			
		],
	},
	mounted() {
		
	},
	methods:{
		addToCar:function(id) {
			this.carList.push({});
		},
	}
})