var app = require('./src/lib/app')


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
