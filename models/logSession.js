var mongoose = require('mongoose');

var LogSessionSchema = new mongoose.Schema({
  sessionId : { type: Number},
  content : {type: String, required: true},
  created_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('LogSession', LogSessionSchema);
