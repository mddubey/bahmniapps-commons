'use strict';

(function () {
    var OBSERVATION_SECTION_TEMPLATE_CACHE_URL = "template-common-displaycontrol-observationSection";
    var COMMON_TEMPLATE_CACHE_URL_FORMAT = "template-common-displaycontrol-SECTION_NAME";
    var CLINICAL_TEMPLATE_CACHE_URL_FORMAT = "template-clinical-displaycontrol-SECTION_NAME";
    var commonDisplayControlNames = [
        "admissionDetails",
        "bacteriologyResultsControl",
        "chronicTreatmentChart",
        "custom",
        "diagnosis",
        "disposition",
        "drugOrderDetails",
        "forms",
        "formsV2",
        "observationGraph",
        "obsToObsFlowSheet",
        "pacsOrders",
        "patientInformation",
        "conditionsList"
    ];

    var getViewUrl = function (section) {
        if (section.isObservation) {
            return OBSERVATION_SECTION_TEMPLATE_CACHE_URL;
        }
        var isCommonDisplayControl = _.includes(commonDisplayControlNames, section.type);
        if (isCommonDisplayControl) {
            return COMMON_TEMPLATE_CACHE_URL_FORMAT.replace('SECTION_NAME', section.type);
        }
        return CLINICAL_TEMPLATE_CACHE_URL_FORMAT.replace('SECTION_NAME', section.type);
    };

    var getId = function (section, $filter) {
        if (section.type !== "custom") {
            var key = section.translationKey || section.title;
            return !_.isUndefined($filter) && key ? $filter('titleTranslate')(key).toValidId() : key;
        }
    };

    Bahmni.Common.DisplayControl.Dashboard.Section = function (section, $filter) {
        angular.extend(this, section);
        this.displayOrder = section.displayOrder;
        this.data = section.data || {};
        this.isObservation = !!section.isObservation;
        this.patientAttributes = section.patientAttributes || [];
        this.viewName = getViewUrl(this);
        this.hideEmptyDisplayControl = section.hideEmptyDisplayControl != undefined ? section.hideEmptyDisplayControl : false;
        this.isDataAvailable = true;

        this.id = getId(this, $filter);
    };

    Bahmni.Common.DisplayControl.Dashboard.Section.create = function (section, $filter) {
        return new Bahmni.Common.DisplayControl.Dashboard.Section(section, $filter);
    };
})();
