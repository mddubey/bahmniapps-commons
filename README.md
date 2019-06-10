# bahmniapps-commons
This repository contains extracted common modules form [openmrs-module-bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps).

## Setup 
```
git clone git@github.com:mddubey/bahmniapps-commons.git
cd bahmniapps-commons
npm install
npm run bundle
```
Above steps will generate a dist folder with a output js file for each module.

## Adding a new module
Below is the strucutre of project:
<pre>
|-- module-1
    |-- init.js
    |-- views
    |-- directives
    |-- filters
    |-- components
    |-- services
|-- module-2
    |-- init.js
    ....
|.......	
|-- module-n
    |-- init.js
    ....
|-- dist
|-- package.json
|-- webpack.config.json
</pre>
* All modules are present on the root of the project.
* By convention, every module should have an `init.js` file. This would be maintioned in the `entry` for the `webpack.config.js`.
* The key for the `entry` will be used to generate the bundled file.

## ToDo
* Publishing to NPM.
* How to make `src/header/view/header.html` consumable?
