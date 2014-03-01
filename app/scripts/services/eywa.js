'use strict';
/*
angular.module('tbpApp')
  .service('Eywa', function Eywa() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log('IM DOING SOMETHING');
  });
*/
angular.module('tbpApp').run(['$http', '$rootScope', function($rootScope) {
  //$http.get(...).success(function(response) {
     //$rootScope.somedata = response;
    //console.log('tb1 yay');
  //});

    $rootScope.globalFn = function() {
      console.log('tb2 yay');
      console.log('This function is available in all scopes, and views');
    };

  }]);