var http = require("http");
var httpProxy = require("http-proxy");

var proxy = httpProxy.createProxyServer({});

const server = http.createServer(function (req, res) {
    if (/^\/proxy\/api/.test(req.url)) {
        req.url = req.url.replace(/^\/proxy\/api/, "");
        proxy.web(req, res, {
            target: "https://example.com/realApi",
            changeOrigin: true,
            secure: false,
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        const response = "Proxy running...";
        res.end(response);
    }
});

server.listen(8080);