(function(){

	'use strict'; 

	angular
	.module('ghpg')
	.controller('blogController', blogController); 
	
	blogController.$inject = ['$scope', 'blogContent'];//,'blogContent'] //, 'blogContent'];  
	 

	////
	
	function blogController($scope,  blogContent){
		var vm = this;
		vm.articles = [];
		grabData();   

		function grabData(){
			return blogContent.getContent().then(function(data){
					console.log(data.articles);
					vm.articles = data.articles;
					return vm.articles; 
					},function(err){ 
				console.log(err); 
				vm.data = [];

				}); 
		} 

	}


})(); 
