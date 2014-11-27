'use strict';

angular.module('tbpApp')
  .directive('activeHover', function () {
    return {
      link: function(scope, elem){
        scope.$watch(elem,function(){
          elem.bind('mouseover', function(){
            elem.addClass('active');
            elem.parent().children('li').addClass('inactive');
          });
          elem.bind('mouseout', function(){
            elem.removeClass('active');
            elem.parent().children('li').removeClass('inactive');
          });
        });
      }
    };
  });