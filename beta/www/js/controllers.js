angular.module('starter.controllers', [])

.controller('ViewController', function($scope, $http, $ionicModal, $ionicHistory, $sce) {
    // get the site links
    $http.get('js/sitemap.json').success(function(data) {
        $scope.links = data
    })

    // get the news and updates file
    $http.get('js/news.json').success(function(data) {
        $scope.news = data
    })

    $scope.getTutors = function() {
        $http.get('js/tutors.js').success(function(data) {
            $scope.tutors = data
        })
    }

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
