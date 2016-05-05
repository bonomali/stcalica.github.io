(function(){

	'use strict'; 
	
	angular.module('ghpg')
	.factory('blogContent',blogContent);
	

	blogContent.$inject = [ '$http' ]; 

	function blogContent($http){
		
		var articles; 
		var viewing; 
		
		var factory = {

			getContent : getContent,
			getPost :  getPost		
		};

		return factory; 


		////
				
		function getContent() {
			return $http.get('/content.json').then(function(res){
				articles = res.data; 
				return articles;
			}).catch(function(err){
				console.log(err);	
			});
	
		}
		
		function getPost(title){
			return $http.get('/content.json').then(function(res){
				var articles = res.data["articles"];
				console.log(articles);
				for( var article in articles){
					if(articles[article].title === title){
						console.log(articles[article].title);
						var post = articles[article]; 
					}
				}			
				console.log(post);
				return post;
				
			}).catch(function(err){ console.log(err);});

		}


	}  

})(); 
