angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])
.constant('FIREBASE_URL', 'https://fccwise-search.firebaseio.com/')
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) { cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true); }
        if(window.StatusBar) { StatusBar.styleDefault(); }
    })
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $sceDelegateProvider) {
    // de-enforce iframe protection from known sources.
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://youtube.com/**'])
    // initialize our routes
    // all of these branch from the home page, so leave 'home' as the view since we aren't dealing with multiple views
    $stateProvider
    .state('navigator', { // the default route provider for the things that will never change on the page
        url: '',
        abstract: true,
        templateUrl: 'templates/shell.html',
        controller: 'ViewController'
    })
    .state('navigator.home', { // route for the home page
        url: '/home',
        views: {
            'home': {
                templateUrl: 'templates/home.html',
                controller: 'ViewController'
            }
        }
    })
    .state('navigator.tc', { // routes for the tutorial center
        url: '/tutorial-center',
        views: {
            'home': {
                templateUrl: 'templates/tc.html',
            }
        }
    })
    .state('navigator.staff', {
        url: '/tutorial-center/meet-staff',
        views: {
            'home': {
                templateUrl: 'templates/meet-staff.html'
            }
        }
    })
    .state('navigator.wrc', { // route for the wrting and reading center
        url: '/writing-reading-center',
        views: {
            'home': {
                templateUrl: 'templates/wrc.html',
            }
        }
    })
    .state('navigator.etc', { // route for ETC
        url: '/extending-the-class',
        views: {
            'home': {
                templateUrl: 'templates/etc.html',
            }
        }
    })
    .state('navigator.pass', { // route for PASS
        url: '/pass',
        views: {
            'home': {
                templateUrl: 'templates/pass.html',
            }
        }
    })
    .state('navigator.search', { // route for finding a tutor
        url: '/search',
        views: {
            'home': {
                templateUrl: 'templates/search.html',
            }
        }
    })
    .state('navigator.application', { // route for become a tutor
        url: '/become-a-tutor',
        views: {
            'home': {
                templateUrl: 'templates/tutor-application.html',
            }
        }
    })
    .state('navigator.calendar', { // route for the calendar
        url: '/calendar',
        views: {
            'home': {
                templateUrl: 'templates/calendar.html',
            }
        }
    })
    .state('navigator.resources', { // route for the educational resources
        url: '/resources',
        views: {
            'home': {
                templateUrl: 'templates/resources.html',
            }
        }
    })
    .state('navigator.addTutor', { // route for adding tutors
        url: '/addtutor',
        views: {
            'home': {
                templateUrl: 'templates/addtutor.html'
            }
        }
    })
    $urlRouterProvider.otherwise('/home')
})

.factory('GetData', function($firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL)
    return $firebaseArray(ref)
})
