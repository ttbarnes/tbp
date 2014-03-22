'use strict';

angular.module('tbpApp')
  .service('windowScrollTop', function () {
    return function() {
			window.scrollTo(0,0);
			//would be good to have an optional transition fade (for the on click)
		};
  });
