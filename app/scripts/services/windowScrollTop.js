'use strict';

angular.module('tbpApp')
  .service('windowScrollTop', function windowScrollTop() {
    return function() {
			window.scrollTo(0,0);
			//would be good to have an optional transiiton fade (for the on click)
		};
  });
