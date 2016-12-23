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

		vm.range = function(x){
				return new Array(x);;
		};

		vm.page = {};
		vm.page.cur  = 1;	//current page
		vm.page.pageSize = 5; //number of articles on a page
		vm.page.totalPages = 0; // total number of pages
		vm.page.totalArticles = 0;
		vm.page.top = 0; //start page index
		vm.page.botton = 0; //end page index
		vm.page.start =  ((vm.page.cur - 1) * vm.page.pageSize)  || 0; //start index of total number of articles
		vm.page.end = Math.ceil(vm.page.start + vm.page.pageSize - 1, vm.page.totalArticles - 1) || 0; //end index of total number of articles

		vm.articles = [];

		console.log("Pages before loading articles", vm.page);
		$scope.$watch('vm.page.cur', function(next, last){

			console.log('vm.page.cur before', vm.page.cur);
			console.log('vm.page.start before', vm.page.start);
			console.log('vm.page.end before', vm.page.end);



			vm.page.start =  ((vm.page.cur - 1) * vm.page.pageSize)  || 0; //start index of total number of articles
			vm.page.end = Math.ceil(vm.page.start + vm.page.pageSize - 1, vm.page.totalArticles - 1) || 0; //end index of total number of articles

			console.log('vm.page.cur after', vm.page.cur);
			console.log('vm.page.start after', vm.page.start);
			console.log('vm.page.end after', vm.page.end);

		});



		grabData();

		function grabData(){
			return blogContent.getContent().then(function(data){
					vm.articles = data.articles;
					vm.page.totalArticles = data.articles.length;
					vm.page.totalPages = Math.ceil(vm.page.totalArticles / vm.page.pageSize) ;

								// if (totalPages <= 10) {
					      //       // less than 10 total pages so show all
					      //       startPage = 1;
					      //       endPage = totalPages;
					      //   } else {
					      //       // more than 10 total pages so calculate start and end pages
					      //       if (currentPage <= 6) {
					      //           startPage = 1;
					      //           endPage = 10;
					      //       } else if (currentPage + 4 >= totalPages) {
					      //           startPage = totalPages - 9;
					      //           endPage = totalPages;
					      //       } else {
					      //           startPage = currentPage - 5;
					      //           endPage = currentPage + 4;
					      //       }
					      //   }

					 vm.page.bottom = vm.page.totalPages;
					// vm.page.start =  ((vm.page.cur) * vm.page.pageSize) || 0;
					// vm.page.end = Math.ceil(vm.page.start + vm.page.pageSize - 1, vm.page.totalArticles - 1);

					console.log(vm.articles);





					console.log("Pages after loading articles", vm.page);


					return vm.articles;
					},function(err){
				console.log(err);
				vm.data = [];
				});
		}



	}


})();
