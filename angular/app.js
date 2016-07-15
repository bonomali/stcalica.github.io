(function(){

	'use strict';

	var dependencies = [
		'ghpg',
		'ngRoute',
		'ngDisqus'
	];

	angular.module('blogger', dependencies)
	.config(Config);

	Config.$inject = ['$locationProvider', '$disqusProvider'];

	function Config($locationProvider){

		$locationProvider.hashPrefix('!');
		$disqusProvider.setShortname('codeisdead'); 
	}

	if (window.location.hash === '#_=_'){
		window.location.hash = '#!';

	}


	//bootstrap angular

	angular.element(document).ready(function(){

		angular.bootstrap(document, ['blogger']);

	});



})();
