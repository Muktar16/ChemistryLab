const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

// const FacultySchema = mongoose.Schema({
//     name: {type: String, required: 'Name Field can\'t be empty',},
//     email: {type: String, required: 'Email can\'t be empty', unique: true},
//     date:'',
//     note:''
// })

var FacultySchema = new mongoose.Schema({
    name: String,
    designation: String,
    image: String,
    qualification: String,
    email: {type: String, required: 'Email can\'t be empty', unique: true},
    publications: [],
    profile: [
      {
        linkedInProfile:String,
        facebookProfile: String,
        googleScholarProfile: String,
        RechargeGateProfile: String,
      }
    ]
});

// Custom validation for email
FacultySchema.path('email').validate((val) => {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


module.exports = mongoose.model("Faculty",FacultySchema);