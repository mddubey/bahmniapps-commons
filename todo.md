## Not yet done

* Setup unit test framework.
* Move tests for already moved modules.
* Serving images from library.
    * `bahmni-obs-commons/views/showObservations.html` uses `pdfIcon.png`. We need to work out how to fix that.
    * `bahmni-conceptset-commons/views/observation.html` uses `pdfIcon.png`. We need to work out how to fix that.
    * `bahmni-patientsearch-commons/views/patientsList.html` uses `blank-user.png`. We need to work out how to fix that.

* The `openmrs-module-bahmniapps` heavily uses a global variable named `Bahmni` (declaration `var Bahmni = Bahmni || {}`). Since `webpack` while bundling puts everything into inlined functions, the variables declared with `var` become local to those functions and are not accessible globally anymore. As of now this has been fixed as `window.Bahmni = Bahmni || {}`. We need ot figure out if there is a better way of doing it. This might will need an extensive refactoring in `openmrs-module-bahmniapps` since this variable is heavily used.
* Taking care of navigation links in `displaycontrols/navigationlinks/directives/navigationLinks.js`. Right now they are harcoded links.
* Taking care of harcoded translations path in `bahmni-i18n-commons/services/mergeLocaleFilesService.js`. 

## Unused files
* What was the use of `displaycontrols/dashboard/views/sections/patientObservationsChart.html`. 

    
