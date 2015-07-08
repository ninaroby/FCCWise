angular.module('starter.controllers', [])

.controller('ViewController', function($scope, $ionicModal, $ionicConfigProvider) {
    $scope.reportData = {}

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
    }

    $scope.doSuggestion = function() {
        console.log('Processing Suggestion', $scope.reportData)

        // send report data below

        // close when done
        $scope.closeModal()
    }
})
