(function(){

	'use strict'; 
	
	angular.module('ghpg')
	.factory('blogContent',blogContent);
	

	blogContent.$inject = [ '$http' ]; 

	function blogContent($http){

		var factory = {

			getContent : getContent 


		};

		return factory; 


		////

		function getContent($http){
			return 	$http.get("/content.json")
				.then(contentSuccess)
				.catch(contentFail); 
		  

		function contentSuccess(response){
			return response.data.results;
		} 
		function contentFail(error){
			console.log(error.data); 

		} 
	
	    }
	}  

})(); 
