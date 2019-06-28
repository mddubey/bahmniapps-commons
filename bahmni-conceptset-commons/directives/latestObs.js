'use strict';

angular.module('bahmni.common.conceptSet')
    .directive('latestObs', function () {
        var controller = function ($scope, observationsService, $q, spinner) {
            var init = function () {
                spinner.forPromise(observationsService.fetch($scope.patientUuid, $scope.conceptNames, "latest").then(function (response) {
                    var observations = new Bahmni.Common.Obs.ObservationMapper().map(response.data, []);
                    $scope.observations = _.sortBy(observations, 'sortWeight');
                }));
            };
            init();
        };

        return {
            restrict: 'E',
            controller: controller,
            template: require('../views/latestObs.html'),
            scope: {
                patientUuid: "=",
                conceptNames: "="
            }
        };
    });
