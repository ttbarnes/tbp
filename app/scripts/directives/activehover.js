'use strict';

angular.module('tbpApp')
  .directive('activeHover', function () {
    return {
      link: function(scope, elem){

				var allProjects = elem.parent().children('li');

				scope.$watch(elem,function(){
					elem.bind('mouseover', function(){
						allProjects.addClass('inactive');
						elem.addClass('active');
						elem.nextAll('li').addClass('inactive'); //fail safe. must be a better way of doing this
					});
					elem.bind('mouseout', function(){
						elem.removeClass('active');
						allProjects.removeClass('inactive');
						elem.nextAll('li').removeClass('inactive'); //fail safe. must be a better way of doing this
					});

				});

			}
    };
  });



