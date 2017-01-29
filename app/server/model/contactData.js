import mongoose from 'mongoose';


let contactSchema = mongoose.Schema({
	name: String,
	email: String,
	message: String,
});

let conData = mongoose.model('ConData', contactSchema);
model.exports = ConData;

People.find(function(err, people) {
	if(err) return console.error(err);
	if(people.length) return;
	
	new People({
		name: 'Sam',
		emails: 'testing@email.com',
		message: 'a message ',
	}).save();
	
	new People({
		name: 'Ashley',
		emails: 'testing2@email.com',
		message: 'a message stuff',
	}).save();
});


