'use strict';
global.Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Logging = Bahmni.Common.Logging || {};

angular.module('bahmni.common.logging', []);

require("./services/loggingService")
require("./services/auditLogService")
require("./exceptionHandler")