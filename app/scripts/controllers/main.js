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
        rRel.removeClass('rRel-invisible').addClass('rRel-inView');
			}
			else {
				rRel.removeClass('rRel-inView').addClass('rRel-invisible');
			}
		};
  }]);
	
tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http', '$q',
	function($scope, $http) {
		
		$scope.pageClass = 'showcaseHomePage';
	
		$http.get('showcase/projects.json').success(function(data) {
			$scope.projects = data;
		});
		
		//category filter
		$scope.setSelectedCategory = function (value) {
			$scope.selectedCategory = value;
		};
		$scope.categories = [
		  'Ecommerce',
			'Static',
			'jQuery plugins',
			'Holding pages',
			'Brand identity',
			'Designs, mockups'
		];
		
		$scope.byCategory = function(project){
			return project.category === $scope.selectedCategory;
		};
		$scope.selectedCategory = 'Static';
		
		
	}]);

tbpControllers.controller('indShowcasePieceCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
		$scope.pageClass = 'showcaseIndPage';
		
    $http.get('showcase/' + $routeParams.projectId+ '.json').success(function(data) {
      $scope.project = data;
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

