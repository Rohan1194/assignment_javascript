const fs = require('fs');
var lineReader = require('readline').createInterface({
    input: fs.createReadStream('data.csv')
});
var writableFormat = require('fs').createWriteStream('Part-3.json')
var out = [],
    year = "1993";
var result = [],
    jasonData = {};
lineReader.on('line', function(line) {
    var lineSplit = line.split(',');
    jasonData.Particulars = lineSplit[0];
    for (var i = 4; i < 26; i++) {
        var arr = ['Agricultural Production Foodgrains Rice Area Andhra Pradesh', 'Agricultural Production Foodgrains Rice Area Karnataka', 'Agricultural Production Foodgrains Rice Area Kerala', 'Agricultural Production Foodgrains Rice Area Tamil Nadu']
        for (var j in arr) {
            if (arr[j] === jasonData.Particulars) {
                var obj = { Particulars: lineSplit[0], Value: lineSplit[i], Year: parseInt(1989 + i) }
                if (obj.Value == 'NA') {
                    obj.Value = 0;
                }
                out.push(obj)
            }
        }
    }
});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(out, null, 2))
    console.log(out);
 
});
