'use strict';

angular.module('tbpApp')
  .directive('anchorScrollTo', function ($location, $anchorScroll) {
    return {
      link: function postLink(scope, element, attrs) {
        element.bind('click', function(event) {
					event.stopPropagation();
		      scope.$on('$locationChangeStart', function(ev) {
						ev.preventDefault();
		      });
		      var location = attrs.anchorScrollTo;
		      $location.hash(location);
		      $anchorScroll();
		    });

      }
    };
  });
