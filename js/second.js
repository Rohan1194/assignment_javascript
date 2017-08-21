var a = [];
var b = [];
var fs = require('fs')
var readline = require('readline')
var lineReader = readline.createInterface({
    input: require('fs').createReadStream('data.csv', 'UTF-8')
});
var writableFormat = require('fs').createWriteStream('commercialdata.json')
lineReader.on('line', function(line) {
    var jsonFromLine = {}
    var x;
    var z="lineSplit"
    var y="jsonFromLine.year";
    var lineSplit = line.split(',')
    //console.log(z + [x]);
    jsonFromLine.Particulars = lineSplit[0];
   for(x=4;x<27;x++)
    {
    	var p=y.concat(x);
    /*    console.log(p + "=" +  z  + x );*/
    	p =  z + "[" + x + "]";
    }
    /*jsonFromLine.year4 = lineSplit[4]
    jsonFromLine.year5 = lineSplit[5]
    jsonFromLine.year6 = lineSplit[6]
    jsonFromLine.year7 = lineSplit[7]
    jsonFromLine.year8 = lineSplit[8]
    jsonFromLine.year9 = lineSplit[9]
    jsonFromLine.year10 = lineSplit[10]
    jsonFromLine.year11 = lineSplit[11]
    jsonFromLine.year12 = lineSplit[12]
    jsonFromLine.year13 = lineSplit[13]
    jsonFromLine.year14 = lineSplit[14]
    jsonFromLine.year15 = lineSplit[15]
    jsonFromLine.year16 = lineSplit[16]
    jsonFromLine.year17 = lineSplit[17]
    jsonFromLine.year18 = lineSplit[18]
    jsonFromLine.year19 = lineSplit[19]
    jsonFromLine.year20 = lineSplit[20]
    jsonFromLine.year21 = lineSplit[21]
    jsonFromLine.year22 = lineSplit[22]
    jsonFromLine.year23 = lineSplit[23]
    jsonFromLine.year24 = lineSplit[24]
    jsonFromLine.year25 = lineSplit[25]
    jsonFromLine.year26 = lineSplit[26]
*/    if (jsonFromLine.year == "NA") {
        jsonFromLine.year = 0
    }
     for(x=4;x<27;x++)
    {
    	var p=y.concat(x);
         if(p == "NA")
         {
         	p = 0;
         }
    }
     

   /* if (jsonFromLine.year4 == "NA") {
        jsonFromLine.year4 = 0
    }
    if (jsonFromLine.year5 == "NA") {
        jsonFromLine.year5 = 0
    }
    if (jsonFromLine.year6 == "NA") {
        jsonFromLine.year6 = 0
    }
    if (jsonFromLine.year7 == "NA") {
        jsonFromLine.year7 = 0
    }
    if (jsonFromLine.year8 == "NA") {
        jsonFromLine.year8 = 0
    }
    if (jsonFromLine.year9 == "NA") {
        jsonFromLine.year9 = 0
    }
    if (jsonFromLine.year10 == "NA") {
        jsonFromLine.year10 = 0
    }
    if (jsonFromLine.year11 == "NA") {
        jsonFromLine.year11 = 0
    }
    if (jsonFromLine.year12 == "NA") {
        jsonFromLine.year12 = 0
    }
    if (jsonFromLine.year13 == "NA") {
        jsonFromLine.year13 = 0
    }
    if (jsonFromLine.year14 == "NA") {
        jsonFromLine.year14 = 0
    }
    if (jsonFromLine.year15 == "NA") {
        jsonFromLine.year15 = 0
    }
    if (jsonFromLine.year16 == "NA") {
        jsonFromLine.year16 = 0
    }
    if (jsonFromLine.year17 == "NA") {
        jsonFromLine.year17 = 0
    }
    if (jsonFromLine.year18 == "NA") {
        jsonFromLine.year18 = 0
    }
    if (jsonFromLine.year19 == "NA") {
        jsonFromLine.year19 = 0
    }
    if (jsonFromLine.year20 == "NA") {
        jsonFromLine.year20 = 0
    }
    if (jsonFromLine.year21 == "NA") {
        jsonFromLine.year21 = 0
    }
    if (jsonFromLine.year22 == "NA") {
        jsonFromLine.year22 = 0
    }
    if (jsonFromLine.year23 == "NA") {
        jsonFromLine.year23 = 0
    }
    if (jsonFromLine.year24 == "NA") {
        jsonFromLine.year24 = 0
    }
    if (jsonFromLine.year25 == "NA") {
        jsonFromLine.year25 = 0
    }
    if (jsonFromLine.year26 == "NA") {
        jsonFromLine.year26 = 0
    }*/
    a.push(jsonFromLine)
});
lineReader.on('close', function(line) {
    b = a.filter(function(data) {
        return data.Particulars.includes("Agricultural Production Commercial Crops")
    });
});

