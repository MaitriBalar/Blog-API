const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Blog = new Schema({
    title : String,
    image : String,
    discription : String,
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "category"
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "user"
    }
});

module.exports = mongoose.model('blog', Blog);