(function (Quint) {
    module("Basic Tests");

    Qunit.test("truthy", function () {
        ok(true, "true is truthy");
        equal(1, true, "1 is truthy");
        notEqual(0, true, "0 is NOT truthy");
    });
}(Qunit));