for(var s=4;s<28;s++)
{
lineReader.on('close', function(line) {
      var yrs= "yr".concat(s);
      console.log(yrs);
       yrs= b.reduce((c, data) => {
        var qq="year".concat(s);  
        c += parseFloat(data.qq)
        return c
    }, 0)
});
lineReader.on('close', function(line) {
   writableFormat.write(JSON.stringify(yrs, null, 2))
});
}

/*lineReader.on('close', function(line) {

    yr5 = b.reduce((c, data) => {

        c += parseFloat(data.year5)
        return c
    }, 0)

});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr5, null, 2))
});
lineReader.on('close', function(line) {

    yr6 = b.reduce((c, data) => {

        c += parseFloat(data.year6)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr6, null, 2))
});
lineReader.on('close', function(line) {

    yr7 = b.reduce((c, data) => {

        c += parseFloat(data.year7)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr7, null, 2))
});
lineReader.on('close', function(line) {

    yr8 = b.reduce((c, data) => {

        c += parseFloat(data.year8)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr8, null, 2))
});
lineReader.on('close', function(line) {

    yr9 = b.reduce((c, data) => {

        c += parseFloat(data.year9)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr9, null, 2))
});
lineReader.on('close', function(line) {

    yr10 = b.reduce((c, data) => {

        c += parseFloat(data.year10)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr10, null, 2))
});
lineReader.on('close', function(line) {

    yr11 = b.reduce((c, data) => {

        c += parseFloat(data.year11)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr11, null, 2))
});
lineReader.on('close', function(line) {

    yr12 = b.reduce((c, data) => {

        c += parseFloat(data.year12)
        return c
    }, 0)

});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr12, null, 2))
});
lineReader.on('close', function(line) {

    yr13 = b.reduce((c, data) => {

        c += parseFloat(data.year13)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr13, null, 2))
});
lineReader.on('close', function(line) {

    yr15 = b.reduce((c, data) => {

        c += parseFloat(data.year14)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr15, null, 2))
});
lineReader.on('close', function(line) {

    yr16 = b.reduce((c, data) => {

        c += parseFloat(data.year15)
        return c
    }, 0)

});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr16, null, 2))
});
lineReader.on('close', function(line) {

    yr17 = b.reduce((c, data) => {

        c += parseFloat(data.year16)
        return c
    }, 0)


    lineReader.on('close', function(line) {
        writableFormat.write(JSON.stringify(yr7, null, 2))
    });
});
lineReader.on('close', function(line) {

    yr18 = b.reduce((c, data) => {

        c += parseFloat(data.year17)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr18, null, 2))
});
lineReader.on('close', function(line) {

    yr19 = b.reduce((c, data) => {

        c += parseFloat(data.year18)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr19, null, 2))
});
lineReader.on('close', function(line) {

    yr20 = b.reduce((c, data) => {

        c += parseFloat(data.year19)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr20, null, 2))
});
lineReader.on('close', function(line) {

    yr21 = b.reduce((c, data) => {

        c += parseFloat(data.year20)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr21, null, 2))
});
lineReader.on('close', function(line) {

    yr22 = b.reduce((c, data) => {

        c += parseFloat(data.year21)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr22, null, 2))
});
lineReader.on('close', function(line) {

    yr23 = b.reduce((c, data) => {

        c += parseFloat(data.year22)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr23, null, 2))
});
lineReader.on('close', function(line) {

    yr24 = b.reduce((c, data) => {

        c += parseFloat(data.year23)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr24, null, 2))
});
lineReader.on('close', function(line) {

    yr25 = b.reduce((c, data) => {

        c += parseFloat(data.year24)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr25, null, 2))
});
lineReader.on('close', function(line) {

    yr26 = b.reduce((c, data) => {

        c += parseFloat(data.year25)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr26, null, 2))
});
lineReader.on('close', function(line) {

    yr27 = b.reduce((c, data) => {

        c += parseFloat(data.year26)
        return c
    }, 0)


});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(yr27, null, 2))
});*/