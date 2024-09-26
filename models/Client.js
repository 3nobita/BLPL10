const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mobileNo: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\+?[0-9]{10,15}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    otp: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{6}$/.test(v);
            },
            message: props => `${props.value} is not a valid OTP!`
        }
    },
    loanamount:String,
    emailId:String,

}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);
