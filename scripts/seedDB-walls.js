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
    email: "donor1@wallofkindness.com",
    isDonor: false,
    wallName: "Love",
    category: ["Breads"],
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
  },
  {
    firstName: "John",
    middleName: "Johny",
    lastName: "Mckollin",
    userName: "johnMc",
    email: "donor2@wallofkindness.com",
    isDonor: false,
    wallName: "Loving people",
    category: ["Clothes"],
    gifts: ["Apple tarts"],
    streetAddress1: "9472 yonge street",
    streetAddress2: "Apt. 5",
    city: "richmondhill",
    stateOrProvince: "ON",
    zipCode: "l4c6z10",
    county: "Canada",
    longitude: -78.43039,
    latitude: 42.88493,
    phoneNumber: "647-222-2222",
    dateAdded: new Date(Date.now())
  }
];

db.Walls.remove({})
  .then(() => db.Walls.collection.insertMany(wallSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
