'use strict';

var tbpControllers = angular.module('tbangControllers', []);

tbpControllers.controller('introCtrl2', ['$scope', '$http',
  function($scope, $http) {
    $http.get('showcase/phones.json').success(function(data) {
      $scope.phones = data;
    });
		
		/*
		$scope.phones = [];
		for (var i = 20; i >= 0; i--) {
			$scope.testLines.push(i);
		}
		*/
		$scope.lineInView = function(index, inview, inviewpart) {
			//var rr = '#recentReleases';
			//rr.hide();
			if (typeof(inviewpart) !== 'undefined') {
				console.log('VISIBLE: recent releases');
				return $scope.obj.value === 'testing2!';
				/*
				return {
					bananaRama:'lkadsjlasjdflk'
				};
				*/
			}
			else {
				console.log('INVISIBLE: recent releases');
				return $scope.obj.value === 'testing1 - back to normal';
			}
		};
		
		/*
		$scope.testLines = [];
		for (var i = 20; i >= 0; i--) {
			$scope.testLines.push(i);
		}
		$scope.lineInView = function(index, inview, inviewpart) {
			if (typeof(inviewpart) !== 'undefined') {
				console.log('TBASDFNLKADSF - alfsdjasdlfkjasldfjkl');
			}
			else {
				console.log('SOMETHING ELSE----- TBASDFNLKADSF - alfsdjasdlfkjasldfjkl');
			}
		};
		*/
		
		/*
		//var logId = 0;
		$scope.testLines = [];
		for (var i = 20; i >= 0; i--) {
			$scope.testLines.push(i);
		}
		$scope.inviewLogs = [];
		$scope.lineInView = function(index, inview, inviewpart) {
			if (typeof(inviewpart) !== 'undefined') {
				console.log('TBASDFNLKADSF - alfsdjasdlfkjasldfjkl');
			}
			else {
				console.log('SOMETHING ELSE----- TBASDFNLKADSF - alfsdjasdlfkjasldfjkl');
			}
		};
		*/
		
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