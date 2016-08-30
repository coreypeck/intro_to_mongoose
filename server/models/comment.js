var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// subdocument
var commentSchema = new Schema({
  postedBy: String,
  content: { type: String, required: true }
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
