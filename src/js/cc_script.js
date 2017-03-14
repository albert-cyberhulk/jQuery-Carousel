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
            slider: $('.slider'),        //dynamic div
            sliderArray: $('.slider div'),        //array of images in the slider
            wrapperWidth: $('.galleryWrapper').width(),        //initializing the wrapper gallery width
            dynamicWidth: $('.dynamic').width(),        //initializing the dynamic wrapper width
            sliderLength: $('.slider div').length        // count of images in the slider
        };

        $.fn.ccCarousel.defaults = $.extend(defaults, $.fn.ccCarousel.defaults, options);

        defaults.customWidth = $('.slider div').length * (defaults.imageWidth < 50 ? 50 : defaults.imageWidth);    //the length of the slider div depending on the count of images
        defaults.sliderWidth = defaults.customWidth;        //slider width in pixels     
        defaults.addition = defaults.customWidth - defaults.wrapperWidth;        //the differennce between monitor reslutions       
        defaults.clickStep = defaults.customWidth / parseInt(defaults.sliderLength);
        defaults.slider.width(defaults.sliderWidth);        //initializing the slider width

        var handler = {
            leftMousedown: $(this).find('.leftDirection').bind('mousedown', $.fn.ccCarousel.moveToLeft),
            rightMousedown: $(this).find('.rightDirection').bind('mousedown', $.fn.ccCarousel.moveToRight),
            leftMouseover: $(this).find('.leftDirection').bind('mouseover', leftMouseover),
            rightMouseover: $(this).find('.rightDirection').bind('mouseover', rightMouseover),
            leftMouseup: $(this).find('.leftDirection').bind('mouseup', leftMouseup),
            rightMouseup: $(this).find('.rightDirection').bind('mouseup', rightMouseup),
            leftMouseout: $(this).find('.leftDirection').bind('mouseout', mouseout),
            rightMouseout: $(this).find('.rightDirection').bind('mouseout', mouseout),
            imageClick:  $(this).find('.slider img').on('click', imageClick)
        }

        /*==================================main functions for click====================*/

        function leftMouseover(){
            $.fn.ccCarousel.stop($.fn.ccCarousel.defaults.slider);
            var leftHover = $.fn.ccCarousel.defaults.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if(leftMarginHover !=0 ){
                 $.fn.ccCarousel.defaults.slider.animate({'left': 0},$.fn.ccCarousel.defaults.hoverTimer);
            }
        }

        function leftMouseup(){
            var leftHover = $.fn.ccCarousel.defaults.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if(leftMarginHover !=0 ){
                 $.fn.ccCarousel.defaults.slider.animate({'left': 0},$.fn.ccCarousel.defaults.hoverTimer);
            }
        }        

        /*================================Functions that control slider when hovered==============================*/

        function rightMouseover(){
            $.fn.ccCarousel.stop($.fn.ccCarousel.defaults.slider);
            var rightHover = $.fn.ccCarousel.defaults.slider.css('left');
            var rightMarginHover = parseInt(rightHover);

            $.fn.ccCarousel.defaults.slider.animate({'left': '-' + $.fn.ccCarousel.defaults.addition},$.fn.ccCarousel.defaults.hoverTimer);
        }

        function rightMouseup(){
            var rightHover = $.fn.ccCarousel.defaults.slider.css('left');
            var rightMarginHover = parseInt(rightHover);

            $.fn.ccCarousel.defaults.slider.animate({'left': '-' + $.fn.ccCarousel.defaults.addition},$.fn.ccCarousel.defaults.hoverTimer);
        }

        function mouseout(){
            $.fn.ccCarousel.stop($.fn.ccCarousel.defaults.slider);
        }

        /*=========================================part for Images that contain links==================================================*/

        function imageClick(){
            if ($(this).attr('rel') == 1) {
                window.open($(this).attr('alt'), '_blank');
            }
            else {
                window.location = $(this).attr('alt');
            }
        }
        return $(this);
    };

    $.fn.ccCarousel.stop = function(slider){
        slider.stop();
    }

    $.fn.ccCarousel.moveToRight = function(){
        $.fn.ccCarousel.stop($.fn.ccCarousel.defaults.slider);
        var right = $.fn.ccCarousel.defaults.slider.css('left');
        var rightMargin = parseInt(right);

        var customStep = $.fn.ccCarousel.defaults.addition+rightMargin;
        //alert(customStep);                
        if(customStep >= $.fn.ccCarousel.defaults.clickStep){
            $.fn.ccCarousel.defaults.slider.animate({'left': rightMargin - $.fn.ccCarousel.defaults.clickStep},$.fn.ccCarousel.defaults.clickTimer);
        }
        else{
            $.fn.ccCarousel.defaults.slider.animate({'left': '-' + $.fn.ccCarousel.defaults.addition},$.fn.ccCarousel.defaults.clickTimer);
        }        
    }

    $.fn.ccCarousel.moveToLeft = function(){
        $.fn.ccCarousel.stop($.fn.ccCarousel.defaults.slider);
        var left = $.fn.ccCarousel.defaults.slider.css('left');
        var leftMargin = parseInt(left);

        if(leftMargin <= '-'+$.fn.ccCarousel.defaults.clickStep){
            $.fn.ccCarousel.defaults.slider.animate({'left': leftMargin + $.fn.ccCarousel.defaults.clickStep},$.fn.ccCarousel.defaults.clickTimer);
        }
        else{
            $.fn.ccCarousel.defaults.slider.animate({'left': 0},$.fn.ccCarousel.defaults.clickTimer);
        }
    }

    $.fn.ccCarousel.defaults = {
        clickTimer:250,        //setTimeout for click
        hoverTimer: 7000,        //setTimeout for hover
        imageWidth: 330
    }

}(window, jQuery));//end of dom load