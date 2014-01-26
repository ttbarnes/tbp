'use strict';

var tbpControllers = angular.module('tbangControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http',

  function($scope,$http) {
		$scope.pageClass = 'introPage';
		
    $http.get('showcase/projects.json').success(function(data) {
      $scope.projects = data;
    });
		
		$scope.lineInView = function(index, inview, inviewpart) { //inview  - show recentReleases on scroll
			var rRel = angular.element('#recentReleases');
			if (typeof(inviewpart) !== 'undefined') {
				console.log('VISIBLE: recent releases'); //remove me
        rRel.removeClass('tbtest1290123091239012aaaaa').addClass('tbtest1290123091239012');
			}
			else {
				console.log('INVISIBLE: recent releases'); //remove me
				rRel.removeClass('tbtest1290123091239012').addClass('tbtest1290123091239012aaaaa');
        //rRel.removeClass('tbtest1290123091239012');
			}
		};
  }]);
	
tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http',

  function($scope, $http) {
		$scope.pageClass = 'showcaseHomePage';
    $http.get('showcase/projects.json').success(function(data) {
      $scope.projects = data;
    });
		//$scope.orderPop = 'type: 2';
  }]);

tbpControllers.controller('indShowcasePieceCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
		$scope.pageClass = 'showcaseIndPage';
		
    $http.get('showcase/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
		
  }]);
	

tbpControllers.controller('aboutCtrl', function($scope){
	$scope.pageClass = 'aboutPage';
	
	$scope.tonySocial = {
		github:'http://github.com/ttbarnes',
		twitter:'http://twitter.com/ttbarnes',
		//stackoverflow:'http://stackoverflow.com',
		linkedin:'http://uk.linkedin.com/in/ttbarnes'
	};
	
});
	
tbpControllers.controller('contactCtrl', function($scope){
	$scope.pageClass = 'contactPage';
	$scope.tonyDetails = {
		email:'tony@tonybarnes.me'
	};
});

