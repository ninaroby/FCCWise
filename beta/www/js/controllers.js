angular.module('starter.controllers', ['ngAnimate'])

.controller('ViewController', function($scope, $http, $ionicModal, $ionicHistory, $sce, GetData, FIREBASE_URL) {
    // get the tutor datastore from Firebase
    $scope.tutors = GetData
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
    }

    $scope.addDetails = function(e, schedule) {
        e.preventDefault()
        schedule.details.push({location:"Tutorial Center"})
    }

    // add tutors to Firebase
    $scope.addTutor = function() {
        // format everything exactly how I want them to be formatted. There is no room for errors.
        $scope.tutor.thumbnail = 'img/tutors/' + $scope.tutor.firstName + '_' + $scope.tutor.lastName + '.jpg'
        if ($scope.tutor.short.value !== '') {
            $scope.tutor.short = document.querySelector('#classes').value.split(',')
            for (var i in $scope.tutor.short) {
                $scope.tutor.short[i] = $scope.tutor.short[i].trim()
            }
        }
        if ($scope.tutor.subjects.value !== '') {
            $scope.tutor.subjects = document.querySelector('#subjects').value.split(',')
            for (var i in $scope.tutor.subjects) {
                $scope.tutor.subjects[i] = $scope.tutor.subjects[i].trim()
            }
        }
        if ($scope.tutor.courses.value !== '') {
            $scope.tutor.courses = document.querySelector('#courses').value.split(',')
            for (var i in $scope.tutor.courses) {
                $scope.tutor.courses[i] = $scope.tutor.courses[i].trim().split(' ').join('-').toUpperCase()
            }
        }
        if ($scope.tutor.etc.toUpperCase() === 'YES') {
            $scope.tutor.etc = true
        } else {
            $scope.tutor.etc = false
        }
        GetData.$add($scope.tutor)
        document.querySelector('form').reset()
    }
    // remove tutors from Firebase
    $scope.removeTutor = function(deleteID) {
        console.log(deleteID)
        var deleteRef = new Firebase(FIREBASE_URL + deleteID)
        deleteRef.remove()
    }

    // search by multiple queries
    $scope.searchFunc = function(item) {
        var jsonStr = angular.lowercase(JSON.stringify(item))
        if ($scope.queryStr && $scope.queryStr.trim()) {
            var query = $scope.queryStr.trim().split(' ')
            var result = true
            for (var partIndex in query) {
                if (jsonStr.indexOf(angular.lowercase(query[partIndex])) > -1) {
                    result = result && true
                } else {
                    result = false
                }
            }
            return result
        } else {
            return true
        }
    }

    // get the links and stuff
    $http.get('js/store.js').success(function(data) {
        $scope.news = data.news
        $scope.calendar = data.calendar
    })
    $http.get('js/routes.js').success(function(data) {
        $scope.links = data
    })

    // url safe linking
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    // suggestion box modal
    $scope.reportData = {}
    $ionicModal.fromTemplateUrl('templates/suggestions.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal
    })
    $scope.closeModal = function() {
        $scope.modal.hide()
    }
    $scope.showModal = function() {
        $scope.modal.show()
        $scope.reportData.currentPage = $ionicHistory.currentTitle()
    }
    $scope.doSuggestion = function() {
        console.log('Processing Suggestion', $scope.reportData)
        $scope.closeModal()
        document.querySelector('input').value = ''
    }
})
