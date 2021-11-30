// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api",(req,res) => {
     var d1=new Date().valueOf();
     var d2= new Date().toUTCString();
      console.log(d1);
      console.log(d2);
      res.json({ unix : d1,utc : d2 });
})

app.get("/api/:timestamp" , (req , res) => {
  console.log(req);
  if(req.params.timestamp.length == 13)
 {
  var d1 = req.params.timestamp*1;
  var d2 = new Date(req.params.timestamp * 1).toUTCString();
 }
  else if(req.params.timestamp)
    {
      d1 = new Date(req.params.timestamp).valueOf();
      d2 = new Date(req.params.timestamp).toUTCString();
    }
    else {
      d1=new Date().valueOf();
      d2= new Date().toUTCString();
    }

    
  console.log(d1);
 
  console.log(d2);
  if(d2 == "Invalid Date")
    res.json({ error : d2});
  else
  res.json({ unix : d1,utc : d2 });
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
