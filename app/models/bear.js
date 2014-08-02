var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');

var Bear = mongoose.model("Bear", {
	name : String
});

module.exports = mongoose.model('Bear', Bear);