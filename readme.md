**herdoofsheep.github.io**
uses lit-element, rollup and threejs, and well as jquery and lodash.
To begin development, run 
 >   <p> $npm i </p>
to build a node_modules folder with your needed dependencies. All added dependencies should be added to 
 >   <p>package.json </p>
rather than imported to the assets/js folder. I'm currently working on removing any dependencies not in node_modules so all custom js code will be written in
 >   <p>assets/js </p>
rather than in src/js where all the current lit-element code currently resides.
to run a local deployment for testing, run
 >   <p>$npm run serve </p>
though any custom js code (or changes to custom js code) must first be built with rollup by running
 >   <p>$npm run build. </p>
The custom js that exists and has been built in the website will be brought in with git clone, but any new code will need to be built. If you have written new files, they will need to be added to the 
 >   <p>rollup-main.js </p>
file in order to get built.
Debug pointing files to 
 >   <p>src/js/</p>
and remember to point to 
 >   <p>src/build/js/</p>
 for deployment.

