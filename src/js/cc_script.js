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
            slider: $('.slider'), //dynamic div
            sliderArray: $('.slider div'), //array of images in the slider
            wrapperWidth: $('.galleryWrapper').width(), //initializing the wrapper gallery width
            dynamicWidth: $('.dynamic').width(), //initializing the dynamic wrapper width
            sliderLength: $('.slider div').length // count of images in the slider
        }

        var settings = $.extend(defaults,  $.fn.ccCarousel.defaults, options);

        settings.customWidth = $('.slider div').length * (settings.imageWidth < 50 ? 50 : settings.imageWidth); //the length of the slider div depending on the count of images
        settings.sliderWidth = settings.customWidth; //slider width in pixels     
        settings.addition = settings.customWidth - settings.wrapperWidth; //the differennce between monitor reslutions       
        settings.clickStep = settings.customWidth / parseInt(settings.sliderLength);
        settings.slider.width(settings.sliderWidth); //initializing the slider width

        /*==================================main functions for click====================*/

        function moveToLeft(){
            settings.slider.stop();
            var left = settings.slider.css('left');
            var leftMargin = parseInt(left);

            if(leftMargin <= '-' + settings.clickStep){
                settings.slider.animate({'left': leftMargin + settings.clickStep}, settings.clickTimer);
            }
            else{
                settings.slider.animate({'left': 0}, settings.clickTimer);
            }
        }

        function moveToRight(){
            settings.slider.stop();
            var right = settings.slider.css('left');
            var rightMargin = parseInt(right);

            var customStep = settings.addition + rightMargin;
            //alert(customStep);                
            if(customStep >= settings.clickStep){
                settings.slider.animate({'left': rightMargin - settings.clickStep}, settings.clickTimer);
            }
            else{
                settings.slider.animate({'left': '-' + settings.addition}, settings.clickTimer);
            }
        }

        function stop(){
            settings.slider.stop();
        }

        function leftMouseover(){
            settings.slider.stop();
            var leftHover = settings.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if(leftMarginHover !=0 ){
                 settings.slider.animate({'left': 0}, settings.hoverTimer);
            }
        }

        function leftMouseup(){
            var leftHover = settings.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if(leftMarginHover !=0 ){
                 settings.slider.animate({'left': 0}, settings.hoverTimer);
            }
        }        

        /*================================Functions that control slider when hovered==============================*/

        function rightMouseover(){
            settings.slider.stop();
            var rightHover = settings.slider.css('left');
            var rightMarginHover = parseInt(rightHover);

            settings.slider.animate({'left': '-' + settings.addition}, settings.hoverTimer);
        }

        function rightMouseup(){
            var rightHover = settings.slider.css('left');
            var rightMarginHover = parseInt(rightHover);

            settings.slider.animate({'left': '-' + settings.addition}, settings.hoverTimer);
        }

        function mouseout(){
            settings.slider.stop();
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

        function bindEvents(elem){
            elem.find('.leftDirection').on('mousedown', moveToLeft);
            elem.find('.rightDirection').on('mousedown', moveToRight);
            elem.find('.leftDirection').bind('mouseover', leftMouseover);
            elem.find('.rightDirection').bind('mouseover', rightMouseover);
            elem.find('.leftDirection').bind('mouseup', leftMouseup);
            elem.find('.rightDirection').bind('mouseup', rightMouseup);
            elem.find('.leftDirection').bind('mouseout', mouseout);
            elem.find('.rightDirection').bind('mouseout', mouseout);
            elem.find('.slider img').on('click', imageClick);        
        }

        bindEvents($(this));

        $.fn.ccCarousel.moveToLeft = moveToLeft;
        $.fn.ccCarousel.moveToRight = moveToRight;
        $.fn.ccCarousel.stop = stop;

        return $(this);
    };

    $.fn.ccCarousel.defaults = {
            clickTimer:250, //setTimeout for click
            hoverTimer: 7000, //setTimeout for hover
            imageWidth: 330
    }

}(window, jQuery));//end of dom load