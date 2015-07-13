angular.module('starter.controllers', [])

.controller('ViewController', function($scope, $http, $ionicModal, $ionicHistory, $sce) {
    // get the site links, news, and tutor datastore
    $http.get('js/store.js').success(function(data) {
        $scope.tutors = data.tutors
        $scope.news = data.news
        $scope.links = data.sitemap
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
