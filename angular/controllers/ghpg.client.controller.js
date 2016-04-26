(function(){

	'use strict'; 

	angular.module('ghpg').controller('blogController', blogController); 
	
	blogController.$inject = ['blogController', 'blogContent'];  

	////

	function blogController(blogController, blogContent){
		console.log('running controller');			
		var vm = this; 

		vm.data = blogContent.getContent();
		$scope.data = vm.data; 
		console.log(vm.data); 	
	} 




})(); 
