angular.module('starter.controllers', ['firebase'])

.controller('ViewController', function($scope, $http, $ionicModal, $ionicHistory, $sce, $firebaseArray) {
    // get the tutor datastore
    var ref = new Firebase('https://fccwise-search.firebaseio.com/')
    $scope.tutors = $firebaseArray(ref)

    // get the links and stuff
    $http.get('js/store.js').success(function(data) {
        $scope.links = data.sitemap
        $scope.news = data.news
        $scope.calendar = data.calendar
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
