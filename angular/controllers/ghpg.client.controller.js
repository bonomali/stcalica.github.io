(function(){

	'use strict'; 

	angular.module('ghpg').controller('blogController', blogController); 
	
	gitBlogController.$inject = ['blogController', 'blogContent'];  

	////

	function blogController(blogController, blogContent){
		console.log('running controller');			
		var vm = this; 

		vm.data = dataservice.getContent();
		$scope.data = vm.data; 
		console.log(vm.data); 	
	} 




})(); 
