const mongoose = require('../database/index');

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    Participation: {
        type: Number,
        require: true
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;