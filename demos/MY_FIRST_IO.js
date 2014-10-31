/**
 * Created by intelligrape on 1/11/14.
 */
var fs = require('fs')
var data = new Buffer(fs.readFileSync(process.argv[2]));
data = data.toString().split('\n');
console.log(data.length - 1);