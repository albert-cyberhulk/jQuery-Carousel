'use strict';

QUnit.test('plugin instance should be initialized ', function (assert) {
    var instance = $('.galleryWrapper').ccCarousel({});
    assert.equal(instance.length, 1, "plugin instance initialized successful");
});

QUnit.test('defaults data', function (assert) {
    $.fn.ccCarousel.defaults.hoverTimer = 0;
    assert.equal(0, $.fn.ccCarousel.defaults.hoverTimer, 'plugin defaults data initialized successful');
});

QUnit.test('moveToLeft method', function (assert) {
    var elem = $('<div class="test"></div>');
    assert.equal($(elem)[0], $.fn.ccCarousel.moveToLeft.call($(elem))[0], 'moves slider to left method initialized successful');
});

QUnit.test('moveToRight method', function (assert) {
    var elem = $('<div class="test"></div>');
    assert.equal($(elem)[0], $.fn.ccCarousel.moveToRight.call($(elem))[0], 'moves slider to right method initialized successful');
});

QUnit.test('stop method', function (assert) {
    var elem = $('<div class="test"></div>');
    assert.equal($(elem)[0], $.fn.ccCarousel.stop.call($(elem))[0], 'stops the slider method initialized successful');
});

QUnit.test('leftMouseover', function (assert) {
    var done = assert.async();
    $('.galleryWrapper').ccCarousel({});
    var slider = $('.galleryWrapper').find('.slider');
    var leftMouseover = $('.galleryWrapper').find('.leftDirection');
    leftMouseover.on('mouseover', function () {
        slider.animate({left: 20}, $.fn.ccCarousel.defaults.hoverTimer);
    });
    leftMouseover.mouseover();
    setTimeout(function () {
        assert.equal('20px', slider.css('left'), 'leftMouseover event initialized successful');
        slider.css({left: 0});
        done();
    }, 500);
});

QUnit.test('rightMouseover', function (assert) {
    var done = assert.async();
    $('.galleryWrapper').ccCarousel({});
    var slider = $('.galleryWrapper').find('.slider');
    var rightMouseover = $('.galleryWrapper').find('.rightDirection');
    rightMouseover.on('mouseover', function () {
        slider.animate({left: 20}, $.fn.ccCarousel.defaults.hoverTimer);
    });
    rightMouseover.mouseover();
    setTimeout(function () {
        assert.equal('20px', slider.css('left'), 'leftMouseover event initialized successful');
        slider.css({left: 0});
        done();
    }, 500);
});

QUnit.test('leftMouseup', function (assert) {
    var done = assert.async();
    $('.galleryWrapper').ccCarousel({});
    var slider = $('.galleryWrapper').find('.slider');
    var leftMouseup = $('.galleryWrapper').find('.leftDirection');
    leftMouseup.on('mouseup', function () {
        slider.animate({left: 150}, $.fn.ccCarousel.defaults.hoverTimer);
    });
    leftMouseup.mouseup();
    setTimeout(function () {
        assert.equal('150px', slider.css('left'), 'leftMouseup event initialized successful');
        slider.css({left: 0});
        done();
    }, 500);
});

QUnit.test('rightMouseup', function (assert) {
    var done = assert.async();
    $('.galleryWrapper').ccCarousel({});
    var slider = $('.galleryWrapper').find('.slider');
    var rightMouseup = $('.galleryWrapper').find('.leftDirection');
    rightMouseup.on('mouseup', function () {
        slider.animate({left: 550}, $.fn.ccCarousel.defaults.hoverTimer);
    });
    rightMouseup.mouseup();
    setTimeout(function () {
        assert.equal('550px', slider.css('left'), 'rightMouseup event initialized successful');
        slider.css({left: 0});
        done();
    }, 500);
});

QUnit.test('imageClick', function (assert) {
    var image = $('img').attr('src');
    assert.ok(image, 'slider image initialized successful');
});

QUnit.test('mouseout', function (assert) {
    var slider = $('.galleryWrapper').find('.slider');
    assert.ok(slider.stop, 'stop the slider initialized successful');
});

QUnit.test('initConfig', function (assert) {
    $('.galleryWrapper').ccCarousel({imageWidth: 120});
    var customWidth = 1680 / $('.slider div').length;
    assert.equal(120, customWidth, 'configuration initialized successful');
});

QUnit.test('bindEvents', function (assert) {
    var event = $('.galleryWrapper').find('.leftDirection').on('mousedown', $.fn.ccCarousel.moveToLeft)[0];
    assert.equal($('.galleryWrapper').find('.leftDirection')[0], event, 'events initialized successful');
});