const {MongoClient} = require('mongodb');

const dbname = "otakustore";

const url = "mongodb://wachiraton11:<password>@cluster0-shard-00-00.skuwb.mongodb.net:27017,cluster0-shard-00-01.skuwb.mongodb.net:27017,cluster0-shard-00-02.skuwb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7twvaf-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(url, {
    useUnifiedTopology: true
}
)

module.exports = async () => {

    await client.connect();

    return client.db(dbname);
}