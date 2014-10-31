/**
 * Created by intelligrape on 1/11/14.
 */
var filterFn = require('./myModule')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err)
        return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
})