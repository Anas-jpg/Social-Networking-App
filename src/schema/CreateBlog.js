const moongose = require('mongoose');
const Schema = moongose.Schema;

const blog = new Schema({
    
  title: String,
  content: String,
  image: String


});

const blogcontent = moongose.model('blogcontent',blog);

module.exports = blogcontent;

