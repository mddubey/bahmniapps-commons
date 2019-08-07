'use strict';
window.Bahmni = window.Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Dashboard = Bahmni.Common.DisplayControl.Dashboard || {};

angular
    .module('bahmni.common.displaycontrol.dashboard', [])
    .run(function($templateCache){
        $templateCache.put('template-common-displaycontrol-observationSection', require("./views/sections/observationSection.html"));
        $templateCache.put('template-common-displaycontrol-admissionDetails', require("./views/sections/admissionDetails.html"));
        $templateCache.put('template-common-displaycontrol-bacteriologyResultsControl', require("./views/sections/bacteriologyResultsControl.html"));
        $templateCache.put('template-common-displaycontrol-chronicTreatmentChart', require("./views/sections/chronicTreatmentChart.html"));
        $templateCache.put('template-common-displaycontrol-custom', require("./views/sections/custom.html"));
        $templateCache.put('template-common-displaycontrol-diagnosis', require("./views/sections/diagnosis.html"));
        $templateCache.put('template-common-displaycontrol-diagnosisSummary', require("./views/sections/diagnosisSummary.html"));
        $templateCache.put('template-common-displaycontrol-disposition', require("./views/sections/disposition.html"));
        $templateCache.put('template-common-displaycontrol-drugOrderDetails', require("./views/sections/drugOrderDetails.html"));
        $templateCache.put('template-common-displaycontrol-forms', require("./views/sections/forms.html"));
        $templateCache.put('template-common-displaycontrol-formsV2', require("./views/sections/formsV2.html"));
        $templateCache.put('template-common-displaycontrol-observationGraph', require("./views/sections/observationGraph.html"));
        $templateCache.put('template-common-displaycontrol-obsToObsFlowSheet', require("./views/sections/obsToObsFlowSheet.html"));
        $templateCache.put('template-common-displaycontrol-pacsOrders', require("./views/sections/pacsOrders.html"));
        $templateCache.put('template-common-displaycontrol-patientInformation', require("./views/sections/patientInformation.html"));
        $templateCache.put('template-common-displaycontrol-conditionsList', require("./views/sections/conditionsList.html"));

        $templateCache.put('template-clinical-displaycontrol-allDiseaseTemplate', require("./views/clinicalDashboardSections/allDiseaseTemplate.html"));
        $templateCache.put('template-clinical-displaycontrol-allVisits', require("./views/clinicalDashboardSections/allVisits.html"));
        $templateCache.put('template-clinical-displaycontrol-diseaseTemplate', require("./views/clinicalDashboardSections/diseaseTemplate.html"));
        $templateCache.put('template-clinical-displaycontrol-editObservationForm', require("./views/clinicalDashboardSections/editObservationForm.html"));
        $templateCache.put('template-clinical-displaycontrol-flowSheet', require("./views/clinicalDashboardSections/flowSheet.html"));
        $templateCache.put('template-clinical-displaycontrol-flowSheetDetails', require("./views/clinicalDashboardSections/flowSheetDetails.html"));
        $templateCache.put('template-clinical-displaycontrol-imageDisplay', require("./views/clinicalDashboardSections/imageDisplay.html"));
        $templateCache.put('template-clinical-displaycontrol-labOrders', require("./views/clinicalDashboardSections/labOrders.html"));
        $templateCache.put('template-clinical-displaycontrol-labSummary', require("./views/clinicalDashboardSections/labSummary.html"));
        $templateCache.put('template-clinical-displaycontrol-navigationLinksControl', require("./views/clinicalDashboardSections/navigationLinksControl.html"));
        $templateCache.put('template-clinical-displaycontrol-ordersControl', require("./views/clinicalDashboardSections/ordersControl.html"));
        $templateCache.put('template-clinical-displaycontrol-programs', require("./views/clinicalDashboardSections/programs.html"));
        $templateCache.put('template-clinical-displaycontrol-radiology', require("./views/clinicalDashboardSections/radiology.html"));
        $templateCache.put('template-clinical-displaycontrol-treatment', require("./views/clinicalDashboardSections/treatment.html"));
        $templateCache.put('template-clinical-displaycontrol-treatmentSummary', require("./views/clinicalDashboardSections/treatmentSummary.html"));
        $templateCache.put('template-clinical-displaycontrol-visits', require("./views/clinicalDashboardSections/visits.html"));
    });

require("./controllers/patientDashboardDiagnosisController")
require("./directives/dashboard")
require("./directives/dashboardSection")
require("./models/dashboard")
require("./models/dashboardSection")