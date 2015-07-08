angular.module('starter.controllers', [])

.controller('ViewController', function($scope, $ionicModal, $ionicHistory, $sce) {
    $scope.reportData = {}
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    // modal view for the suggestion link
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

        // send report data below

        // close when done
        $scope.closeModal()
        document.querySelector('textarea').value = ''
        document.querySelector('input').value = ''
    }
})
