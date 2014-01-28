'use strict';

var tbpControllers = angular.module('tbangControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http',

  function($scope,$http) {
		$scope.pageClass = 'introPage';
		
		/*
		$scope.sample = {
			'items': [
					{
					  'title': 'Sample Title 1',
					  'children': [
					    {'title': 'Child Title 1'},
						  {'title': 'Child Title 2'}
					  ]
					},

					{
					  'title': 'Sample Title 2',
					  'children': [
					    {'title': 'Child Title 1'},
						  {'title': 'Child Title 2'}
					  ]
					}
			  ]
      };	
		*/
		
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
	
		$http.get('showcase/phones2table.json').success(function(data) {
			$scope.projects = data;
		});
		
		//category filter
		$scope.setSelectedCategory = function (value) {
			$scope.selectedCategory = value;
		};
		$scope.categories = ['ecommerce','static','jquery'];
		$scope.byCategory = function(project){
			return project.category === $scope.selectedCategory;
		};
		$scope.selectedCategory = 'static';
		
		
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

