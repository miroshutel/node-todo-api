// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/ToDoApp",
  {
    useNewUrlParser: true
  },
  (err, client) => {
    if (err) {
      return console.log("unable to connect to mongo db server");
    }
    console.log("connected to mongodb server");
    var db = client.db("ToDoApp");

    // db.collection('Todos').insertOne({
    //     'text': 'Someting to do',
    //     'completed': false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection("Users").insertOne(
    //   {
    //     name: "Miro",
    //     age: 31,
    //     location: "Afula"
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert user", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );
    client.close();
  }
);
