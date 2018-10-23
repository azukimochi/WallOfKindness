
const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const SavedSearchesSchema = new Schema({
    // `categoryId:` is a foreign key that stores a Food Category id
    categoryId: {type: Schema.Types.ObjectId, ref: "Category", required: false},
	// `guestId` is a foreign key that stores the Wall id of the Customer
    guestId: {type: Schema.Types.ObjectId,ref: "Walls",required: true},
    // distance is needed for distance calculation with goelocator
    distance: {type: Number, required: false}
});

const SavedSearches = mongoose.model("SavedSearches", SavedSearchesSchema);

module.exports = SavedSearches;
