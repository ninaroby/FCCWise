angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])
.constant('FIREBASE_URL', 'https://fccwise-search.firebaseio.com/')
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) { cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true); }
        if(window.StatusBar) { StatusBar.styleDefault(); }
    });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://youtube.com/**']);
    $stateProvider
    .state('navigator', {
        url: '',
        abstract: true,
        templateUrl: 'templates/shell.html',
        controller: 'ViewController'
    })
    .state('navigator.home', {
        url: '/home',
        views: {
            'home': {
                templateUrl: 'templates/home.html',
                controller: 'ViewController'
            }
        }
    })
    .state('navigator.tc', {
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
        .state('navigator.math-prep', {
        url: '/tutorial-center/math-test-prep',
        views: {
            'home': {
                templateUrl: 'templates/math-test-prep.html'
            }
        }
    })
    .state('navigator.tcsearch', {
        url: '/tutorial-center/search',
        views: {
            'home': {
                templateUrl: 'templates/engine.html',
                controller: 'ViewController'
            }
        }
    })
    .state('navigator.wrc', {
        url: '/writing-reading-center',
        views: {
            'home': {
                templateUrl: 'templates/wrc.html',
            }
        }
    })
    .state('navigator.etc', {
        url: '/extending-the-class',
        views: {
            'home': {
                templateUrl: 'templates/etc.html',
            }
        }
    })
    .state('navigator.etcsearch', {
        url: '/extending-the-class/search',
        views: {
            'home': {
                templateUrl: 'templates/engine.html',
                controller: 'ViewController'
            }
        }
    })
    .state('navigator.pass', {
        url: '/pass',
        views: {
            'home': {
                templateUrl: 'templates/pass.html',
            }
        }
    })
    .state('navigator.success-pass', {
        url: '/pass/success-pass',
        views: {
            'home': {
                templateUrl: 'templates/success-pass.html',
            }
        }
    })
    .state('navigator.search', {
        url: '/search',
        views: {
            'home': {
                templateUrl: 'templates/search.html',
            }
        }
    })
    .state('navigator.application', {
        url: '/become-a-tutor',
        views: {
            'home': {
                templateUrl: 'templates/tutor-application.html',
            }
        }
    })
    .state('navigator.calendar', {
        url: '/calendar',
        views: {
            'home': {
                templateUrl: 'templates/calendar.html',
            }
        }
    })
    .state('navigator.resources', {
        url: '/resources',
        views: {
            'home': {
                templateUrl: 'templates/resources.html',
            }
        }
    })
    .state('navigator.addTutor', {
        url: '/addtutor',
        views: {
            'home': {
                templateUrl: 'templates/addtutor.html',
                controller: 'ViewController'
            }
        }
    });
    $urlRouterProvider.otherwise('/home');
})
.factory('GetData', function($firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseArray(ref);
});
