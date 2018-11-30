const MongoContext = require('../models/mongodb');

const collection = 'fcm_tokens';

exports.findOne = async (conditions) => {
    const mongoClient = await MongoContext.getInstance();
    return mongoClient.collection(collection).findOne(conditions);
};

exports.createOrUpdate = async (conditions, data) => {
    const mongoClient = await MongoContext.getInstance();
    return mongoClient.collection(collection).updateOne(conditions, { $set: data }, { upsert: true });
};

module.exports = exports;
