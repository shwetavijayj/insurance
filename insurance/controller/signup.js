var mongo = require('../mongoConnection');
var customerModel = mongo.mongoose.model('Customer', mongo.customerInfo, "customerinfo");