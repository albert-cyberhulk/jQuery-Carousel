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

    var settings = $.extend(defaults, $.fn.ccCarousel.defaults, options);

    function initConfig() {
      settings.customWidth = $('.slider div').length * (settings.imageWidth < 50 ? 50 : settings.imageWidth); //the length of the slider div depending on the count of images
      settings.sliderWidth = settings.customWidth; //slider width in pixels
      settings.addition = settings.customWidth - settings.wrapperWidth; //the differennce between monitor reslutions
      settings.clickStep = settings.customWidth / parseInt(settings.sliderLength);
      settings.slider.width(settings.sliderWidth); //initializing the slider width
    }

    /*==================================main functions for click====================*/

    function moveToLeft() {
      settings.slider.stop();
      var left = settings.slider.css('left');
      var leftMargin = parseInt(left);

      if (leftMargin <= '-' + settings.clickStep) {
        settings.slider.animate({'left': leftMargin + settings.clickStep}, settings.clickTimer);
      }
      else {
        settings.slider.animate({'left': 0}, settings.clickTimer);
      }
    }

    function moveToRight() {
      settings.slider.stop();
      var right = settings.slider.css('left');
      var rightMargin = parseInt(right);

      var customStep = settings.addition + rightMargin;
      //alert(customStep);
      if (customStep >= settings.clickStep) {
        settings.slider.animate({'left': rightMargin - settings.clickStep}, settings.clickTimer);
      }
      else {
        settings.slider.animate({'left': '-' + settings.addition}, settings.clickTimer);
      }
    }

    function stop() {
      settings.slider.stop();
    }

    function leftMouseover() {
      settings.slider.stop();
      var leftHover = settings.slider.css('left');
      var leftMarginHover = parseInt(leftHover);

      if (leftMarginHover != 0) {
        settings.slider.animate({'left': 0}, settings.hoverTimer);
      }
    }

    function leftMouseup() {
      var leftHover = settings.slider.css('left');
      var leftMarginHover = parseInt(leftHover);

      if (leftMarginHover != 0) {
        settings.slider.animate({'left': 0}, settings.hoverTimer);
      }
    }

    /*================================Functions that control slider when hovered==============================*/

    function rightMouseover() {
      settings.slider.stop();
      var rightHover = settings.slider.css('left');
      var rightMarginHover = parseInt(rightHover);

      settings.slider.animate({'left': '-' + settings.addition}, settings.hoverTimer);
    }

    function rightMouseup() {
      var rightHover = settings.slider.css('left');
      var rightMarginHover = parseInt(rightHover);

      settings.slider.animate({'left': '-' + settings.addition}, settings.hoverTimer);
    }

    function mouseout() {
      settings.slider.stop();
    }

    /*=========================================part for Images that contain links==================================================*/

    function imageClick() {
      if ($(this).attr('rel') == 1) {
        window.open($(this).attr('alt'), '_blank');
      }
      else {
        window.location = $(this).attr('alt');
      }
    }

    function bindEvents() {
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

}(window, jQuery));//end of dom load