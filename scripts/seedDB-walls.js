const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/WallOfKindness"
);

const wallSeed = [
  {
    name: "Aboozar Mojdeh",
    email: "aboozar.mojdeh@gmail.com",
    isDonor: true,
    wallName: "love",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "melon", category: "Food", date: "" },{ item: "coat", category: "Clothes", date: "" }],
    city: "toronto",
    address: "9471 yonge street, richmondhill, l4c0z5",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Karen Kua",
    email: "karen@gmail.com",
    isDonor: true,
    wallName: "friends",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "cake", category: "Food", date: "" },{ item: "jeans", category: "Clothes", date: "" }],
    city: "toronto",
    address: "120 Eglinton Ave, Toronto, ON M4P 1A6",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Aparajita",
    email: "aparajita@gmail.com",
    isDonor: true,
    wallName: "kindness",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "cake", category: "Food", date: "" },{ item: "jeans", category: "Clothes", date: "" }],
    city: "toronto",
    address: "5120 Yonge St, North York, ON M2N 5N9",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Marshall",
    email: "marshall@gmail.com",
    isDonor: true,
    wallName: "spirit",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "roast beef", category: "Food", date: "" },{ item: "jeans", category: "Clothes", date: "" }],
    city: "toronto",
    address: "130 St George St, Toronto, ON M5S 1A5",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Elmira",
    email: "elmira@gmail.com",
    isDonor: true,
    wallName: "beauty",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "pasta", category: "Food", date: "" },{ item: "skirt", category: "Clothes", date: "" }],
    city: "toronto",
    address: "9471 yonge street, richmondhill, l4c0z5",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Martin",
    email: "martin@gmail.com",
    isDonor: true,
    wallName: "pride",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "hamburger", category: "Food", date: "" }],
    city: "toronto",
    address: "1 Atkinson St, Richmond Hill, ON L4C 0H5",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Amir",
    email: "amir@gmail.com",
    isDonor: true,
    wallName: "friendship",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "shoes", category: "Clothes", date: "" }],
    city: "toronto",
    address: "9700 Yonge St, Richmond Hill, ON L4C 1V8",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Parisa",
    email: "parisa@gmail.com",
    isDonor: true,
    wallName: "laugh",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "chicken", category: "Food", date: "" }],
    city: "toronto",
    address: "735 16th Ave, Richmond Hill, ON L4C 7A8",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Ryan",
    email: "ryan@gmail.com",
    isDonor: true,
    wallName: "love",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "pizza", category: "Food", date: "" },{ item: "cap", category: "Clothes", date: "" }],
    city: "toronto",
    address: "200 Interchange Way, Vaughan, ON L4K 5C3",
    dateAdded: new Date(Date.now())
	},
	{
    name: "IKEA",
    email: "ikea@gmail.com",
    isDonor: true,
    wallName: "help",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "meat ball", category: "Food", date: "" },{ item: "shoes", category: "Clothes", date: "" }],
    city: "toronto",
    address: "15 Provost Dr, North York, ON M2K 2X9",
    dateAdded: new Date(Date.now())
	},
	{
    name: "UofT",
    email: "uoft@gmail.com",
    isDonor: true,
    wallName: "love and life",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "pizza", category: "Food", date: "" },{ item: "chicken", category: "Clothes", date: "" }],
    city: "toronto",
    address: "27 King's College Cir, Toronto, ON M5S 3H7",
    dateAdded: new Date(Date.now())
	},
	{
    name: "WeWork",
    email: "wework@gmail.com",
    isDonor: true,
    wallName: "kindness",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "pasta", category: "Food", date: "" },{ item: "trousers", category: "Clothes", date: "" }],
    city: "toronto",
    address: "240 Richmond Street W, Toronto",
    dateAdded: new Date(Date.now())
	},
	{
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    isDonor: true,
    wallName: "Bret",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "rice", category: "Food", date: "" },{ item: "coat", category: "Clothes", date: "" }],
    city: "toronto",
    address: "455 Gordon Baker Rd, North York, ON M2H 4H2",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    isDonor: true,
    wallName: "Ervin",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "fried chicken", category: "Food", date: "" },{ item: "coat", category: "Clothes", date: "" }],
    city: "toronto",
    address: "700 Centre St, Thornhill, ON L4J 0A7",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    isDonor: true,
    wallName: "Clementine",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "roast beef", category: "Food", date: "" },{ item: "socks", category: "Clothes", date: "" }],
    city: "toronto",
    address: "700 Centre St, Thornhill, ON L4J 0A7",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    isDonor: true,
    wallName: "Patricia",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "bologna sandwich", category: "Food", date: "" },{ item: "suits", category: "Clothes", date: "" }],
    city: "toronto",
    address: "10520 Yonge St, Richmond Hill, ON L4C 3C7",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    isDonor: true,
    wallName: "Chelsey",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "cheese", category: "Food", date: "" },{ item: "jacket", category: "Clothes", date: "" }],
    city: "toronto",
    address: "45 Red Maple Rd, Richmond Hill, ON L4B 4M6",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    isDonor: true,
    wallName: "Dennis",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "banana", category: "Food", date: "" },{ item: "bag", category: "Clothes", date: "" }],
    city: "toronto",
    address: "200 Windflower Gate, Woodbridge, ON L4L 9L3",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    isDonor: true,
    wallName: "Kurtis",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "sausage", category: "Food", date: "" },{ item: "coat", category: "Clothes", date: "" }],
    city: "toronto",
    address: "10 Royal Orchard Blvd, Thornhill, ON L3T 3C3",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Nicholas Runolfsdottir",
    email: "Sherwood@rosamond.me",
    isDonor: true,
    wallName: "Nicholas",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "rice", category: "Food", date: "" },{ item: "tshirt", category: "Clothes", date: "" }],
    city: "toronto",
    address: "220 Yonge St, Toronto, ON M5B 2H1",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    isDonor: true,
    wallName: "Glenna",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "rice", category: "Food", date: "" },{ item: "shoes", category: "Clothes", date: "" }],
    city: "toronto",
    address: "260 Queen Street West, Toronto, ON M5V 1Z8",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Clementina DuBuque",
    email: "Chaim@dana.io",
    isDonor: true,
    wallName: "Clementina",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "sausage", category: "Food", date: "" },{ item: "shoes", category: "Clothes", date: "" }],
    city: "toronto",
    address: "279 Yonge Street,	Toronto, ON M5B 1N8",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Mcfarland Daugherty",
    email: "mcfarlanddaugherty@dyno.com",
    isDonor: true,
    wallName: "Mcfarland",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "cherries", category: "Food", date: "" },{ item: "coat", category: "Clothes", date: "" }],
    city: "toronto",
    address: "181 Bay St, Toronto, ON M5J 2T3",
    dateAdded: new Date(Date.now())
  },
	{
    name: "Galloway Ramos",
    email: "gallowayramos@bedlam.com",
    isDonor: true,
    wallName: "Galloway",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "banana", category: "Food", date: "" },{ item: "trousers", category: "Clothes", date: "" }],
    city: "toronto",
    address: "555 University Ave., Toronto, ON M5G 1X8",
    dateAdded: new Date(Date.now())
  },
  {
    name: "Martin Flex",
    email: "martinflex@gmail.com",
    isDonor: true,
    wallName: "love",
    gifts: [{ item: "snack", category: "Food", date: "" },{ item: "melon", category: "Food", date: "" },{ item: "coat", category: "Clothes", date: "" }],
    city: "toronto",
    address: "9471 yonge street, richmondhill, l4c0z5",
    dateAdded: new Date(Date.now())
	},
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
