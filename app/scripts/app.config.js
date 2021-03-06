(function () {
    'use strict';
    angular.module('vsCodeAngularTypeScriptApp').config(config);
    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        }).when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }
})();
//# sourceMappingURL=app.config.js.map