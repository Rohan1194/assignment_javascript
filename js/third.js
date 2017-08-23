var a = [];
var getdata = [];
var fs = require('fs')
var readline = require('readline')
var lineReader = readline.createInterface({
    input: require('fs').createReadStream('data.csv', 'UTF-8')
});
var writableFormat = require('fs').createWriteStream('third.json')
lineReader.on('line', function(line) {
    var jsonFromLine={} 
    var lineSplit = line.split(',') 
    	if(lineSplit[0].includes("Agricultural Production Foodgrains Rice Area"))
    	{
    	    jsonFromLine = { State:lineSplit[0],2005:parseFloat(lineSplit[15]),2006:parseFloat(lineSplit[16]),2007:parseFloat(lineSplit[17]),
    		2008:parseFloat(lineSplit[18]),2009:parseFloat(lineSplit[19]),2010:parseFloat(lineSplit[20]),2011:parseFloat(lineSplit[21]),
    		2012:parseFloat(lineSplit[22]),2013:parseFloat(lineSplit[23]),2014:parseFloat(lineSplit[24])}
    		a.push(jsonFromLine)
         }
    });
lineReader.on('close', function(line) {
	getdata=a.filter(function(data){
   switch(data.State)
         {
        case 'Agricultural Production Foodgrains Rice Area Andhra Pradesh': return data;
         break;    
        case 'Agricultural Production Foodgrains Rice Area Karnataka': return data;
         break;    
        case 'Agricultural Production Foodgrains Rice Area Kerala': return data;
         break;    
         case 'Agricultural Production Foodgrains Rice Area Tamil Nadu': return data;
         break;    
         }
 });   
 console.log(getdata);
   writableFormat.write(JSON.stringify(getdata, null, 2))
});