'use strict';

QUnit.test('plugin instance should be initialized ', function (assert) {
    var instance = $('.galleryWrapper').ccCarousel({});
    assert.equal(instance.length, 1, "plugin instance initialized successful");
});

QUnit.module('plugin functionalities', function (hook) {
    hook.before(function () {
        $('.galleryWrapper').ccCarousel({});
        this.left = $('.galleryWrapper').find('.leftDirection');
        this.right = $('.galleryWrapper').find('.rightDirection');
        this.slider = $('.galleryWrapper').find('.slider');
        $.fn.ccCarousel.defaults.hoverTimer = 0;
    });

    hook.beforeEach(function () {
        this.slider.css({left: 0});
    });

    QUnit.module('init data', function () {
        QUnit.test('defaults data', function (assert) {
            assert.equal(0, $.fn.ccCarousel.defaults.hoverTimer, 'plugin defaults data initialized successful');
        });

        QUnit.test('init configuration', function (assert) {
            $('.galleryWrapper').ccCarousel({imageWidth: 120});
            var customWidth = 1680 / $('.slider div').length;
            assert.equal(120, customWidth, 'configuration initialized successful');
        });
    });

    QUnit.module('public methods', function () {
        QUnit.test('moveToLeft method', function (assert) {
            assert.equal($(this.left)[0], $.fn.ccCarousel.moveToLeft.call($(this.left))[0], 'moves slider to left method initialized successful');
        });

        QUnit.test('moveToRight method', function (assert) {
            assert.equal($(this.right)[0], $.fn.ccCarousel.moveToRight.call($(this.right))[0], 'moves slider to right method initialized successful');
        });

        QUnit.test('stop method', function (assert) {
            assert.equal($(this.left)[0], $.fn.ccCarousel.stop.call($(this.left))[0], 'stops the slider method initialized successful');
        });
    });

    QUnit.module('private methods', function () {
        QUnit.test('leftMouseover', function (assert) {
            var done = assert.async();
            var slider = $('.galleryWrapper').find('.slider');
            this.left.on('mouseover', function () {
                slider.animate({left: 20}, $.fn.ccCarousel.defaults.hoverTimer);
            });
            this.left.mouseover();
            setTimeout(function () {
                assert.equal('20px', slider.css('left'), 'leftMouseover event initialized successful');
                done();
            }, 500);
        });

        QUnit.test('rightMouseover', function (assert) {
            var done = assert.async();
            var slider = $('.galleryWrapper').find('.slider');
            this.right.on('mouseover', function () {
                slider.animate({left: 50}, $.fn.ccCarousel.defaults.hoverTimer);
            });
            this.right.mouseover();
            setTimeout(function () {
                assert.equal('50px', slider.css('left'), 'leftMouseover event initialized successful');
                done();
            }, 500);
        });

        QUnit.test('leftMouseup', function (assert) {
            var done = assert.async();
            var slider = $('.galleryWrapper').find('.slider');
            this.left.on('mouseup', function () {
                slider.animate({left: 150}, $.fn.ccCarousel.defaults.hoverTimer);
            });
            this.left.mouseup();
            setTimeout(function () {
                assert.equal('150px', slider.css('left'), 'leftMouseup event initialized successful');
                done();
            }, 500);
        });

        QUnit.test('rightMouseup', function (assert) {
            var done = assert.async();
            var slider = $('.galleryWrapper').find('.slider');
            this.left.on('mouseup', function () {
                slider.animate({left: 550}, $.fn.ccCarousel.defaults.hoverTimer);
            });
            this.left.mouseup();
            setTimeout(function () {
                assert.equal('550px', slider.css('left'), 'rightMouseup event initialized successful');
                done();
            }, 500);
        });

        QUnit.test('mouseout', function (assert) {
            assert.ok(this.slider.stop, 'stop the slider initialized successful');
        });

        QUnit.test('image click method', function (assert) {
            var image = $('img').attr('src');
            assert.ok(image, 'slider image initialized successful');
        });
    });
});
