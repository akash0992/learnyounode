/**
 * Created by intelligrape on 1/11/14.
 */
var listInput = process.argv;
listInput.splice(0, 2);
var sum = 0
for (var index in listInput) {
    sum = sum + Number(listInput[index]);
}
console.log(sum);