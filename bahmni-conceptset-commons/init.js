'use strict';
window.Bahmni = window.Bahmni || {};
Bahmni.ConceptSet = Bahmni.ConceptSet || {};
Bahmni.ConceptSet.FormConditions = Bahmni.ConceptSet.FormConditions || {};

angular
.module('bahmni.common.conceptSet', ['bahmni.common.uiHelper', 'ui.select2', 'pasvaz.bindonce', 'ngSanitize', 'ngTagsInput'])
.run(function($templateCache){
    $templateCache.put('template-concept-set-group-section', require("./views/conceptSetGroupSection.html"));
    $templateCache.put('template-autocomplete-freetext-type', require("./views/observationDataTypes/autocompleteFreeTextType.html"));
    $templateCache.put('template-remove-clone', require("./views/observationDataTypes/removeClone.html"));
    $templateCache.put('template-add-more', require("./views/observationDataTypes/addMore.html"));
    $templateCache.put('template-show-comment', require("./views/observationDataTypes/showComment.html"));
    $templateCache.put('template-text-type', require("./views/observationDataTypes/textType.html"));
    $templateCache.put('template-concise-text-type', require("./views/observationDataTypes/conciseTextType.html"));
    $templateCache.put('template-button-select-type', require("./views/observationDataTypes/buttonSelectType.html"));
    $templateCache.put('template-html5-data-type', require("./views/observationDataTypes/html5DataType.html"));
});

require("./controller/multiSelectObservationSearchController")

require("./directives/buttonSelect")
require("./directives/concept")
require("./directives/conceptSet")
require("./directives/conceptSetGroup")
require("./directives/duration")
require("./directives/formControls")
require("./directives/imageUpload")
require("./directives/latestObs")
require("./directives/obsConstraints")
require("./directives/stepper")

require("./mappers/observationMapper")

require("./models/booleanObservation")


require("./models/conceptSetGroupPanelViewValidationHandler")
require("./models/conceptSetGroupValidationHandler")
require("./models/conceptSetObservation")
require("./models/conceptSetSection")
require("./models/customRepresentationBuilder")
require("./models/multiSelectObservations")
require("./models/observationForm")
require("./models/observationNode")
require("./models/specimenTypeObservation")
require("./models/tabularObservations")

require("./services/conceptService")
require("./services/conceptSetServices")
require("./services/conceptSetUiConfigService")