'use strict';

var tbangApp = angular.module('tbpApp');

tbangApp.factory('CommonCode', function ($scope, $window) {
    var root = {};
    root.show = function(msg){
        $window.alert(msg);
      };
    
			/*
      $scope.$on('$routeChangeSuccess', function() {
	      window.scrollTo(0, 150); //fail safe
			});
		*/
    return root;
	});