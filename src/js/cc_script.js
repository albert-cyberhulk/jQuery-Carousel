/*Javascript document that contains all cooperation with jQuery library
 * Triggers animation effect
 * Cyberhulk_Carousel
 * author Albert Stepanyan
 * Date 09.12.11
 */

(function($){
    $.fn.ccCarousel = function() {

		/*================================Configurations==============================*/

        var clickTimer = 250; //setTimeout for click

        var hoverTimer = 7000; //setTimeout for hover


        var slider = $(".slider"); //dynamic div

        var sliderArray = $(".slider div");//array of images in the slider

        var sliderLength = sliderArray.length; // count of images in the slider

        var customWidth = sliderLength*330;	//the length of the slider div depending on the count of images

        sliderWidth = customWidth + "px";//slider width in pixels

        slider.width(sliderWidth); //initializing the slider width

        var wrapperWidth = $(".galleryWrapper").width(); //initializing the wrapper gallery width

        var addition = customWidth - wrapperWidth; //the differennce between monitor reslutions

        var hoverStepRight = addition; //the step slider completes when hovred

        var clickStep =3*(customWidth / parseInt(sliderLength));

        var dynamicWidth = $(".dynamic").width(); //initializing the dynamic wrapper width

		/*==================================main functions for click====================*/


        $(".leftDirection").bind(//function for left navigational button mousedown
            "mousedown", function(){
                slider.stop();
                var left = slider.css("left");
                var leftMargin = parseInt(left);
                if(leftMargin <= "-"+clickStep){
                    slider.animate({"left": leftMargin + clickStep+"px"},clickTimer);
                }
                else{
                    slider.animate({"left": "0px"},clickTimer);

                }
            }
        );//end of event


        $(".rightDirection").bind(//function for right navigational button mousedown
            "mousedown", function(){
                slider.stop();
                var right = slider.css("left");
                var rightMargin = parseInt(right);
                var customStep = addition+rightMargin;
                //alert(customStep);
                if(sliderLength <=6){
                    slider.animate({"left": "-" + addition+"px"},clickTimer);
                }
                else if(sliderLength ==7 && wrapperWidth >=1300){
                    slider.animate({"left": "-" + addition+"px"},clickTimer);
                }
                else{
                    if(customStep >= clickStep){
                        slider.animate({"left": rightMargin - clickStep+"px"},clickTimer);
                    }
                    else{
                        slider.animate({"left": "-" + addition+"px"},clickTimer);
                    }
                }
            }
        );//end of event

		/*================================Functions that control slider when hovered==============================*/


        $(".leftDirection").bind(//function for right navigational button mouseover
            "mouseover", function(){
                slider.stop();
                var leftHover = slider.css("left");
                var leftMarginHover = parseInt(leftHover);
                if(leftMarginHover !=0 ){
                    slider.animate({"left": "0px"},hoverTimer);
                }
            }
        );//end of event

        $(".leftDirection").bind(//function for right navigational button mouseup
            "mouseup", function(){
                var leftHover = slider.css("left");
                var leftMarginHover = parseInt(leftHover);
                if(leftMarginHover !=0 ){
                    slider.animate({"left": "0px"},hoverTimer);
                }
            }
        );//end of event

        $(".leftDirection").bind(//function for left navigational button mouseout
            "mouseout", function(){
                slider.stop();
            }
        );//end of event

        $(".rightDirection").bind(//function for right navigational button mouseover
            "mouseover", function(){
                slider.stop();
                var rightHover = slider.css("left");
                var rightMarginHover = parseInt(rightHover);
                slider.animate({"left": "-" + addition+"px"},hoverTimer);
            }
        );//end of event

        $(".rightDirection").bind(//function for right navigational button mouseup
            "mouseup", function(){
                var rightHover = slider.css("left");
                var rightMarginHover = parseInt(rightHover);
                slider.animate({"left": "-" + addition+"px"},hoverTimer);
            }
        );//end of event

        $(".rightDirection").bind(//function for right navigational button mouseout
            "mouseout", function(){
                slider.stop();
            }
        );//end of event


		/*=========================================part for Images that contain links==================================================*/


        $(".slider img").live(//function that controls links
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