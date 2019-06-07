'use strict';
var templateUrl = require('ngtemplate-loader!../header/views/patientSummary.html');

angular.module('bahmni.common.patient').directive('patientSummary', function () {
    var link = function ($scope) {
        $scope.showPatientDetails = false;
        $scope.togglePatientDetails = function () {
            $scope.showPatientDetails = !$scope.showPatientDetails;
        };

        $scope.onImageClick = function () {
            if ($scope.onImageClickHandler) {
                $scope.onImageClickHandler();
            }
        };
    };

    return {
        restrict: 'E',
        templateUrl: templateUrl,
        link: link,
        required: 'patient',
        scope: {
            patient: "=",
            bedDetails: "=",
            onImageClickHandler: "&"
        }
    };
});