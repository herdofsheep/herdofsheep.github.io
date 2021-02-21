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
    { src: 'node_modules/three/examples/jsm/effects/AsciiEffect.js', dest: 'src/build' }
  ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: [
    'src/js/raycast.js',
    'src/js/questionmark.js',
    'src/js/mathena.js',
    'src/js/pointTest.js', 
    'node_modules/three/examples/jsm/controls/OrbitControls.js',
    'node_modules/three/examples/jsm/loaders/GLTFLoader.js',
    'node_modules/three/examples/jsm/controls/TrackballControls.js',
    'node_modules/three/examples/jsm/utils/BufferGeometryUtils.js'
  ],
  output: {
    dir: 'src/build',
    format: 'es',
  },
  plugins: [
    minifyHTML(),
    resolve(),
    filesize(filesizeConfig)
  ],
  preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser());
}

export default config;