const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/WallofKindness"
);

const wallSeed = [
  {
    firstName: "Aboozar",
    middleName: "Aboo",
    lastName: "Mojdeh",
    userName: "aboozarmojdeh",
    email: "angel1@wallofkindness.com",
    isAngle: false,
    wallName: "",
    category: ["Breads, rolls, biscuits", "tarts"],
    gifts: ["Apple tarts"],
    streetAddress1: "9471 yonge street",
    streetAddress2: "Apt. 5",
    city: "richmondhill",
    stateOrProvince: "ON",
    zipCode: "l4c6z9",
    county: "Canada",
    longitude: -79.43039,
    latitude: 43.88493,
    phoneNumber: "647-555-55555",
    dateAdded: new Date(Date.now())
  }
];

db.Walls.remove({})
  .then(() => db.Walls.collection.insertMany(wallSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
