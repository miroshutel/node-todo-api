// const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require("mongodb");

MongoClient.connect(
    "mongodb://localhost:27017/ToDoApp", {
        useNewUrlParser: true
    },
    (err, client) => {
        if (err) {
            return console.log("unable to connect to mongo db server");
        }
        console.log("connected to mongodb server");
        var db = client.db("ToDoApp");

        // db.collection('Todos').find({
        //     _id: new ObjectID("5c214217355ca6fa156aa510")
        // }).toArray().then((docs) => {
        //     console.log("Todos");
        //     console.log(JSON.stringify(docs, undefined, 2))
        // }, (err) => {
        //     console.log("unable to fetch Todos", err);
        // });

        // db.collection('Todos').find().count().then((count) => {
        //     console.log(`Todos count: ${count}`);
        // }, (err) => {
        //     console.log("unable to fetch Todos", err);
        // });
        db.collection('Users').find({
            name: 'Miro'
        }).toArray().then((docs) => {
            console.log("Users");
            console.log(JSON.stringify(docs, undefined, 2))
        }, (err) => {
            console.log("unable to fetch Todos", err);
        });

        //client.close();
    }
);