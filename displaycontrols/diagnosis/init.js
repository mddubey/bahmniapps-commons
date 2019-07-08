'use strict';
window.Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Diagnosis = Bahmni.Common.DisplayControl.Diagnosis || {};

angular.module('bahmni.common.displaycontrol.diagnosis', []);

require("./directives/bahmniDiagnosis")
require("./filters/primaryDiagnosisFirst")
