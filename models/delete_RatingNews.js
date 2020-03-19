// var mongodb = require('./db');
const MongoClient = require('mongodb').MongoClient;
const settings = require('../settings');
const connectionString = 'mongodb://localhost:27017/';

module.exports = async function (user, url) {
    // do something
    const db = await MongoClient.connect(connectionString + settings.db);
    // if (err) {
    //     throw err;
    // }
    // 读取 users 集合 
    const MyCollection = db.collection('users');
    const docs = await MyCollection.findOne({
        name: user
    });
    if (docs == null) {
        return null
    }


    db.collection("users").updateOne(
        { name: user },
        { $pull: { rating: { url: url } } }
    )





}