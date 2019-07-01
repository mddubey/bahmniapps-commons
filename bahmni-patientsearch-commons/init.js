angular
    .module('bahmni.common.patientSearch', ['bahmni.common.patient', 'infinite-scroll'])
    .run(function($templateCache){
        $templateCache.put('template-patient-search-patient-list', require("./views/patientsList.html"))
    });

require("./constants")
require("./controllers/patientsListController")
require("./directives/resize")
require("./models/search")

