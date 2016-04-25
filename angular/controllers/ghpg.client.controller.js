(function(){


	'use strict'; 


	angular.module('ghpg').controller('blogController', gitBlogController); 

	
	gitBlogController.$inject = ['blogController', 'blogContent'];  

	function gitBlogController(blogController, blogContent){
		console.log('running controller');			
		var vm = this; 

		vm.data = dataservice.getContent(); 
		console.log(vm.data); 	
	} 




})(); 
