var res = [];
var getdata = [];
var fs = require("fs");
var lineReader = require('readline').createInterface({
   input: require('fs').createReadStream('data.csv')
});
var myWriteStream = require("fs").createWriteStream("Part-1(b).json")
lineReader.on('line', function(line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.Particulars = lineSplit[0];
    jsonFromLine.Unit = lineSplit[24];
  res.push(jsonFromLine);
})
lineReader.on('close', function(line) {
	getdata=res.filter(function(data){
    if(data.Particulars.includes("Agricultural Production Foodgrains"))
     {
       if(!data.Particulars.includes("Rice") && !data.Particulars.includes("Wheat") 
       	&& !data.Particulars.includes("Area") && !data.Particulars.includes("Volume")
       	&& !data.Particulars.includes("Yield") && !data.Particulars.includes("Coarse Cereals"))
        {
          return data.Particulars;
        }
     }
 });   
getdata.sort((a,b)=>(b.Unit-a.Unit));
 console.log(getdata);
   myWriteStream.write(JSON.stringify(getdata, null, 2))
});

