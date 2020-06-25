
var fs = require('fs');

fs.readFile('DataForRegExTask','utf8',function (err,data){


let stringOfData = data.toString();


let splitOnSpaces = stringOfData.split(" ");
  
let softWireArray = splitOnSpaces.filter(item => item.includes("@softwire.com"));

console.log(softWireArray.length);



})









