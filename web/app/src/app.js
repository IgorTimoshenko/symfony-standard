define([
], function () {
    'use strict';

    var App = {};

    App.start = function (config) {
        console.log('Hello, ' + config.user.username + '!');
    };

    window.App = App;

    return App;
});
