**herdoofsheep.github.io** uses lit-element, rollup and threejs, and well as jquery and lodash.
To begin development, run 
    $npm i 
to build a node_modules folder with your needed dependencies. All added dependencies should be added to 
    package.json
rather than imported to the assets/js folder. I'm currently working on removing any dependencies not in node_modules so all custom js code will be written in
    assets/js
rather than in src/js/custom-three where all the current lit-element code currently resides.
to run a local deployment for testing, run
    $npm run serve
though any custom js code (or changes to custom js code) must first be built with rollup by running
    $npm run build.
The custom js that exists and has been built in the website will be brought in with git clone, but any new code will need to be built. If you have written new files, they will need to be added to the 
    rollup-main.js 
file in order to get built.
