
const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const SavedDonorsSchema = new Schema({
	
    // `donorId:` is a foreign key that stores the Wall id of the saved donor
    donorId: {type: Schema.Types.ObjectId, ref: "Walls", required: true},
    // distance is needed for distance calculation with goelocator
    distance: {type: Number, required: false}
});


const SavedDonors = mongoose.model("SavedDonors", SavedDonorsSchema);


module.exports = SavedDonors;
