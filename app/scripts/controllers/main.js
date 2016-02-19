'use strict';

var tbpControllers = angular.module('tbpControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http', 'windowScrollTop',

  function($scope, $http, windowScrollTop) {
    $scope.pageClass = 'introPage';

    $http.get('showcase/latest.json').success(function(data) {
      $scope.projects = data;
    });

    $scope.scrollTop = function () {
      windowScrollTop();
    };

  }]);

tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http', 'windowScrollTop',
  function($scope, $http, windowScrollTop) {

    $scope.pageClass = 'showcaseHomePage';

    $http.get('showcase/all-projects.json').success(function(data) {
      $scope.projects = data;
    });

    //category filter
    $scope.setSelectedCategory = function (value) {
      $scope.selectedCategory = value;
    };
    $scope.categories = [
      'Web apps',
      'Ecommerce',
      'Static',
      'jQuery plugins'
    ];

    $scope.byCategory = function(project){
      return project.category === $scope.selectedCategory;
    };

    $scope.selectedCategory = 'Web apps';

    $scope.scrollTop = function () {
      windowScrollTop();
    };

  }]);

tbpControllers.controller('indShowcasePieceCtrl', ['$scope', '$routeParams', '$http', 'windowScrollTop',
  function($scope, $routeParams, $http, windowScrollTop) {
    $scope.pageClass = 'showcaseIndPage';
    $scope.projectId = $routeParams.projectId;

    $http.get('showcase/' + $scope.projectId + '.json').success(function(data) {
      $scope.project = data;
    });

    $scope.imageUrl = 'images/showcase/' + $scope.projectId + '/01.jpg';

    $scope.scrollTop = function () {
      windowScrollTop();
    };

  }]);

tbpControllers.controller('aboutCtrl', function($scope, windowScrollTop){
  $scope.pageClass = 'aboutPage';

  $scope.scrollTop = function () {
    windowScrollTop();
  };

});

tbpControllers.controller('contactCtrl', function($scope){
  $scope.pageClass = 'contactPage';
  $scope.tonyDetails = {
    email:'tony@tonybarnes.me'
  };
});


tbpControllers.controller('errorCtrl', function($scope){
  $scope.pageClass = 'errorPage';
});