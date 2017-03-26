/*Javascript document that contains all cooperation with jQuery library
 * Triggers animation effect
 * Cyberhulk_Carousel
 * author Albert Stepanyan
 * Date 09.12.11
 */

'use strict';

(function (window, $) {

    $.fn.ccCarousel = function (options) {

        options = $.isPlainObject(options) ? options : {};

        /*================================Configurations==============================*/

        var defaults = {
            slider: $('.slider'), //dynamic div
            sliderArray: $('.slider div'), //array of images in the slider
            wrapperWidth: $('.galleryWrapper').width(), //initializing the wrapper gallery width
            dynamicWidth: $('.dynamic').width() //initializing the dynamic wrapper width
        };

        var settings = $.extend(defaults, $.fn.ccCarousel.defaults, options);

        function initConfig() {
            settings.sliderLength = settings.sliderArray.length; // count of images in the slider
            settings.customWidth = settings.sliderLength * (settings.imageWidth < 50 ? 50 : settings.imageWidth); //the length of the slider div depending on the count of images
            settings.sliderWidth = settings.customWidth; //slider width in pixels
            settings.addition = settings.customWidth - settings.wrapperWidth; //the differennce between monitor reslutions
            settings.clickStep = settings.customWidth / parseInt(settings.sliderLength);
            settings.slider.width(settings.sliderWidth); //initializing the slider width
        }

        /*==================================main functions for click====================*/

        function stop() {
            settings.slider.stop(true);
            return $(this);
        }

        function animate(params, delay) {
            settings.slider.animate(params, delay);
        }

        function moveToLeft() {
            stop();
            var left = settings.slider.css('left');
            var leftMargin = parseInt(left);

            if (leftMargin <= -settings.clickStep) {
                animate({left: leftMargin + settings.clickStep}, settings.clickTimer);
            } else {
                animate({left: 0}, settings.clickTimer);
            }

            return $(this);
        }

        function moveToRight() {
            stop();
            var right = settings.slider.css('left');
            var rightMargin = parseInt(right);

            var customStep = settings.addition + rightMargin;

            if (customStep >= settings.clickStep) {
                animate({left: rightMargin - settings.clickStep}, settings.clickTimer);
            } else {
                animate({left: -settings.addition}, settings.clickTimer);
            }

            return $(this);
        }

        function leftMouseover() {
            stop();
            var leftHover = settings.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if (leftMarginHover !== 0) {
                animate({left: 0}, settings.hoverTimer);
            }
        }

        function leftMouseup() {
            var leftHover = settings.slider.css('left');
            var leftMarginHover = parseInt(leftHover);

            if (leftMarginHover !== 0) {
                animate({left: 0}, settings.hoverTimer);
            }
        }

        /*================================Functions that control slider when hovered==============================*/

        function rightMouseover() {
            settings.slider.stop();
            animate({left: -settings.addition}, settings.hoverTimer);
        }

        function rightMouseup() {
            animate({left: -settings.addition}, settings.hoverTimer);
        }

        function mouseout() {
            stop();
        }

        /*=========================================part for Images that contain links==================================================*/

        function imageClick() {
            /*jshint validthis: true */
            if ($(this).attr('src')) {
                window.open($(this).attr('src'), '_blank');
            } else {
                window.location = $(this).attr('alt');
            }
        }

        function bindEvents() {
            /*jshint validthis: true */
            $(this).find('.leftDirection').on('mousedown', moveToLeft);
            $(this).find('.rightDirection').on('mousedown', moveToRight);
            $(this).find('.leftDirection').bind('mouseover', leftMouseover);
            $(this).find('.rightDirection').bind('mouseover', rightMouseover);
            $(this).find('.leftDirection').bind('mouseup', leftMouseup);
            $(this).find('.rightDirection').bind('mouseup', rightMouseup);
            $(this).find('.leftDirection').bind('mouseout', mouseout);
            $(this).find('.rightDirection').bind('mouseout', mouseout);
            $(this).find('.slider img').on('click', imageClick);
        }

        initConfig();
        bindEvents.call(this);

        $.fn.ccCarousel.moveToLeft = moveToLeft;
        $.fn.ccCarousel.moveToRight = moveToRight;
        $.fn.ccCarousel.stop = stop;

        return $(this);
    };

    $.fn.ccCarousel.defaults = {
        clickTimer: 250, //setTimeout for click
        hoverTimer: 7000, //setTimeout for hover
        imageWidth: 330
    }

}(window, jQuery));
