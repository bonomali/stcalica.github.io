(function(){

  'use strict';


  angular
	.module('ghpg')
  .controller('mainController', mainController);

  mainController.$inject = ['$scope' ];

  function mainController( $scope ){
    console.log('in mainController');
    var main = this;

    main.subscribe = function(){
        console.log(main.email);
        console.log("Add them to our email subscriber list");
        //add to cookie that they have subscribed!
    };

    //check cookie if thay are logged in already or not

    $scope.$on('event:social-sign-in-success', function(event, userDetails){

        console.log('fbUser', userDetails);
        //onLogin

        //show image and say thanks for subscribing with us!
          //then make button unclickable
        //check for the status of the login

        //add to cookie that they are logged in and subscribed
        FB.getLoginStatus(function(response) {
          console.log('checking fb status');
          //if authenticated make button unclickable otherwise make it clickable

        });

    });


  }





})();
