QUnit.test('plugin instance should be initialized ', function (assert) {
    var instance = $('.galleryWrapper').ccCarousel({});
    assert.equal(instance.length, 1, "plugin instance initialized successful");
});