var rp = require('request-promise');




const URL = //API URL;

const BODY = //Body of request;

const NUMBER_OF_REQUEST = //number of requests to be send asynchronously;
var j = 0;

var options = {
    method: 'POST',

                   uri: URL,

                   body: BODY,

                   json: true // Automatically stringifies the body to JSON

              };


for (var i = 0; i < NUMBER_OF_REQUEST; i++) {

    const before = Date.now();

    rp(options)
.then(function (parsedBody) {

        const after = Date.now();
        const difference = after - before;

        console.log(j++);
        console.log("Execution Time",difference/1000,"s");

        console.log(parsedBody);


	var fs = require('fs');
	var csvWriter = require('csv-write-stream');
	var writer = csvWriter({sendHeaders: false});
        writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}));    
        writer.write({Index: j, Before_Time: before, After_Time: after, Execution_Time: (after-before)/1000});
        writer.end();

    })
.catch(function (err) {

        console.log(err);
    });

};
