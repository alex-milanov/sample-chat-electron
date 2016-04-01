angular
  .module(DEFAULT.PKG(), [

    // Angular framework modules
    'ngRoute',

    // Custom
    // DEFAULT.PKG('user'),

  ])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider

    /*
     * The home route
     */
      .when('/', {
        templateUrl: './app/views/home.html',
        controller: 'HomeCtrl'
      })

      /*
       * The otherwise route (aka. 404)
       */
      .otherwise('/', {

        templateUrl: './app/views/home.html',
        controller: 'HomeCtrl'

      });

  }).controller('BodyCtrl', ['$rootScope', '$location', '$timeout',

  function ($rootScope, $location, $timeout) {

    //$rootScope.$User = $User;

    /**
     * Gets current angular route or navigate to a new route, if supplied as first argument.
     *
     * @type {Function}
     *
     * @param [p] The destination route
     * @returns {String} The current route after all pending navigation
     */
    $rootScope.path = function (p) {
      return $location.path(p);
    };

  }]);