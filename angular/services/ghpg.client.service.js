(function(){

	'use strict'; 
	
	angular.module('ghpg')
	.factory('blogContent',blogContent);
	

	blogContent.$inject = [ '$http' ]; 

	function blogContent($http){
		
		var content; 
		
		var factory = {

			getContent : getContent 


		};

		return factory; 


		////
				
		function getContent() {
			return $http.get('/content.json').then(function(res){

				content = res.data;
				console.log(content); 
				return content;
			}).catch(function(err){
				console.log(err);	
			});
	
		}
	}  

})(); 
