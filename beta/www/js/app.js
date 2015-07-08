// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) { cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true); }
        if(window.StatusBar) { StatusBar.styleDefault(); }
    })
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://youtube.com/**'])
    // $ionicConfigProvider.views.transition('none')
    $stateProvider

    // the default route provider for the things that will never change on the page
    .state('navigator', {
        url: '',
        abstract: true,
        templateUrl: 'templates/shell.html',
        controller: 'ViewController'
    })
    // route for the home page
    .state('navigator.home', {
        url: '/home',
        views: {
            'home': {
                templateUrl: 'templates/home.html',
                controller: 'ViewController'
            }
        }
    })
    // route for the tutorial center
    .state('navigator.tc', {
        url: '/tutorial-center',
        views: {
            'home': {
                templateUrl: 'templates/tc.html',
            }
        }
    })
    // route for the wrting and reading center
    .state('navigator.wrc', {
        url: '/writing-reading-center',
        views: {
            'home': {
                templateUrl: 'templates/wrc.html',
            }
        }
    })
    // route for ETC
    .state('navigator.etc', {
        url: '/extending-the-class',
        views: {
            'home': {
                templateUrl: 'templates/etc.html',
            }
        }
    })
    // route for PASS
    .state('navigator.pass', {
        url: '/pass',
        views: {
            'home': {
                templateUrl: 'templates/pass.html',
            }
        }
    })
    // route for finding a tutor
    .state('navigator.search', {
        url: '/search',
        views: {
            'home': {
                templateUrl: 'templates/search.html',
            }
        }
    })
    // route for become a tutor
    .state('navigator.application', {
        url: '/become-a-tutor',
        views: {
            'home': {
                templateUrl: 'templates/tutor-application.html',
            }
        }
    })
    // route for the calendar
    .state('navigator.calendar', {
        url: '/calendar',
        views: {
            'home': {
                templateUrl: 'templates/calendar.html',
            }
        }
    })
    // route for online tutoring
    .state('navigator.online-tutoring', {
        url: '/online-tutoring',
        views: {
            'home': {
                templateUrl: 'templates/online-tutoring.html',
            }
        }
    })
    // route for the educational resources
    .state('navigator.resources', {
        url: '/resources',
        views: {
            'home': {
                templateUrl: 'templates/resources.html',
            }
        }
    })
    $urlRouterProvider.otherwise('/home')
})
