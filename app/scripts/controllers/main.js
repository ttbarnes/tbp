'use strict';

var tbpControllers = angular.module('tbangControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http',

		
/*
  function($scope,$n otifyService,$http) {
		
		//$scope.$on('$routeChangeSuccess', function() {
			//window.scrollTo(0,90);
			//console.log('TB route changed success! ');
		//});
		
		//callNotify(message);
		$scope.callNotify = function(msg) {
			notifyService(msg);
		};
		introCtrl.$inject = ['$scope','notify'];
		*/
		
  function($scope,$http) {
		$scope.pageClass = 'introPage';
		
    $http.get('showcase/projects.json').success(function(data) {
      $scope.projects = data;
    });
		$scope.lineInView = function(index, inview, inviewpart) { //inview  - show recentReleases on scroll
			var elm = angular.element($scope);
			if (typeof(inviewpart) !== 'undefined') {
				console.log('VISIBLE: recent releases');
				//return $scope.obj.value === 'testing2!';
				//$scope.addClass('tbTesting09121823012903');
				//angular.element($scope).addClass('tbTesting09121823012903');
        elm.addClass('tbtest1290123091239012');
			}
			else {
				console.log('INVISIBLE: recent releases');
				//return $scope.obj.value === 'testing1 - back to normal';
				//$scope.addClass('tbTesting11111111');
        elm.addClass('tbtest1221132123');
			}
		};
  }]);
	
tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http',
/*
	function($scope,myService) {
		tbTestService.foo();
	},*/
	
	/*
function($scope,tbTestService){
	$scope.callFoo = function() {
	  tbTestService.foo();
	};
},
*/
/*
myApp.controller('MainCtrl', ['$scope', 'myService', function($scope, myService) {
		$scope.callFoo = function() {
				myService.foo();
		}
}]);
*/

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

