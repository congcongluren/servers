var express = require('express');

var app = express();


const hostname = "127.0.0.1"; // 看看就好
const port = 7777;  // http服务端口
const timeoutBrowser = 120000;   // 浏览器超时关闭时间


app.post('getImg', function (req, res) {
    var data = querystring.stringify({
        username: "myname",
        password: " pass"
    });

    var options = {
        host: 'www.javaserver.com',
        port: 8070,
        path: '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log("body: " + chunk);
        });
    });
    req.write(data);
    req.end();
})

app.listen(port, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});