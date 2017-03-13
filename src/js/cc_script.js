/*Javascript document that contains all cooperation with jQuery library
 * Triggers animation effect
 * Cyberhulk_Carousel
 * author Albert Stepanyan
 * Date 09.12.11
 */

(function (window, $) {

    $.fn.ccCarousel = function (options) {

        options = $.isPlainObject(options) ? options : {};

        /*================================Configurations==============================*/

        var defaults = {
            slider: $(".slider"),        //dynamic div
            sliderArray: $(".slider div"),        //array of images in the slider
            wrapperWidth: $(".galleryWrapper").width(),        //initializing the wrapper gallery width
            dynamicWidth: $(".dynamic").width(),        //initializing the dynamic wrapper width
            sliderLength: $(".slider div").length        // count of images in the slider
        };

        var settings = $.extend(defaults, $.fn.ccCarousel.defaults, options);

        defaults.customWidth = $(".slider div").length * (defaults.imageWidth < 50 ? 50 : defaults.imageWidth);    //the length of the slider div depending on the count of images
        defaults.sliderWidth = defaults.customWidth;        //slider width in pixels     
        defaults.addition = defaults.customWidth - defaults.wrapperWidth;        //the differennce between monitor reslutions       
        defaults.clickStep = defaults.customWidth / parseInt(defaults.sliderLength);
        defaults.slider.width(defaults.sliderWidth);        //initializing the slider width

        /*==================================main functions for click====================*/

        $(this).find(".leftDirection").bind(//function for left navigational button mousedown
            "mousedown", function () {
                settings.slider.stop();
                var left = settings.slider.css("left");
                var leftMargin = parseInt(left);

                if(leftMargin <= "-"+settings.clickStep){
                    settings.slider.animate({"left": leftMargin + settings.clickStep},settings.clickTimer);
                }
                else{
                    settings.slider.animate({"left": 0},settings.clickTimer);
                }
            }
        );//end of event

        $(this).find(".leftDirection").bind(//function for right navigational button mouseover
            "mouseover", function () {
                settings.slider.stop();
                var leftHover = settings.slider.css("left");
                var leftMarginHover = parseInt(leftHover);

                if(leftMarginHover !=0 ){
                     settings.slider.animate({"left": 0},settings.hoverTimer);
                }
            }
        );//end of event

        $(this).find(".leftDirection").bind(//function for right navigational button mouseup
            "mouseup", function () {
                var leftHover = settings.slider.css("left");
                var leftMarginHover = parseInt(leftHover);

                if(leftMarginHover !=0 ){
                     settings.slider.animate({"left": 0},settings.hoverTimer);
                }
            }
        );//end of event

        $(this).find(".leftDirection").bind(//function for left navigational button mouseout
            "mouseout", function () {
                settings.slider.stop();
            }
        );//end of event


        $(this).find(".rightDirection").bind(//function for right navigational button mousedown
            "mousedown", function () {
                settings.slider.stop();
                var right = settings.slider.css("left");
                var rightMargin = parseInt(right);

                var customStep = settings.addition+rightMargin;
                //alert(customStep);                
                if(customStep >= settings.clickStep){
                    settings.slider.animate({"left": rightMargin - settings.clickStep},settings.clickTimer);
                }
                else{
                    settings.slider.animate({"left": "-" + settings.addition},settings.clickTimer);
                }                
            }
        );//end of event

        /*================================Functions that control slider when hovered==============================*/

        $(this).find(".rightDirection").bind(//function for right navigational button mouseover
            "mouseover", function () {
                settings.slider.stop();
                var rightHover = settings.slider.css("left");
                var rightMarginHover = parseInt(rightHover);

                settings.slider.animate({"left": "-" + settings.addition},settings.hoverTimer);
            }
        );//end of event

        $(this).find(".rightDirection").bind(//function for right navigational button mouseup
            "mouseup", function () {
                var rightHover = settings.slider.css("left");
                var rightMarginHover = parseInt(rightHover);

                settings.slider.animate({"left": "-" + settings.addition},settings.hoverTimer);
            }
        );//end of event

        $(this).find(".rightDirection").bind(//function for right navigational button mouseout
            "mouseout", function () {
                settings.slider.stop();
            }
        );//end of event

        /*=========================================part for Images that contain links==================================================*/

        $(this).find(".slider img").on(//function that controls links
            "click", function () {
                if ($(this).attr("rel") == 1) {
                    window.open($(this).attr("alt"), "_blank");
                }
                else {
                    window.location = $(this).attr("alt");
                }
            }
        );//end of event
        return $(this);
    };

    $.fn.ccCarousel.defaults = {
        clickTimer:250,        //setTimeout for click
        hoverTimer: 7000,        //setTimeout for hover
        imageWidth: 330
    }

}(window, jQuery));//end of dom load
