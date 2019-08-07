'use strict';
window.Bahmni = window.Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Observation = Bahmni.Common.DisplayControl.Observation || {};

angular
    .module('bahmni.common.displaycontrol.observation', ['bahmni.common.conceptSet', 'pascalprecht.translate'])
    .run(function($templateCache){
        $templateCache.put('template-observation-displaycontrol-allObsDetails', require("./views/allObservationDetails.html"));
    });

require("./controllers/allObservationDetailsController");
require("./directives/bahmniObservation");
require("./helpers/groupingFunctions");
require("./services/formHierarchyBuildService");
require("./services/formRecordTreeBuildService");