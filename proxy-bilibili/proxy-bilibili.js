const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

const hosts = [
    {
        target: 'http://m.bilibili.com',
        rewrite: { '^/mbilibili': '', },
        url: '/m'
    },{
        target: 'http://api.bilibili.com',
        rewrite: { '^/api': '', },
        url: '/api'
    },{
        target: 'http://comment.bilibili.com',
        rewrite: { '^/comment': '', },
        url: '/comment'
    },{
        target: 'http://i0.hdslb.com',
        rewrite: { '^/i0hdslb': '' },
        url: '/i0hdslb'
    },{
        target: 'http://i1.hdslb.com',
        rewrite: { '^/i1hdslb': '' },
        url: '/i1hdslb'
    },{
        target: 'http://i2.hdslb.com',
        rewrite: { '^/i2hdslb': '' },
        url: '/i2hdslb'
    }
];

for(const host of hosts) {
    app.use(host.url, proxy({
        target: host.target,
        pathRewrite: host.rewrite,
        changeOrigin: true,
        onProxyRes(proxyRes) {
            // proxyRes.headers['Access-Control-Allow-Origin'] = 'https://thetime50.github.io';
            proxyRes.headers['Access-Control-Allow-Origin'] = 'http://192.168.31.6:8080';
            proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
        },
        onProxyReq(proxyReq) {
            proxyReq.setHeader('Origin', host.target);
            proxyReq.setHeader('Referer', host.target);
        },
    }));
}

const server = app.listen(8088);
module.exports = server;