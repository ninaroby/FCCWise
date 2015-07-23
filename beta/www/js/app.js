angular.module('starter', ['ionic', 'firebase'])
.constant('FIREBASE_URL', 'https://fccwise-search.firebaseio.com/')
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) { cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true); }
        if(window.StatusBar) { StatusBar.styleDefault(); }
    });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://youtube.com/**']);
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://fccwise.fresnocitycollege.edu/**']);
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
.controller('ViewController', function($scope, $http, $ionicModal, $ionicHistory, $sce, GetData, FIREBASE_URL) {
    // get the tutor datastore from Firebase
    $scope.tutors = GetData;

    // we want to pre-format the schedule so that when we push it to the tutor object and submit it to
    // Firebase, it'll be in the correct format to display on the page and we won't have to rewrite
    // the logic in `engine.html` for all the ng-repeats we have in that beast.
    $scope.tutor = {
        schedule: [
            {
                weekday: "Monday",
                details: []
            },
            {
                weekday: "Tuesday",
                details: []
            },
            {
                weekday: "Wednesday",
                details: []
            },
            {
                weekday: "Thursday",
                details: []
            },
            {
                weekday: "Friday",
                details: []
            },
            {
                weekday: "Saturday",
                details: []
            }
        ]
    };

    // If, by chance, a tutor works 2 or more shifts in a single day, we want to make an add button that
    // appends a pre-formatted object to the `details` array. This information causes a single ng-repeat
    // for each time the add button is clicked. In fact, if a tutor doesn't work one day, we don't even
    // want there to be a form available for that day. You must click "Add" at least once in order to
    // say a tutor works today, otherwise the day is skipped and the tutor does not have a schedule for
    // that day
    $scope.addDetails = function(e, schedule) {
        e.preventDefault();
        schedule.details.push({location:"Tutorial Center"});
    };

    // adding tutors to Firebase
    $scope.addTutor = function() {
        // format everything exactly how I want them to be formatted. There is no room for errors.

        // we'll generate the thumbnail links for each tutor
        $scope.tutor.thumbnail = 'img/tutors/' + $scope.tutor.firstName.toLowerCase() + '_' + $scope.tutor.lastName.toLowerCase() + '.jpg';

        // check to see if the form is filled. If it is, take each item, split at the comma (if there is at
        // least one), and then iterate over each item to remove excess whitespace along the left and right
        // side of the query. This cannot trim the actual text for the reason that it looks at the entire
        // string and trims the far left and far right. To get around this, simply split, and then trim each
        // item in the array.
        if ($scope.tutor.short.value !== '') {
            $scope.tutor.short = document.querySelector('#classes').value.split(',');
            for (var i in $scope.tutor.short) {
                $scope.tutor.short[i] = $scope.tutor.short[i].trim();
            }
        }

        // again, check to see if the form has been filled. If it is, split at the comma (if there is one),
        // trim the whitespace from each item in the array, and then push the array.
        if ($scope.tutor.subjects.value !== '') {
            $scope.tutor.subjects = document.querySelector('#subjects').value.split(',');
            for (var j in $scope.tutor.subjects) {
                $scope.tutor.subjects[j] = $scope.tutor.subjects[j].trim();
            }
        }

        // again, check to see if the form has been filled. If it is, split at the comma (if there is one),
        // trim the whitespace from each item in the array, and then push the array.
        if ($scope.tutor.courses.value !== '') {
            $scope.tutor.courses = document.querySelector('#courses').value.split(',');
            for (var k in $scope.tutor.courses) {
                $scope.tutor.courses[k] = $scope.tutor.courses[k].trim().split(' ').join('-').toUpperCase();
            }
        }

        // in checking against etc, the current search implementation
        // looks at the left side of the colon for some reason. If the
        // tutor is not etc, simply don't even apply the .etc property.
        // That way Firebase won't index it. There is only one test case.
        if ($scope.tutor.etc.toUpperCase() === 'YES') {
            $scope.tutor.etc = true;
        } else {
            $scope.tutor.etc = null;
        }
        if ($scope.tutor.schedule.instructor === '') {
            $scope.tutor.schedule.instructor = null;
        }

        // remove the days that are empty
        $scope.tutor.schedule = _.filter($scope.tutor.schedule, function(schedule) {
            return schedule.details.length !== 0;
        });

        // Finally, we'll push the tutor data to Firebase.
        GetData.$add($scope.tutor);

        // And then clear out the form for the next person
        // document.querySelector('form').reset()
        window.location.reload(forceGet);
    };

    // remove tutors from Firebase
    $scope.removeTutor = function(deleteID) {
        console.log(deleteID);
        var deleteRef = new Firebase(FIREBASE_URL + deleteID);
        deleteRef.remove();
    };

    // search by multiple queries
    $scope.searchFunc = function(item) {
        var invalidSearchTerms = [' and ', ' or ', 'courses', 'firstName', 'hiring_department', 'lastName', 'schedule', 'details', 'weekday', 'location', 'times', 'short', 'subjects', 'thumbnail'];
        var jsonStr = angular.lowercase(JSON.stringify(item));
        if ($scope.queryStr && $scope.queryStr.trim()) {
            var query = $scope.queryStr.trim().split(' ');
            var result = true;
            for (var partIndex in query) {
                if (jsonStr.indexOf(angular.lowercase(query[partIndex])) > -1 && _.contains(invalidSearchTerms, query[partIndex]) !== true) {
                    result = result && true;
                } else {
                    result = false;
                }
            }
            return result;
        } else {
            return true;
        }
    };

    // get the links and stuff
    $http.get('js/store.js').success(function(data) {
        $scope.news = data.news;
        $scope.links = data.routes;
    });

    // url safe linking
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    // suggestion box modal
    $scope.reportData = {};
    $ionicModal.fromTemplateUrl('templates/suggestions.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    $scope.showModal = function() {
        $scope.modal.show();
        $scope.reportData.currentPage = $ionicHistory.currentTitle();
    };
    $scope.doSuggestion = function() {
        console.log('Processing Suggestion', $scope.reportData);
        $scope.closeModal();
        document.querySelector('input').value = '';
    };

    // calendar
    (function() {
        // initialize the calendar object
        $scope.calendar = {};
        $scope.calendar.now = moment();
        $scope.calendar.calendarMonths = [];
        $scope.calendar.compileListOfMonths = function() {
            for (var i = 0; i < 12; i ++) {
                $scope.calendar.calendarMonths.push($scope.calendar.now.month(i).format('MMMM'));
            }
        };
        if ($scope.calendar.now.isValid()) {
            $scope.calendar.compileListOfMonths();
        } else {
            $scope.calendar.now = moment();
            $scope.calendar.compileListOfMonths();
        }
    })();
})
.factory('GetData', function($firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseArray(ref);
});
