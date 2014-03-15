'use strict';

angular.module('tbpApp')
  .directive('ngActiveHover', function () {
    return {
      link: function($scope, element){
        console.log('activeHoverING');
        /*
				element.bind('mouseover', function(){
					element.addClass('MOUSEDOVER');
					//element.parent().addClass('SOMETHING-OR-RATHER');
				});
				element.bind('mouseout', function(){
					element.removeClass('MOUSEDOVER');
					//element.parent().removeClass('SOMETHING-OR-RATHER');
				});
				*/
				$scope.$watch(element.children(),function(){
			    //var children = element.children();
			    //for(var i=0;i<children.length;i++){
			    var children = element.children();
			    for(var i=0;i<children.length;i++){
		        if(children[i].nodeType !== 8){
		          angular.element(children[i]).css('background', 'grey');
		        }
			    }
				  element.bind('mouseover', function(){
				    element.addClass('MOUSEDOVER');
						//element.parent().addClass('SOMETHING-OR-RATHER');
					});
			    //}
				});

			}
    };
  });



