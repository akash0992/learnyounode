/**
 * Created by intelligrape on 1/11/14.
 */
var fs = require('fs');
var ext = process.argv[3];
fs.readdir(process.argv[2], function (error, list) {
    if (!error) {
        list.forEach(function (dir) {
            var reg = new RegExp('\.' + ext + "$")
            var lastIndex = dir.lastIndexOf('.');
            if (dir.match(reg)) {
                console.log(dir);
            }
        })
    }
});

//var fs = require('fs')
//var path = require('path')
//
//fs.readdir(process.argv[2], function (err, list) {
//    list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//            console.log(file)
//    })
//})