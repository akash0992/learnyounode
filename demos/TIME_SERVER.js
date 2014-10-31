/**
 * Created by deepak.m.shrma@gmail.com on 1/11/14.
 * Git: deepakshrma
 */
var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

//var net = require('net')
//var server = net.createServer(function (socket) {
//    var now = new Date();
//    socket.end((now.getFullYear() + "-" +
//        zeroFill(now.getMonth() + 1, 2) + "-" +
//        zeroFill(now.getDate(), 2) + " " +
//        zeroFill(now.getHours(), 2) + ":" +
//        zeroFill(now.getMinutes(), 2)));
//})
//function zeroFill(data, size) {
//    var finalData = "";
//    for (var index = 0; index < size - ("" + data).length; index++) {
//        finalData = finalData + "0"
//    }
//    return finalData + data;
//}
//server.listen(process.argv[2])