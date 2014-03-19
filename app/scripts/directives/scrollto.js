'use strict';

angular.module('tbpApp')
  .directive('scrollTo', function ($location, $anchorScroll) {
    return {
      link: function postLink(scope, element, attrs) {
        element.bind('click', function(event) {
					event.stopPropagation();
		      scope.$on('$locationChangeStart', function(ev) {
						ev.preventDefault();
		      });
		      var location = attrs.scrollTo;
		      $location.hash(location);
		      $anchorScroll();
		    });

      }
    };
  });
