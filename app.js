var app = require('./src/lib/app')

app.use(function (req, res, next) {
    // do logging

    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // console.log(req);
    console.log('###### Request Triggered ######');

    console.log('From :' + req.url);
    if (req.body !== null) {
        console.log('With a body content :' + JSON.stringify(req.body));
    }
    console.log('###############################');
    console.log('');

    next(); // make sure we go to the next routes and don't stop here
});
app.listen(process.env.PORT||3000)
// app.set('port', (process.env.PORT || 5000));
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://movies:BestTrinome3@ds131621.mlab.com:31621/movies', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
