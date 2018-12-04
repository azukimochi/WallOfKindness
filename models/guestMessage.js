
const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const guestMessageSchema = new Schema({

   
    messageType: {type: String, required: false},

    

   
    subject: {type: String, required: true},

    
    messageText: {type: String,required: false},

    // `senderID` is a foreign key that stores the Wall id
    // of the message sender or reviewer
    senderId: {type: Schema.Types.ObjectId, ref: "Walls", required: true},

    // `toID` is a foreign key that stores a Wall id that the message
    // is to be sent to
    toId: {type: Schema.Types.ObjectId,ref: "Walls", required: true}

});

// This creates our model from the above schema, using mongoose's model method
const guestMessage = mongoose.model("guestMessage", guestMessageSchema);

// Export the ccMessage model
module.exports = guestMessage;
