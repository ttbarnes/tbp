'use strict';

describe('Page: Error', function() { 

	it('should automatically redirect to /error/ when the window url is not recognised', function () {
    browser().navigateTo('/#/asdfqwertyzxcv1234');
    expect(browser().location().url()).toEqual('/error');
  });

	/*
	it('should do this that and the other', function() { 
		input('searchBox').enter('jacksparrow'); 
		element(':button').click(); 
		expect(repeater('ul li').count()).toEqual(10); 
		input('filterText').enter('Bees'); 
		expect(repeater('ul li').count()).toEqual(1);
	});
	*/

});