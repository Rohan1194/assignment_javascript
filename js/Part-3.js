const fs = require('fs');
var lineReader = require('readline').createInterface({
    input: fs.createReadStream('data.csv')
});
var writableFormat = require('fs').createWriteStream('Part-3.json')
    var out = []
    var i= 0;
    var getdata=[]
    var ap=[]
    var ka=[]
    var ke=[]
    var tn=[]
    var final=[]
    var obj={}
    var jsonFromLine
    lineReader.on('line', function(line) {
    var lineSplit = line.split(',');
    var array=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
    for(var z=15;z<25;z++)
    {
     res={Particulars:lineSplit[0] ,Year:array[z],Value:lineSplit[z]}
     out.push(res)       
    }
    });

    lineReader.on('close', function(line) {
   getdata=out.filter(function(data){
    obj={Value:parseFloat(data.Value), Year:data.Year}
     switch(data.Particulars)
       {
        case 'Agricultural Production Foodgrains Rice Area Andhra Pradesh': ap.push(obj);
         break;    
        case 'Agricultural Production Foodgrains Rice Area Karnataka': ka.push(obj);
         break;    
        case 'Agricultural Production Foodgrains Rice Area Kerala': ke.push(obj);
         break;    
         case 'Agricultural Production Foodgrains Rice Area Tamil Nadu': tn.push(obj);
         break;    
         }
 });
   final.push(ap,ka,ke,tn)
   console.log(final);
    writableFormat.write(JSON.stringify(final, null, 2))
});
