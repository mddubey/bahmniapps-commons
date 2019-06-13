# bahmniapps-commons
This repository contains extracted common modules form [openmrs-module-bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps).

# Install
```
npm i bahmniapps-commons
```

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

## Known Issues
* The modules which provide views are using [ngtemplate-loader](https://github.com/WearyMonkey/ngtemplate-loader) to serve the views from the bundled file. It reads the html and puts into `$templateCache` to serve later. As of now the key for `$templateCache` is an absolute path to view on the machine where the `npm run bundle` is issued. Though there are no problems because of this(testsed on vagrant) but the looking at the code creates some confusion. There is an [issue raised here](https://github.com/WearyMonkey/ngtemplate-loader/issues/83) but not looked into. If not resolved we should look into [auto-ngtemplate-loader](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/), which uses the same under the hood and claims to solve this problem.