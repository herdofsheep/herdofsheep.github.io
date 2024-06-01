const express = require('express');
const app = express()
const path = require('path')
// const { createProxyMiddleware } = require('http-proxy-middleware');

// // create the proxy
// /** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */
// const proxyMiddleware = createProxyMiddleware({
//     changeOrigin: true, // needed for virtual hosted sites
//   });

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/src', express.static(path.join(__dirname, 'src')));

// app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/three/build/')));
// app.use('/build', express.static(path.join(__dirname, '/node_modules')));
// app.use('/three_addon', express.static(path.join(__dirname, '/node_modules')));
// app.use('/jsm', express.static(path.join(__dirname, '/node_modules/three/examples/jsm')));

// app.use('/', proxyMiddleware);

app.listen(3000);
