'use strict';

var tbpControllers = angular.module('tbangControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http',
  function($scope,$http) {
    $http.get('showcase/projects.json').success(function(data) {
      $scope.projects = data;
    });
		
		$scope.lineInView = function(index, inview, inviewpart) { //inview  - show recentReleases on scroll
			if (typeof(inviewpart) !== 'undefined') {
				console.log('VISIBLE: recent releases');
				return $scope.obj.value === 'testing2!';
			}
			else {
				console.log('INVISIBLE: recent releases');
				return $scope.obj.value === 'testing1 - back to normal';
			}
		};
  }]);
	
tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('showcase/projects.json').success(function(data) {
      $scope.projects = data;
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