const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

function onProxyResp(proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = 'https://thetime50.github.io';
    proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
}

app.use('/api', proxy({
    target: 'https://api.bilibili.com',
    pathRewrite: {
        '^/api': ''
    },
    changeOrigin: true,
    onProxyRes: onProxyResp
}));


app.use('/comment', proxy({
    target: 'https://comment.bilibili.com',
    pathRewrite: {
        '^/comment': ''
    },
    changeOrigin: true,
    onProxyRes: onProxyResp
}));


const server = app.listen(8088);
module.exports = server;