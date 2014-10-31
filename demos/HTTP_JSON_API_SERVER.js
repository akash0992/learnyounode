/**
 * Created by deepak.m.shrma@gmail.com on 1/11/14.
 * Git: deepakshrma
 */
//solution one...

var http = require('http')
var url = require('url');

var server = http.createServer(function (req, res) {
    var reqData = url.parse(req.url, true);

    if (req.method != 'GET' || reqData.query.iso)
        return res.end();
    var isoDate = new Date(reqData.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (reqData.pathname == "/api/parsetime") {
        return res.end(JSON.stringify({
            "hour": isoDate.getHours(),
            "minute": isoDate.getMinutes(),
            "second": isoDate.getSeconds()
        }))
    }
    else if (reqData.pathname == "/api/unixtime") {
        return res.end(JSON.stringify({
            "unixtime": isoDate.getTime()
        }));
    }
    else {
        return res.end();
    }
});
server.listen(Number(process.argv[2]))

//solution 2...
//uncomment it..

/*var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))*/


