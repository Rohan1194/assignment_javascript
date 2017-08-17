var res = [];
var fs = require("fs");

/*var array ={"Agricultural Production Oilseeds Kharif",
"Agricultural Production Oilseeds Rabi",
"Agricultural Production Oilseeds Groundnut",
"Agricultural Production Oilseeds Groundnut Kharif",
"Agricultural Production Oilseeds Groundnut Rabi",
"Agricultural Production Oilseeds Castorseed Kharif",
"Agricultural Production Oilseeds Sesamun Kharif",
"Agricultural Production Oilseeds Nigerseed Kharif",
"Agricultural Production Oilseeds Rapeseed and Mustard Rabi",
"Agricultural Production Oilseeds Linseed Rabi",
"Agricultural Production Oilseeds Safflower Rabi",
"Agricultural Production Oilseeds Sunflower",
"Agricultural Production Oilseeds Sunflower Kharif",
"Agricultural Production Oilseeds Sunflower Rabi",
"Agricultural Production Oilseeds Soyabean Kharif"}
var*/var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('data.csv')
});

var myWriteStream = require("fs").createWriteStream("test.json")

lineReader.on('line', function(line) {
    var jsonFromLine = {};

    var lineSplit = line.split(',');

    jsonFromLine.Particulars = lineSplit[0];
    jsonFromLine.Unit = lineSplit[24];
    res.push(jsonFromLine);
});


lineReader.on('close', function(line) {
 var getdata=res.filter(function(data){
 	var x="true";
 	if(x==data.Particulars.includes("oilseeds"))
 	{
 	return data.Unit
 	} 
 })
 console.log(getdata);
 });

lineReader.on('close', function(line) {
    myWriteStream.write(JSON.stringify(res, null, 2))
});




