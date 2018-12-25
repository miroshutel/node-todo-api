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
        //deletemany
        // db.collection('Todos').deleteMany({
        //     text: 'Eat lunch'
        // }).then((res) => {
        //     console.log(res);
        // });

        //deleteone
        // db.collection('Todos').deleteOne({
        //     text: 'Eat lunch'
        // }).then((res) => {
        //     console.log(res);
        // });


        //findanddeleteone
        // db.collection('Todos').findOneAndDelete({
        //     completed: false
        // }).then((res) => {
        //     console.log(res);
        // });

        db.collection('Users').deleteMany({
            name: 'Miro'
        });

        db.collection('Users').findOneAndDelete({
            _id: new ObjectID("5c0c4041c0b9752d002cf42d")
        }).then((res) => {
            console.log(`delete by id ${res}`);
        });
        //client.close();
    }
);