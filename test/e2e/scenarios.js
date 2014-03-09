'use strict';

describe('Page-view: Intro', function() {
	beforeEach(function() {
    browser().navigateTo('/#/');
  });

	describe('Recent releases', function() {
		it('should have 4 items assigned/limited', function(){
			var x = '#recentReleases ul li';
			expect(repeater(x).count()).toEqual(4);
		});
		//make sure categories/tags contain stuff
		//maybe try this:
		//angular.element(someElem).html('');

	});

	describe('Big buttons section', function() {
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


/*
describe('Footer', function() {
	beforeEach(function() {
    browser().navigateTo('/#/');
  });

	describe('Social icon links', function() {

		it('should have 3 items', function(){

		});

	});

});
*/


describe('Page-view: Showcase home', function(){
	beforeEach(function() {
    browser().navigateTo('/#/showcase');
  });

  it('should return new items after clicking the filters', function(){
		//default state
  	expect(repeater('ul.showcaseGalleryGrid li').count()).toBeGreaterThan(0);

  	//one example
  	element('div.tags button.Static').click();
  	expect(repeater('ul.showcaseGalleryGrid li').count()).toBeGreaterThan(12); //currently 11 ecommerce projects, 13 static

  	//another example with jQuery projects - only 2 exist
  	element('div.tags button.jQuery').click();
  	expect(repeater('ul.showcaseGalleryGrid li').count()).toEqual(2);
  });

  it('should direct user to an individual project page after clicking a project', function(){
  	element('div.tags button.Static').click();
  	element('ul.showcaseGalleryGrid li a:first-child').click();
    expect(browser().location().url()).toContain('/showcase/'); //currently only one child page avaliable
  });

});

describe('Page-view: About', function(){
	beforeEach(function() {
    browser().navigateTo('/#/about');
  });

  //test social links

});

describe('Page-view: Contact', function(){
	beforeEach(function() {
    browser().navigateTo('/#/contact');
  });

	it('should have a correct email address', function() {
		expect(element('a.contactAddress').html()).toEqual('tony@tonybarnes.me');
	});

});


describe('Page-view: Error', function() {

	it('should automatically redirect to /error/ when the window url is not recognised', function () {
    browser().navigateTo('/#/asdfqwertyzxcv1234');
    expect(browser().location().url()).toEqual('/error');
  });

});

