'use strict';
window.Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};

angular.module('bahmni.common.displaycontrol', []);

require("./patientprofile/init")
require("./dashboard/init")
require("./observation/init")
require("./disposition/init")
require("./admissiondetails/init")
require("./diagnosis/init")
