const moongose = require('mongoose');
const Schema = moongose.Schema;

const userProfile = new Schema({
    
    email:{
        type:String,
        required:true
    },

    password: {
        type:String,
        required:true
    }

});

const userprofiling = moongose.model('userprofiling',userProfile);

module.exports = userprofiling;

