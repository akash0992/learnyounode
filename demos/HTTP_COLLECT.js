/**
 * Created by intelligrape on 1/11/14.
 */
var http = require('http');

http.get(process.argv[2], function (res) {
    var fullData = "";
    res.setEncoding('utf8');
    res.on('data', function (data) {
        fullData = fullData + data;
    });
    res.on('end', function (data) {
        console.log(fullData.length)
        console.log(fullData)
    })

});
// using bl module.

//var http = require('http')
//var bl = require('bl')
//
//http.get(process.argv[2], function (response) {
//    response.pipe(bl(function (err, data) {
//        if (err)
//            return console.error(err)
//        data = data.toString()
//        console.log(data.length)
//        console.log(data)
//    }))
//})
