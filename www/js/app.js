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
  /*
  最开始建立的基准的state,是一个会随着其他dot之后的内容一起走的.
   */
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
    /*
    state 的第一个小分支
    #1: log-in
     */
  .state('tab.login', {
    url: '/1-log-in',
    views: {
      'tab-login': {
        templateUrl: 'templates/1-log-in.html',
        controller: 'LoginCtrl'//need to be changed to LoginCtrl
      }
    }
  })
  /*
    state 的第二个小分支
    #7: parking-map
     */
  .state('tab.parkingmap', {
      url: '/7-parking-map',
      views: {
        'tab-parkingmap': {
          templateUrl: 'templates/7-parking-map.html',
          controller: 'MapCtrl'
        }
      }
    });

    /*
    一个state对应着一个路径, 也对应着一个页面
    #6: personal settings
     */
    $stateProvider
      .state('congratulations', {
      url: '/6-personal-setting',
      templateUrl: 'templates/6-personal-setting.html'
    });

    /*
    #2: home-page
     */
    $stateProvider
      .state('homepage', {
      url: '/2-home-page',
      templateUrl: 'templates/2-home-page.html'
    });

    /*
    #4: home-address
     */
    $stateProvider
      .state('homeaddress', {
      url: '/4-home-address',
      templateUrl: 'templates/4-home-address.html'
    });

  /*
  定义默认的路径
   */
  $urlRouterProvider.otherwise('/tab/1-log-in');

});
