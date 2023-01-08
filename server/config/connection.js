const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBURI || 'mongodb://127.0.0.1:27017/shopping-cart-ts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;