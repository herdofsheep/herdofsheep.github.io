import * as $2j3xU$express from "express";
import "path";
import {createProxyMiddleware as $2j3xU$createProxyMiddleware} from "http-proxy-middleware";


const $4b2b2fa0cbca9184$var$app = $2j3xU$express();


var $4b2b2fa0cbca9184$require$createProxyMiddleware = $2j3xU$createProxyMiddleware;
// create the proxy
/** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */ const $4b2b2fa0cbca9184$var$proxyMiddleware = $4b2b2fa0cbca9184$require$createProxyMiddleware({
    changeOrigin: true
});
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use('/assets', express.static(path.join(__dirname, 'assets')));
// app.use('/src', express.static(path.join(__dirname, 'src')));
// app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/three/build/')));
// app.use('/build', express.static(path.join(__dirname, '/node_modules')));
// app.use('/three_addon', express.static(path.join(__dirname, '/node_modules')));
// app.use('/jsm', express.static(path.join(__dirname, '/node_modules/three/examples/jsm')));
$4b2b2fa0cbca9184$var$app.use("/", $4b2b2fa0cbca9184$var$proxyMiddleware);
$4b2b2fa0cbca9184$var$app.listen(3000);


//# sourceMappingURL=index.js.map
