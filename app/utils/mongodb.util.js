// Truy cập đến thư viện mongo
const {MongoClient} = require("mongodb");
// import { MongoClient } from 'mongodb';

// Định nghĩa lớp giúp kết nối với MongoDB
class MongoDB {
    static connect = async (uri) => {
        if(this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}


module.exports = MongoDB;