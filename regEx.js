
var fs = require('fs');

fs.readFile('DataForRegExTask','utf8',function (err,data){

let stringOfData = data.toString();

let myRegEx=(/@softwire.com/g);

const softWireArray = stringOfData.match(myRegEx);

console.log(softWireArray.length);

})











