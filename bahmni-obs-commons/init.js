global.Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Obs = Bahmni.Common.Obs || {};

angular
    .module('bahmni.common.obs', [])
    .run(function($templateCache){
        $templateCache.put('template-obs-show-observation', require("./views/showObservation.html"));
        $templateCache.put('template-obs-edit-observation', require("./views/editObservation.html"));
        $templateCache.put('template-obs-show-video', require("./views/showVideo.html"));
    });

require("./directives/editObservation")
require("./directives/showObservation")

require("./mappers/observationMapper")

require("./models/gridObservation")
require("./models/imageObservation")
require("./models/multiSelectObservation")
require("./models/observation")

require("./util/observationUtil")