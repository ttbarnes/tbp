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

describe('Header', function() {
	beforeEach(function() {
    browser().navigateTo('/#/about'); //example, about page
  });

	describe('Logo brand', function() {

		it('should have correct name', function(){
			expect(element('h1 a.navbar-brand').html()).toEqual('Tony Barnes');
		});
		it('should link back to the home page', function(){
			element('h1 a.navbar-brand').click();
			expect(browser().location().url()).toEqual('/');
		});

	});
	
	describe('Navbar links', function() {
		it('should have 2 items', function(){
			expect(element('header .navbar-nav li').count()).toEqual(2);
		});
		it('should have the correct text', function(){
			expect(element('header .navbar-nav li:first-child a').html()).toEqual('Showcase');
			expect(element('header .navbar-nav li:last-child a').html()).toEqual('About');
		});
		it('should direct to to the right places', function(){
			element('header .navbar-nav li:first-child a').click();
			expect(browser().location().url()).toEqual('/showcase');

			browser().navigateTo('/#/contact');
			element('header .navbar-nav li:last-child a').click();
			expect(browser().location().url()).toEqual('/about');
		});
	});
});

describe('Footer', function() {
	beforeEach(function() {
    browser().navigateTo('/#/');
  });

	describe('Navbar links', function() {
		it('should have 3 items', function(){
			expect(element('footer .navbar-nav li').count()).toEqual(3);
		});
		it('should have the correct text', function(){
			expect(element('footer .navbar-nav li:eq(0) a').html()).toEqual('Showcase');
			expect(element('footer .navbar-nav li:eq(1) a').html()).toEqual('About');
			expect(element('footer .navbar-nav li:eq(2) a').html()).toEqual('Contact');
		});
		it('should direct to the right places', function(){
			element('footer .navbar-nav li:eq(0) a').click();
			expect(browser().location().url()).toEqual('/showcase');

			browser().navigateTo('/#/contact');
			element('footer .navbar-nav li:eq(1) a').click();
			expect(browser().location().url()).toEqual('/about');

			element('footer .navbar-nav li:eq(2) a').click();
			expect(browser().location().url()).toEqual('/contact');

		});
		it('should have 2 back-to-top buttons', function() {
			expect(element('footer button.scrollTop').count()).toEqual(2);
		});
	});
});

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

  	//another example with jQuery projects - only 3 exist
  	element('div.tags button.jQuery').click();
  	expect(repeater('ul.showcaseGalleryGrid li').count()).toEqual(3);
  });

  it('should direct user to an individual project page after clicking a project', function(){
  	element('div.tags button.Static').click();
  	element('ul.showcaseGalleryGrid li a:first-child').click();
    expect(browser().location().url()).toContain('/showcase'); //currently only one child page avaliable
  });
  
  it('should have some disclaimer text', function(){
  	var expectedDisclaimer = 'Unfortunately not all of my work is displayed here. These pieces were built on a full time, freelance, contracted or contributing basis.';
  	expect(element('div.disclaimer p').html()).toEqual(expectedDisclaimer);
  });

  it('should have a button that directs user to the about page', function(){
  	element('.row-btn-lg .btn:last-child').click();
  	expect(browser().location().url()).toContain('/about');
  });

});

describe('Page-view: Showcase individual', function(){
	beforeEach(function() {
    browser().navigateTo('/#/showcase');
  });

	it('project example - should have button that directs user back to the showcase page ', function(){
		element('ul.showcaseGalleryGrid li:eq(2) a').click();
		element('.row-btn-lg .btn:last-child').click();
		expect(browser().location().url()).toContain('/showcase');
	});

});	

describe('Page-view: About', function(){
	beforeEach(function() {
    browser().navigateTo('/#/about');
  });


	describe('Big buttons section', function() {
		it('should have a button directing to the contact page', function(){
			var x = 'div.row-btn-lg a.btn:first-child';
		  element(x).click();
			expect(browser().location().url()).toEqual('/contact');
		});
		it('should have a button directing to the showcase page', function(){
			var x = 'div.row-btn-lg a.btn:last-child';
		  element(x).click();
			expect(browser().location().url()).toEqual('/showcase');
		});
	});
	
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

  it('should display a button that takes a user back to the home page', function(){
  	var x = '#containerMiddle a.btn';
  	element(x).click();
  	expect(browser().location().url()).toEqual('/');
  });
});