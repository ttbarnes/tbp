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
	
/*
tbpControllers.controller('testTableCtrl', function($scope, $q) {
	
	  $scope.setSelectedTitle = function (value) {
		  if ($scope.selectedTitle === value) {
				$scope.selectedTitle = undefined;
			} else {
				$scope.selectedTitle = value;
			}
    };
    
    $q.when({ data: [
        { title: 'sometitle', text: 1 },
        { title: 'anothertitle', text: 2 },
        { title: 'sometitle', text: 3 },
        { title: 'someothertitle', text: 4 },
        { title: 'sometitle', text: 5 },
        { title: 'anothertitle', text: 6 },
        { title: 'anothertitle', text: 7 },
        { title: 'yetanothertitle', text: 8 },
      ]})
    .then(function(res){
        $scope.entries = res.data;
      });

    $scope.titles = ['sometitle','someothertitle','anothertitle'];

    $scope.byTitle = function(entry){
			return entry.title === $scope.selectedTitle || $scope.selectedTitle === undefined;
    };
		
		$scope.selectedTitle = 'anothertitle';
		
	});
	*/
	

	
tbpControllers.controller('testTableCtrl2', ['$scope', '$http', '$q',
	
	
		
	]);


tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http', '$q',
/*
  function($scope, $http) {
		$scope.pageClass = 'showcaseHomePage';
		//$scope.myFilter = 2;
				
    $http.get('showcase/projects.json').success(function(data) {
      $scope.projects = data;
    });
		$scope.orderPop = '3';
		*/
	function($scope, $http) {
		
		$scope.pageClass = 'showcaseHomePage';
	
		$http.get('showcase/phones2table.json').success(function(data) {
			$scope.projects = data;
		});
		
		//custom filter
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

