/*Javascript document that contains all cooperation with jQuery library
 * Triggers animation effect
 * Cyberhulk_Carousel
 * author Albert Stepanyan
 * Date 09.12.11
 */

(function (window, $) {

    var bindEvent = (function(){
            var onMouseDownLeft = function(){
                settings.slider.stop();
                var left = settings.slider.css('left');
                var leftMargin = parseInt(left);
    
                if(leftMargin <= '-'+settings.clickStep){
                    settings.slider.animate({'left': leftMargin + settings.clickStep},settings.clickTimer);
                }
                else{
                    settings.slider.animate({'left': 0},settings.clickTimer);
                }
            };
            var onMouseDownRight = function(){
                settings.slider.stop();
                var right = settings.slider.css('left');
                var rightMargin = parseInt(right);
    
                var customStep = settings.addition+rightMargin;
                //alert(customStep);                
                if(customStep >= settings.clickStep){
                    settings.slider.animate({'left': rightMargin - settings.clickStep},settings.clickTimer);
                }
                else{
                    settings.slider.animate({'left': '-' + settings.addition},settings.clickTimer);
                }
            };
            var onMouseStop = function(){
                settings.slider.stop();
            }
            return{
                onMouseDownLeft: onMouseDownLeft,
                onMouseDownRight: onMouseDownRight,
                onMouseStop: onMouseStop
            }
        })();

    var settings = {};

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

        settings = $.extend(defaults,  $.fn.ccCarousel.defaults, options);

        defaults.customWidth = $('.slider div').length * (defaults.imageWidth < 50 ? 50 : defaults.imageWidth);    //the length of the slider div depending on the count of images
        defaults.sliderWidth = defaults.customWidth;        //slider width in pixels     
        defaults.addition = defaults.customWidth - defaults.wrapperWidth;        //the differennce between monitor reslutions       
        defaults.clickStep = defaults.customWidth / parseInt(defaults.sliderLength);
        defaults.slider.width(defaults.sliderWidth);        //initializing the slider width

        $(this).find('.leftDirection').bind('mousedown', $.fn.ccCarousel.moveToLeft);
        $(this).find('.rightDirection').bind('mousedown', $.fn.ccCarousel.moveToRight);
        $(this).find('.leftDirection').bind('mouseover', leftMouseover);
        $(this).find('.rightDirection').bind('mouseover', rightMouseover);
        $(this).find('.leftDirection').bind('mouseup', leftMouseup);
        $(this).find('.rightDirection').bind('mouseup', rightMouseup);
        $(this).find('.leftDirection').bind('mouseout', mouseout);
        $(this).find('.rightDirection').bind('mouseout', mouseout);
        $(this).find('.slider img').on('click', imageClick);
        

        /*==================================main functions for click====================*/

        function leftMouseover(){
            $.fn.ccCarousel.stop(settings.slider);
            var leftHover = settings.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if(leftMarginHover !=0 ){
                 settings.slider.animate({'left': 0},settings.hoverTimer);
            }
        }

        function leftMouseup(){
            var leftHover = settings.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if(leftMarginHover !=0 ){
                 settings.slider.animate({'left': 0},settings.hoverTimer);
            }
        }        

        /*================================Functions that control slider when hovered==============================*/

        function rightMouseover(){
            $.fn.ccCarousel.stop(settings.slider);
            var rightHover = settings.slider.css('left');
            var rightMarginHover = parseInt(rightHover);

            settings.slider.animate({'left': '-' + settings.addition},settings.hoverTimer);
        }

        function rightMouseup(){
            var rightHover = settings.slider.css('left');
            var rightMarginHover = parseInt(rightHover);

            settings.slider.animate({'left': '-' + settings.addition},settings.hoverTimer);
        }

        function mouseout(){
            $.fn.ccCarousel.stop(settings.slider);
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

    $.fn.ccCarousel.defaults = {
        clickTimer:250,        //setTimeout for click
        hoverTimer: 7000,        //setTimeout for hover
        imageWidth: 330
    }

    $.fn.ccCarousel.stop = bindEvent.onMouseStop;

    $.fn.ccCarousel.moveToRight = bindEvent.onMouseDownRight;

    $.fn.ccCarousel.moveToLeft = bindEvent.onMouseDownLeft;

}(window, jQuery));//end of dom load