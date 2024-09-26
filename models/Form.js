// module/Form.js
const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    firstName: String,
    loanamount:String,
    lastName:String,
    mobile: String,
    OTP:String,

});

module.exports = mongoose.model('Form', FormSchema);
