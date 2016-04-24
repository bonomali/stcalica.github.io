(function(){

	'use strict'; 
	
	var dependencies = ['$http']; 	

	angular.module('ghpg', dependencies)
	.run(initalize)
	.config(Config);  
	
	initialize.$inject = [ '$http' ];


	function initalize($rootScope, $location){
		
		var vm  = this; 		

	} 

	function Config(){

		


	} 

})();
