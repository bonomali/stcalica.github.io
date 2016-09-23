(function(){

	'use strict';

	var dependencies = [ 'ngRoute' ];

	angular.module('ghpg', dependencies)
	.run(init)
	init.$inject = ['$rootScope','$location' ];


	function init($rootScope, $location){

		var vm  = this;

	}

})();
