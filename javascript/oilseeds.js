var res = [];
var getdata = [];
var fs = require("fs");
var lineReader = require('readline').createInterface({
   input: require('fs').createReadStream('data.csv')
});

var myWriteStream = require("fs").createWriteStream("oilseeds.json")

lineReader.on('line', function(line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.Particulars = lineSplit[0];
    jsonFromLine.Unit = lineSplit[24];
    res.push(jsonFromLine);
});


lineReader.on('close', function(line) {
 getdata=res.filter(function(data){
 	
 	return data.Particulars.includes("Agricultural Production Oilseeds")  
 });
 getdata.sort((a,b)=>(b.Unit-a.Unit));
 console.log(getdata);
 });


lineReader.on('close', function(line) {
    myWriteStream.write(JSON.stringify(getdata, null, 2))
});





