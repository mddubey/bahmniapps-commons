# bahmniapps-commons
This repository contains extracted common modules form [openmrs-module-bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps).

## Setup 
* Clone the repository and `cd` into the folder.
* Run `npm install`
* Run `npm run bundle`

Above steps will produce the `dist/bahmni-patient-commons.js`. As of now it has been tested by copying manually 

## ToDo
* Publishing to NPM.
* Setup a folder structure. Something like all top level folders can be libraries of it's own. E.g: PatientCommon, PatientSearchCommon, ConceptSearchCommon etc.
* How to make `src/header/view/header.html` consumable?
