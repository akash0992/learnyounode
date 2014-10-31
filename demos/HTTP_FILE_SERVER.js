/**
 * Created by deepak.m.shrma@gmail.com on 1/11/14.
 * Git: deepakshrma
 */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // The filename is simple the local directory and tacks on the requested url
    // This line opens the file as a readable stream
    var readStream = fs.createReadStream(process.argv[3]);
    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(res);
    });
    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function (err) {
        res.end(err);
    });
}).listen(Number(process.argv[2]));

//solution 2...
//uncomment it..

//var server = http.createServer(function (req, res) {
//    res.writeHead(200, { 'content-type': 'text/plain' })
//
//    fs.createReadStream(process.argv[3]).pipe(res)
//})