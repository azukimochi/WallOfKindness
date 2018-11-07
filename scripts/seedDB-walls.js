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
 		category: 'food',
 		gifts: ['cake'],
    	city: "toronto",
			zipCode: "125 parkway forest drive",
			longitude:-79.3832,
			latitude:43.6532,
        
    dateAdded: new Date(Date.now())
  },
  {
    name: "Aparajita",
    
		email: "Aparajita@gmail.com",
		
		isDonor: true,
 		wallName: "Kind",
 		category: 'food',
 		gifts: ['burger'],
    	city: "toronto",
  		zipCode: 4444,
			longitude:-79.342424,
			latitude:43.775336,
        
    dateAdded: new Date(Date.now())
  },
  {
    name: "Luke",
    
		email: "Luke@gmail.com",
		
		isDonor: true,
 		wallName: "Calm",
 		category: 'clothes',
 		gifts: ['shoe'],
    	city: "toronto",
  		zipCode: 5555,
			longitude:-79.5083,
			latitude:43.8372,
        
    dateAdded: new Date(Date.now())
  },
  {
    name: "Marshall",
    
		email: "Marshall@gmail.com",
		
		isDonor: true,
 		wallName: "Sport",
 		category: 'clothes',
 		gifts: ['cap'],
    	city: "toronto",
  		zipCode: 8888,
			longitude:-79.3441,
			latitude:43.7771,
        
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
