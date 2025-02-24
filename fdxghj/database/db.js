const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://ganesh9728286448:aVG9YsNGjZuCSpmJ@cluster0.3p2vw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);

const dbName = 'sample_mflix';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
   

    return db;


}
module.exports={main}