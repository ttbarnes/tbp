'use strict';

var tbpControllers = angular.module('tbpControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http',

	
  function($scope,$http) {
		$scope.pageClass = 'introPage';

		$http.get('showcase/recent-releases.json').success(function(data) {
      $scope.projects = data;
    });

		//$scope.photos = tonyDirective.someFunctionStuff();


		//$scope.message = { text: 'nothing clicked yet' };
		//console.log($scope.daysInMonth(12, 2012));
/*
		$scope.clickUnfocused = function() {
			$scope.message.text = 'unfocused button clicked';
		};
		$scope.clickFocused = function() {
			$scope.message.text = 'focus button clicked';
		};
*/

		/*
		$scope.lineInView = function(index, inview, inviewpartIntroDesign, inviewpart) { //inview  - show recentReleases on scroll
			var rRel = angular.element('#recentReleases');
			
			if (typeof(inviewpart) !== 'undefined') {
        rRel.removeClass('inview-invisible').addClass('inview-visible');
			}
			else {
				rRel.removeClass('inview-visible').addClass('inview-invisible');
			}
		};
		*/
  }]);
	
tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http', '$q',
	function($scope, $http) {
		
		$scope.pageClass = 'showcaseHomePage';
	
		$http.get('showcase/all-projects.json').success(function(data) {
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
	/*
	$scope.$on('$routeChangeSuccess', function() {
    window.scrollTo(0, 0); //fail safe
	});
	*/
	
/*
  $scope.alerter = CommonCode;
	$scope.alerter.show('hello world! tb');
	//$scope.tbthing500 = CommonCode;
	//$scope.tbthing500.show();
*/

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

