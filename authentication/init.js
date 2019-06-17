'use strict';
window.Bahmni = Bahmni || {};
Bahmni.Auth = Bahmni.Auth || {};

angular.module('authentication', ['ui.router']);

require("./user")
require("./userService")
require("./authentication")
