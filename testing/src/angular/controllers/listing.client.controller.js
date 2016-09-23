(function(){

	'use strict';

	angular
	.module('ghpg')
	.controller('listingController', listingController);

	listingController.$inject = ['$scope', '$rootScope', 'blogContent'];//,'blogContent'] //, 'blogContent'];


	////

	function listingController($scope, $rootScope,  blogContent){
		$rootScope.$on('$stateChangeSuccess', function (event) {
		$window.ga('send', 'pageview', $location.path());
		});


		var vm = this;
		vm.articles = [];
		grabData();

		function grabData(){
			return blogContent.getContent().then(function(data){
					vm.articles = data.articles;
					return vm.articles;
					},function(err){
				console.log(err);
				vm.data = [];

				});
		}



	}


})();