import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsPath = path.join(__dirname, 'public');
// Beware the leading `/` before the path!
const pathToServe = '/static';

const configureStaticPaths = (app) => {
  app.use('/public', express.static(path.join(__dirname, '/public')));
  app.use('/assets', express.static(path.join(__dirname, 'assets')));
  app.use('/src', express.static(path.join(__dirname, 'src')));
  // Optionally, serve more static assets from another folder.
  app.use(pathToServe, serveStatic(anotherAssetsPath));
};

export default configureStaticPaths;