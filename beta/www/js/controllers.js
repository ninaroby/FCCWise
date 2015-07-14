angular.module('starter.controllers', ['ngAnimate'])

.controller('ViewController', function($scope, $http, $ionicModal, $ionicHistory, $sce, GetData, FIREBASE_URL) {
    // get the tutor datastore from Firebase
    // $scope.tutors = GetData
    // $scope.tutor = {}
    // add tutors to Firebase
    // $scope.addTutor = function() {
    //     GetData.$add($scope.tutor)
    // }
    // remove tutors from Firebase
    // $scope.removeTutor = function(deleteID) {
    //     console.log(deleteID)
    //     var deleteRef = new Firebase(FIREBASE_URL + deleteID)
    //     deleteRef.remove()
    // }

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
