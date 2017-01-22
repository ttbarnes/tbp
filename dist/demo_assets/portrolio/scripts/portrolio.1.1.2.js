/*
	* Portrolio 1.1.2
	* A responsive portfolio layout with vertical overlay, dynamic height calculation, tooltips, colour schemes and more!
	* URL to go here
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 29/07/2013
	* Reqruiments: 
	* 1: jQuery 2.0 (http://jquery.com/download/)
	* 2: Media.match (https://github.com/weblinc/media-match)
	* 3: Inview (http://github.com/protonet/jquery.inview)
	*
*/
;(function($){

	var methods = {
		init : function(options) {
		
			var defaultSettings = $.extend({ //default settings
				columnsNo: 3, //no. of colums (2,3,6)
				columnsDiy: false, //cancel column width calculations?
				activeHoverStates: {
					dim:true,
					dimOnly:false,
					toolTip:true, //tooltip, no slide
					//toolTipFixedBtm:false, //tooltip fixed at bottom (default will slide but can be switched off)
					toolTipSlide:true, //tooltip and slide
					popup:true //popup (on click)
				},
				pageSelectors: {
					header: 'div.header',
					footer: 'div.footer'
				},
				colorScheme: { //color schemes
					black:true //darkBlue lightBlue, darkBlue, black, white, grey, none (transparent, white text)
				} 
			}, options);
			
			return this.each(function(){
				
				//private settings/vars
				var $parentElm = $(this).children('div.portrolioInnerWrapper'); //parent element
				var $elm = $parentElm.children('div.item'); //individual items
				var $elmImg = $elm.children('img')[0]; //item img
				var elmImgMaxHeight = $('img').height(); //img height
				
				//column layout				
				var $columnsAllowed = [3, 6]; //allowed columns
				var $columnsNoResult = defaultSettings.columnsNo; //get columns result
				i = $columnsAllowed;
				
				if (defaultSettings.columnsDiy == false) {	
					var columsNoResult = defaultSettings.columnsNo; //get columns
					if (defaultSettings.columsNoResult == $columnsAllowed[i]) { //need to figure out how to test this from the var instead of hard coded.
					
						if (defaultSettings.columnsNo == 3){ //3 columns
							$parentElm.addClass('col3');
						} 
						else if (defaultSettings.columnsNo == 6){ //6 columns
							$parentElm.addClass('col6');
						}
						else {
							console.log('error - please enter 3 or 6 columns') //error
							$parentElm.hide();
						}
					}
					else {
						console.log('error - please enter 3 or 6 columns') //error
						$parentElm.hide();
					}
				}
				
				function aHStatesDimming() { //active hover states dimming			
					if (defaultSettings.activeHoverStates.dim == true || defaultSettings.activeHoverStates.dimOnly == true){
						$parentElm.addClass('dimActive');
					}
				} 
				
				function aHStatesInit(){ //active hover states init - default active hover states (from original plugin)
				  $($elm).bind({
						mouseenter: function(e) {					
							$elm.addClass('active');
							var $elmHover = $(this);
							$($elmHover).addClass('hovered');
						},
						mouseout: function(e) {
							$elm.removeClass('active');		
							$(this).removeClass('hovered');
						}
					});	
				}
				
				function aHStatesToolTip() { //active hover states tooltip
					$parentElm.addClass('ttipTitleActive');
					ttipSetting001 = defaultSettings.activeHoverStates.toolTip == true;
					ttipSetting002 = defaultSettings.activeHoverStates.toolTip == false;
					ttipSetting003 = defaultSettings.activeHoverStates.toolTipSlide == true;
					ttipSetting004 = defaultSettings.activeHoverStates.toolTipSlide == false;
					
					switch (true) {
						case ttipSetting003:
						$($elm).bind({
							mouseenter: function testFunctionBinding (e) {
								var $elmHover = $(this);
								if ($($elmHover).find('span.title').length > 0) {
									var $toolTip = $('<div class="toolTip toolTipSlideIn"><span class="bg"/></div>').appendTo(this); //create toolTip and bg
									$('div.toolTip').show().animate({ bottom: "0" },050);
									$($elmHover).children('span.title').appendTo('div.toolTip');
								}				
							},
							mouseleave: function(e) {								 
								$elm.removeClass('active');
								$(this).removeClass('hovered');										
								$('div.toolTip span.title').appendTo(this);
								$('div.toolTip').remove();
								$(this).removeClass('hovered');
								$('div.toolTip').animate({ bottom: "-25px" }).hide();
							},
						});		
						break;
						
						case ttipSetting001: case ttipSetting004:
							$($elm).bind({
								mouseenter: function testFunctionBinding (e) {
									var $elmHover = $(this);
									if ($($elmHover).find('span.title').length > 0) {
										var $toolTip = $('<div class="toolTip"><span class="bg"/></div>').appendTo(this); //create toolTip and bg
										$('div.toolTip').show();
										$($elmHover).children('span.title').appendTo('div.toolTip');
									}				
								},
								mouseleave: function(e) {								 
									$elm.removeClass('active');
									$(this).removeClass('hovered');										
									$('div.toolTip span.title').appendTo(this);
									$('div.toolTip').remove();
									$(this).removeClass('hovered');
									$('div.toolTip').hide();
								},
							});		
						break;										
					}		
				}
				
			  function aHStatesPopup() { //popup
					popupSetting001 = defaultSettings.activeHoverStates.popup == true;
						switch (true) {
							case popupSetting001:
							$parentElm.addClass('popupActive');
							$($elm).bind({
								mousedown: function someBindFunction (e) {
									var $portrolioPopup = $('<div id="portrolioPopup"/>').appendTo($parentElm); //create popup wrapper
									var $overlayLarge = $('<div class="overlayLarge"/>').appendTo($portrolioPopup); //create large overlay
									var $elmCurrent = $(this);
									
									$elmCurrentImg = $elmCurrent.find('img');
									$($elmCurrentImg).clone().appendTo($portrolioPopup); //clone image, wrap
									
									$portrolioPopup.find('img').wrap('<div class="imgWrapper"></div>');
									var $portrolioPopupImgWrapper = $('div.imgWrapper');
									
									$portrolioCloseBtn = $('<span class="closeBtn"></span>');
									$portrolioPopupImgWrapper.append($portrolioCloseBtn);
									
									$overlayLarge.fadeIn(600);
									$portrolioPopup.fadeIn(600);
									
									$($overlayLarge).bind({
										mousedown: function overlayLargeMseDwn (e) {
											$portrolioPopup.fadeOut(400).remove();
										}
									});
									
									$($portrolioCloseBtn).bind({
										mousedown: function overlayLargeMseDwn (e) {
											$portrolioPopup.fadeOut(400).remove();
										}
									});
									
								}
							});
						}
				}
				
				var overlaySmallInit = function overlaySmallInit() { //create, append small overlays
				  var $overlaySmallTop = $('<div class="overlaySmall overlaySmallTop"/>', { //create small overlay top, set height
						id: 'portrolioOverlayTop'
					}).insertBefore($parentElm.children(':eq(0)'));
					var $overlaySmallBtm = $('<div class="overlaySmall overlaySmallBtm"/>', { //create small overlay btm, set height
						id: 'portrolioOverlayBtm'
					}).appendTo($parentElm);	
				}
				
				function overlaySmallInView() {  //in view - small overlays
					
					//temporary selectors (POC)
					var $overlaySmallTop = $('div.overlaySmallTop');
					var $overlaySmallBtm = $('div.overlaySmallBtm');
					var $header = defaultSettings.pageSelectors.header;
					var $footer = defaultSettings.pageSelectors.footer;
					var $elmLast = $($parentElm).find('div.item:last'); //find last item, add class
					var $elm3 = $($parentElm).find('div.item:eq(2)'); //find 3rd item
					$elmLast.addClass('last');
							
					$($header).bind('inview', function(event, visible) { //if header in view
						if (visible) {
							$($overlaySmallTop).css({'position': 'absolute', 'top':'0' });
							$($overlaySmallBtm).css({'display': 'none' });
						} else {
							$($overlaySmallTop).css({'position': 'fixed', 'top':'0' });
							$($overlaySmallBtm).css({'display': 'block', 'position': 'fixed', 'bottom':'0'});
						}
					});
					$($elm3).bind('inview', function(event, visible) { //if 3rd item in view
						if (visible) {
							$($overlaySmallBtm).css({'position': 'fixed', 'bottom':'0' });
						}
					});
					$($elmLast).bind('inview', function(event, visible) { //if last item in view
						if (visible) {
							$($overlaySmallBtm).css({'position': 'absolute', 'bottom':'0' });
						} else {
							$($overlaySmallBtm).css({'position': 'fixed', 'bottom':'0' });
						}
					});
					$($footer).bind('inview', function(event, visible) { //if footer in view (this will be the immediate item after #portrolioWrapper)
						if (visible) {
							$($overlaySmallTop).css({'position': 'absolute', 'top':'0' });
						}
						else {
							$($overlaySmallTop).css({'position': 'fixed', 'top':'0' });
						}
					});	
				}
				 
				//color schemes
				if (defaultSettings.colorScheme == 'lightBlue'){ //light blue
					$parentElm.addClass('clrSchemeLightBlue');
					}
				else if (defaultSettings.colorScheme == 'darkBlue'){ //dark blue
					$parentElm.addClass('clrSchemeDarkBlue');
				}
				else if (defaultSettings.colorScheme == 'black'){ //black
					$parentElm.addClass('clrSchemeBlack');
				}
				else if (defaultSettings.colorScheme == 'white'){ //white
					$parentElm.addClass('clrSchemeWhite');
				}
				else if (defaultSettings.colorScheme == 'grey'){ //grey
					$parentElm.addClass('clrSchemeGrey');
				}
				else if (defaultSettings.colorScheme == 'none'){ //none
					$parentElm.addClass('clrSchemeNone');
				}
				else { //default
					$parentElm.addClass('clrSchemeBlack');
				}
				
				function itemHeightCalc() { //item/overlay height calc
					var	windowHeight = $(window).height(); //window height
					var $overlaySmall = $('div.overlaySmall'); //get small overlays
					var $elmImg = $('img'); //img (quickfix)
					
					if ((defaultSettings.columnsNo == 2) || (defaultSettings.columnsNo == 3)) { //2 or columns
						var heightResult = windowHeight * 0.333; //do calc
						$('div.overlaySmall').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
						$('div.item img').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
					}
					else if (defaultSettings.columnsNo == 6){ //6 columns
						var heightResult1 = windowHeight * 0.161; //do calc
						var heightResult2 = heightResult1 * 2;
						$('div.overlaySmall').css({  //set heights
							'height': heightResult2,
							'max-height': heightResult2
						});
						$('div.item img').css({  //set heights
							'height': heightResult2,
							'max-height': heightResult2
						});
					}
				}
				
				function itemHeightCalcReset(){ //item/overlay height calc reset
					var $overlaySmall = $('div.overlaySmall');
					var $elmImg = $('img');
					$overlaySmall.remove();
					$elmImg.css({
						'height':'auto',
						'max-height':'none'
					});
				}
				
				function mediaMatchQ() { //breakpoints - matchMedia - make it all dynamic
					var mql1 = window.matchMedia('screen and (min-width: 768px)');
					var mql2 = window.matchMedia('screen and (max-width: 768px)');
					var mql3 = window.matchMedia('screen and (min-width: 480px)');
					var mql4 = window.matchMedia('screen and (max-width: 480px)');
					
					if (mql1.matches) {
						itemHeightCalcReset(); //item/overlay height calc reset
						
						//new						
						aHStatesInit(); //active hover states init
						aHStatesDimming(); //active hover states dimming
						var aHStatesToolTipActive = defaultSettings.activeHoverStates.toolTip; //if tooltip is not false, run
						if(aHStatesToolTipActive != false) {
							aHStatesToolTip();
							aHStatesPopup();
						}
					}
					if (mql2.matches) {
						$parentElm.removeClass('dimActive');
						$parentElm.removeClass('ttipTitleActive');
						$('#portrolioPopup').remove();
					}
					if (mql4.matches) {
						$parentElm.removeClass('ttipTitleActive');
						$('#portrolioPopup').remove();
						$elm.hide().fadeIn(300);
						overlaySmallInit(); //create small overlays
						itemHeightCalc(); //item/overlay height calc
						overlaySmallInView(); //in view, for small overlays
					}
			}
			mediaMatchQ();
		
			var timerDelay = (function(){ //timer delay, see http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-or-resize-event-and-only-then-perform-an-ac
				var timer = 0;
				return function(callback, ms){
					clearTimeout (timer);
					timer = setTimeout(callback, ms);
				};
			})();
				
			$(window).resize(function() { //run after window resize is complete. Otherwise timer is reset.
				timerDelay(function(){
					function mediaMatchQTimed(){ //item height calculations
						var mql2 = window.matchMedia('screen and (min-width: 768px)');
						var mql3 = window.matchMedia('screen and (min-width: 480px)');
						var mql4 = window.matchMedia('screen and (max-width: 480px)');
						if (mql2.matches) {
							$($elm).bind('mouseenter');
							aHStatesInit(); //active hover states init
							aHStatesDimming(); //active hover states dimming								
							var aHStatesToolTipActive = defaultSettings.activeHoverStates.toolTip; //if tooltip is not false, run
							if(aHStatesToolTipActive != false) {
								aHStatesToolTip();
							}
							aHStatesPopup();
						}
						if (mql3.matches) {
							$('div.toolTip').remove();								 
							itemHeightCalcReset(); //item/overlay height calc reset
						}
						if (mql4.matches) {
							$($elm).unbind('mouseenter').hide().fadeIn(300); //unbind mouse over (this is key), then hide and fade
							$($elm).unbind('mousedown')
							$('#portrolioPopup').remove();
							overlaySmallInit(); //create, append overlays
							itemHeightCalc(); //item/overlay height calc
							overlaySmallInView(); //in view - overlays
						}
					}
					mediaMatchQTimed();						
				}, 500);
			});
			
		  });
		}
	};
  $.fn.Portrolio = function(method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } 
		else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } 
		else {
      $.error('Portrolio Error! Something has gone wrong. Please see the original codebase, or contact the author');
    } 
  };
	return this;
})(jQuery);