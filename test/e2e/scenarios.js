'use strict';

describe('Page: Intro', function() {
	beforeEach(function() {
    browser().navigateTo('/#/');
  });

	//check page class has rendered as expected texa

	//recent releases function start
	//
	//
	it('should have 4 items', function(){
		var x = '#recentReleases ul li';
		expect(repeater(x).count()).toEqual(4);
	});

	//make sure categories/tags contain stuff

	//
	//
	//recent releases function end

  it('should have a button directing to the about page', function(){
	  element('div.subIntro a.btn:first-child').click(); 
		expect(browser().location().url()).toEqual('/about');
	});

	it('should have a button directing to the showcase page', function(){
	  element('div.subIntro a.btn:last-child').click(); 
		expect(browser().location().url()).toEqual('/showcase');
	});
	


});

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

