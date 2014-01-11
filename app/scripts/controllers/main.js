'use strict';

var tbpControllers = angular.module('tbangControllers', []);

tbpControllers.controller('introCtrl2', ['$scope', '$http',
  function($scope, $http) {
    $http.get('showcase/phones.json').success(function(data) {
      $scope.phones = data;
    });
  }]);
	
tbpControllers.controller('showcaseGrid', ['$scope', '$http',
  function($scope, $http) {
    $http.get('showcase/phones.json').success(function(data) {
      $scope.phones = data;
    });
		//$scope.orderPop = 'type: 2';
  }]);

tbpControllers.controller('indShowcasePieceCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    //$scope.phoneId = $routeParams.phoneId;
		
    $http.get('showcase/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
		
  }]);