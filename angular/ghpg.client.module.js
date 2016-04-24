(function(){

	'use strict'; 
	
	var dependencies = ['$http']; 	

	angular.module('ghpg', dependencies)
	.run(init)
	.config(Config);  
	
	init.$inject = [ '$http' ];


	function init($rootScope, $location){
		
		var vm  = this; 		

	} 

	function Config(){

		


	} 

})();
