'use strict';

angular.module('bahmni.common.displaycontrol.dashboard')
    .controller('PatientDashboardDiagnosisController', ['$scope', 'ngDialog',
        function ($scope, ngDialog) {
            $scope.section = $scope.dashboard.getSectionByType("diagnosis") || {};

            $scope.openSummaryDialog = function () {
                ngDialog.open({
                    template: 'template-common-displaycontrol-diagnosisSummary',
                    className: "ngdialog-theme-default ng-dialog-all-details-page",
                    scope: $scope
                });
            };
            var cleanUpListener = $scope.$on('ngDialog.closing', function () {
                $("body").removeClass('ngdialog-open');
            });

            $scope.$on("$destroy", cleanUpListener);
        }]);
