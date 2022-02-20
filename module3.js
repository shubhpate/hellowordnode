const fs = require("fs");
var ws=fs.createWriteStream("outfile.txt");
var data ="this is testing for writestreame";
var data1="testing with two line";
ws.write(data,'utf8');
ws.write(data1,'utf8');
ws.end();
ws.on("finish",function(){
console.log("writing completed");
});
ws.on("error",function(err){
    console.error("error occured" + err);
})