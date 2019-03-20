var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://localhost/insurance",
    { useNewUrlParser: true }
);

var dbConnect = mongoose.connection;
if (!dbConnect) {
    console.log("Sorry Connection is not established");
    return;
}

//Schema creation
var insuranceProvider = mongoose.Schema({
    provider_name: String,
    address: Object,
    provider_website: String,
    contact_info: Object,
    working_days: Array,
    no_of_branches: Number,
    branch_locations: Array,
    address_of_branch: Object
});

var insuranceInformation = mongoose.Schema({
    type_of_insurance: String,
    insurance_details: Object
});
var providerLoginInfo = mongoose.Schema({
    username: String,
    password: String,
    contact_email: String,
    contact_number: String,
    insurance_company_name: String,
    headOffice_address: Object,
    website: String
});
var customerInfo = mongoose.Schema({
    customer_id: String,
    customer_name: String,
    selected_username: String,
    password: String,
    email_address: String,
    contact_number: Number,
    mobile_number: Number,
    date_of_birth: String,
    address: Object,
    city: String
});


var user = mongoose.Schema({
    username: String,
    password: String
})
module.exports = {
    mongoose,
    insuranceProvider,
    customerInfo,
    providerLoginInfo,
    insuranceInformation,
    user
};

