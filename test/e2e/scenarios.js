'use strict';

describe('Page: Intro', function() {
	beforeEach(function() {
    browser().navigateTo('/#/');
  });

	//check page class has rendered as expected text

	describe('recent releases', function() {
		it('should have 4 items assigned/limited', function(){
			var x = '#recentReleases ul li';
			expect(repeater(x).count()).toEqual(4);
		});
		//make sure categories/tags contain stuff
		//maybe try this:
		//angular.element(someElem).html('');

	});

	describe('big buttons section', function() {
		it('should have a button directing to the about page', function(){
			var x = 'div.subIntro a.btn:first-child';
		  element(x).click();
			expect(browser().location().url()).toEqual('/about');
		});
		it('should have a button directing to the showcase page', function(){
			var x = 'div.subIntro a.btn:last-child';
		  element(x).click();
			expect(browser().location().url()).toEqual('/showcase');
		});
	});
  
	


});

describe('Page: Error', function() { 

	it('should automatically redirect to /error/ when the window url is not recognised', function () {
    browser().navigateTo('/#/asdfqwertyzxcv1234');
    expect(browser().location().url()).toEqual('/error');
  });

});

