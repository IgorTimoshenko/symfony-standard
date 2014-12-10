requirejs.config({
    baseUrl: 'app'
});

require([
    'src/app',
    'src/config'
], function (App, config) {
    App.start(config);
});
