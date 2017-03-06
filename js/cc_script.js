/*Javascript document that contains all cooperation with jQuery library  
 * Triggers animation effect
 * Cyberhulk_Carousel
 * author Albert Stepanyan
 * Date 09.12.11
 */

(function($){
	$.fn.ccCarousel = function(options) {

	/*================================Configurations==============================*/

		var defaults = {
			clickTimer:250,        //setTimeout for click
			hoverTimer: 7000,        //setTimeout for hover
			slider: $(".slider"),        //dynamic div
			sliderArray: $(".slider div"),        //array of images in the slider
			wrapperWidth: $(".galleryWrapper").width(),        //initializing the wrapper gallery width
			dynamicWidth: $(".dynamic").width(),        //initializing the dynamic wrapper width
			sliderLength: $(".slider div").length,        // count of images in the slider
			customWidth: $(".slider div").length * 330        //the length of the slider div depending on the count of images
		};

		defaults.sliderWidth = defaults.customWidth + "px";        //slider width in pixels
		defaults.addition = defaults.customWidth - defaults.wrapperWidth;        //the differennce between monitor reslutions
		defaults.clickStep = 3*(defaults.customWidth / parseInt(defaults.sliderLength)); 
		defaults.slider.width(defaults.sliderWidth);        //initializing the slider width

		var settings = $.extend(defaults, options);

	/*==================================main functions for click====================*/
		
					
		$(".leftDirection").bind(//function for left navigational button mousedown
			"mousedown", function(){
				defaults.slider.stop();
				var left = defaults.slider.css("left");
				var leftMargin = parseInt(left);
				if(leftMargin <= "-"+defaults.clickStep){
						defaults.slider.animate({"left": leftMargin + defaults.clickStep+"px"},defaults.clickTimer);
				}
				else{
					defaults.slider.animate({"left": "0px"},defaults.clickTimer);
			
				}
			}
		);//end of event
		

		$(".rightDirection").bind(//function for right navigational button mousedown
			"mousedown", function(){
				defaults.slider.stop();
				var right = defaults.slider.css("left");
				var rightMargin = parseInt(right);
				var customStep = defaults.addition+rightMargin;
				//alert(customStep);
				if( defaults.sliderLength <=6){
					defaults.slider.animate({"left": "-" + defaults.addition+"px"},defaults.clickTimer);
				}
				else if( defaults.sliderLength ==7 && defaults.wrapperWidth >=1300){
					defaults.slider.animate({"left": "-" + defaults.addition+"px"},defaults.clickTimer);
				}
				else{
					if(customStep >= defaults.clickStep){
						defaults.slider.animate({"left": rightMargin - defaults.clickStep+"px"},defaults.clickTimer);
					}
					else{
						defaults.slider.animate({"left": "-" + defaults.addition+"px"},defaults.clickTimer);
					}
				}
			}
		);//end of event
		
		/*================================Functions that control slider when hovered==============================*/
		
		 
		$(".leftDirection").bind(//function for right navigational button mouseover
			"mouseover", function(){
				 defaults.slider.stop();
				var leftHover =  defaults.slider.css("left");
				var leftMarginHover = parseInt(leftHover);
				if(leftMarginHover !=0 ){
					 defaults.slider.animate({"left": "0px"},defaults.hoverTimer);
				}
			}
		);//end of event
		
		$(".leftDirection").bind(//function for right navigational button mouseup
			"mouseup", function(){
				var leftHover =  defaults.slider.css("left");
				var leftMarginHover = parseInt(leftHover);
				if(leftMarginHover !=0 ){
					 defaults.slider.animate({"left": "0px"},defaults.hoverTimer);
				}
			}
		);//end of event
		
		$(".leftDirection").bind(//function for left navigational button mouseout
			"mouseout", function(){
			 	  defaults.slider.stop();
			 }
		);//end of event
		
		$(".rightDirection").bind(//function for right navigational button mouseover
			"mouseover", function(){
				defaults.slider.stop();
				var rightHover = defaults.slider.css("left");
				var rightMarginHover = parseInt(rightHover);
				defaults.slider.animate({"left": "-" + defaults.addition+"px"},defaults.hoverTimer);
			}
		);//end of event
		
		$(".rightDirection").bind(//function for right navigational button mouseup
			"mouseup", function(){
				var rightHover = defaults.slider.css("left");
				var rightMarginHover = parseInt(rightHover);
				defaults.slider.animate({"left": "-" + defaults.addition+"px"},defaults.hoverTimer);
			}
		);//end of event
		
		$(".rightDirection").bind(//function for right navigational button mouseout
			"mouseout", function(){
			 	 defaults.slider.stop();
			 }
		);//end of event	

		
		/*=========================================part for Images that contain links==================================================*/
		
		
		$(".slider img").on(//function that controls links
			"click", function(){
				if($(this).attr("rel")==1){
					window.open($(this).attr("alt"),"_blank");
				}
				else{
					window.location = $(this).attr("alt");
				}
			}
		);//end of event
	}
}(jQuery));//end of dom load