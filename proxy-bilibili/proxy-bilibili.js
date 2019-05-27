const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

function onProxyResp(proxyRes) {
    // proxyRes.headers['Access-Control-Allow-Origin'] = 'https://thetime50.github.io';
    proxyRes.headers['Access-Control-Allow-Origin'] = 'http://192.168.31.6:8080';
    proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
}
function onProxyReq(proxyReq) {
    proxyReq.setHeader('Origin', 'http://m.bilibili.com');
    proxyReq.setHeader('Referer', 'http://m.bilibili.com');
    // proxyReq.setHeader('Upgrade-Insecure-Requests', 0);
    console.log(new Date().toLocaleTimeString(),"proxyReq",proxyReq.path)
}

app.use('/m', proxy({
    target: 'http://m.bilibili.com',
    pathRewrite: {
        '^/m': ''
    },
    changeOrigin: true,
    onProxyRes: onProxyResp,
    onProxyReq,
}));

app.use('/api', proxy({
    target: 'http://api.bilibili.com',
    pathRewrite: {
        '^/api': ''
    },
    changeOrigin: true,
    onProxyRes: onProxyResp,
    onProxyReq,
}));


app.use('/comment', proxy({
    target: 'http://comment.bilibili.com',
    pathRewrite: {
        '^/comment': ''
    },
    changeOrigin: true,
    onProxyRes: onProxyResp,
    onProxyReq,
}));


const server = app.listen(8088);
module.exports = server;