angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);

    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.dash', {
    url: '/chats',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/dash',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'MapCtrl'
        }
      }
    });

    $stateProvider
      .state('congratulations', {
      url: '/congratulations',
      templateUrl: 'templates/congratulations.html'
    });

    $stateProvider
      .state('loggedin', {
      url: '/loggedin',
      templateUrl: 'templates/welcome.html'
    });

    $stateProvider
      .state('addlocations', {
      url: '/addlocations',
      templateUrl: 'templates/add-locations.html'
    });

  $urlRouterProvider.otherwise('/tab/dash');

});
