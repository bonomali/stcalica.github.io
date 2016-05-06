(function(){

	'use strict'; 

	angular
	.module('ghpg')
	.controller('articleController', articleController); 
	
	articleController.$inject = ['$scope', 'blogContent'];//,'blogContent'] //, 'blogContent'];  
	 

	////
	
	function articleController($scope,  blogContent){

		var vm = this;
		vm.article = blogContent.getArticle();

	}


})(); 
