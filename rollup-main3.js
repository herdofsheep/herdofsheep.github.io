import { terser } from 'rollup-plugin-terser';
import path from 'path';


const filesizeConfig = {
  showGzippedSize: true,
  showBrotliSize: false,
  showMinifiedSize: false,
};

export default ({
  input: ['src/js'],
  output: [{
    file: 'build/bundle/bundle.js',
    sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
      // will replace relative paths with absolute paths
      return path.resolve(path.dirname(sourcemapPath), relativeSourcePath)
    },
    format: 'es',
    sourcemap: true
  }
  ]
});
output

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser());
}

export default config;