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

.config(function($stateProvider, $urlRouterProvider) {
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
    $urlRouterProvider.otherwise('/home')
})
