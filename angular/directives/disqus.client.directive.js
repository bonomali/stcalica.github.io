(function(){
  'use strict';
  angular.module('ghpg')
    .directive('disqusComments', disqusDirective);

      disqusDirective.$inject = ['$window', '$document'];

      function disqusDirective($window, $document){
        return {
            restrict: 'E',
            scope: {
                config: '='
            },
            link: link,
            template: '<div id="disqus_thread"></div><a href="http://disqus.com" class="dsq-brlink"></a>'
          };
      }
            ////////
            function link($scope, $window, $document){
                  $scope.$watch('config', configChange, true);
                  function configChange(){
                        if(!$scope.config.disqus_shortname || !$scope.config.disqus_identifier || !$scope.config.disqus_url){
                          return;
                        }//end check for identifier conflicts && configChange

                        $window.disqus_shortname = $scope.config.disqus_shortname;
                        $window.disqus_url = $scope.config.disqus_url;
                        $window.disqus_identifier = $scope.config.disqus_identifier;
                        $window.disqus_title = $scope.config.disqus_title;
                        $window.disqus_config = function (){
                          this.language = $scope.config.disqus_config_language;
                          this.page.remote_auth_s3 = $scope.config.disqus_remote_auth_s3;
                          this.page.api_key = $scope.config.disqus_api_key;
                        if ($scope.config.disqus_on_ready) {
                            this.callbacks.onReady = [function () {
                                scope.config.disqus_on_ready();
                            }];
                        }
                    };

                    function lazyLoad(){
                        var deffered = $q.defer();
                        $window.initialize = function () {
                            deferred.resolve();
                          };

                    }

                    var load = function(){
                              console.log("LOAD called");
                              console.log("Before SCRIPT creation: ");
                              console.log($window);
                              var dsq = document.createElement('script');
                              dsq.type = 'text/javascript';
                              dsq.async = true;
                              dsq.src = '//' + $scope.config.disqus_shortname + '.disqus.com/embed.js';
                              console.log("dsq", dsq);
                              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                          //    var body = angular.element(document).find("body");
                          //    body.append(dsq);<script type="text/javascript" async src="//codeisdead.disqus.com/embed.js"></script>
                              console.log("DSQ is appended!");

                        };
                    var reset = function() {
                                console.log("RESET called");
                                console.log("window", $window);
                                if( $window.DISQUS){
                                  return $window.DISQUS.reset({
                                      reload: true,
                                      config: function(){
                                            this.page.identifier = $scope.config.disqus_identifier;
                                            this.page.url = $scope.config.disqus_url;
                                            this.page.title = $scope.config.disqus_title;
                                      }

                                  });
                              } else {
                                  console.log("There is no $window.DISQUS");
                              }
                      };
                    if($window.DISQUS != null){
                        load();
                        reset();
                    } else {

                        load();
                        reset();
                    }
                          console.log("After SCRIPT creation: ");
                          console.log("window.disqus set as: ");
                          console.log("url ", $window.disqus_url);
                          console.log("identifier ", $window.disqus_identifier);
                          console.log("window", $window);
                          console.log("window.DISQUS", $window.DISQUS);
                  }//end of configChange

            }//end of link






})();
