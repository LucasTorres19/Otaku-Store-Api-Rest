const {MongoClient} = require('mongodb');

const dbname = "otakustore";

const url = "mongodb://localhost:27017";


const client = new MongoClient(url, {
    useUnifiedTopology: true
}
)

module.exports = async () => {

    await client.connect();

    return client.db(dbname);
}