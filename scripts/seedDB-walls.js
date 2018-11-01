const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/WallOfKindness"
);

const wallSeed = [
  {
    name: "Aboozar Mojdeh",
    
		email: "aboo@gmail.com",
		
		isDonor: true,
 		wallName: "love",
 		category: '[food]',
 		gifts: '[cake]',
    	city: "toronto",
  		zipCode: "22222",
        
    dateAdded: new Date(Date.now())
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(wallSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
