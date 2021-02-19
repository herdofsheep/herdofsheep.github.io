import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';

const filesizeConfig = {
  showGzippedSize: true,
  showBrotliSize: false,
  showMinifiedSize: false,
};

const copyConfig = {
  targets: [
    { src: 'node_modules/@webcomponents', dest: 'src/build/npm' },
    { src: 'node_modules/systemjs/dist/s.min.js', dest: 'src/build/npm/systemjs/dist' },
    { src: 'node_modules/three/examples/jsm/loaders/GLTFLoader.js', dest: 'src/build/npm/GLTFLoader' },
    { src: 'node_modules/three/examples/jsm/controls/TrackballControls.js', dest: 'src/build/npm/TrackballControls' },
    { src: 'node_modules/three/examples/jsm/controls/OrbitControls.js', dest: 'src/build/npm/OrbitControls' },
    { src: 'node_modules/three/examples/jsm/utils/BufferGeometryUtils.js', dest: 'src/build/npm/BufferGeometryUtils' },
    { src: 'node_modules/lodash/lodash.min.js', dest: 'src/build/npm/lodash' },
    { src: 'node_modules/three/build/three.module.js', dest: 'src/build/npm/three' },
    { src: 'node_modules/lit-element/lit-element.js', dest: 'src/build/npm/lit-element' },
  ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: ['src/js/raycast.js', 'src/js/questionmark.js', 'src/js/mathena.js', 'src/js/pointTest.js'],
  output: {
    dir: 'src/build/js',
    format: 'es',
  },
  plugins: [
    minifyHTML(),
    copy(copyConfig),
    resolve(),
    filesize(filesizeConfig)
  ],
  preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser());
}

export default config;