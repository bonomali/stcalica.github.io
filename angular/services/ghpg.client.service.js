(function(){

	'use strict'; 
	
	angular.module('ghpg')
	.factory('blogContent',blogContent);
	

	blogContent.$inject = []; 

	function blogContent(){

		var data; 

		var factory = {

			getContent : getContent 


		};

		return factory; 


		////

		function getContent(){

		}  

		

	

	}  

})(); 
