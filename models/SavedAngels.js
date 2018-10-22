
const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const SavedAngelsSchema = new Schema({
	// `guestId` is a foreign key that stores the Wall id of the Customer
    guestId: {type: Schema.Types.ObjectId,ref: "Walls",required: true},
    // `angelId:` is a foreign key that stores the Wall id of the saved angel
    angelId: {type: Schema.Types.ObjectId, ref: "Walls", required: true},
    // distance is needed for distance calculation with goelocator
    distance: {type: Number, required: false}
});


const SavedAngels = mongoose.model("SavedAngels", SavedAngelsSchema);


module.exports = SavedAngels;
