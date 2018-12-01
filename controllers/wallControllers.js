const db = require("../models");

module.exports = {


  //==========================================
  // Donor Routes:
  //==========================================

  findAllDonors: function (req, res) {
    db.Walls
      .find({ isDonor: true })
      .sort({ wallName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  createWall: function (req, res) {
    db.Walls
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findWallById: function (req, res) {
    db.Walls
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateWall: function (req, res) {
    db.Walls
      .findOneAndUpdate({ _id: req.params.id }, req.query, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeWall: function (req, res) {
    db.Walls
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllGifts: function (req, res) {
    console.log( 'req.query',req.query);

      db.User
      .find({"gifts": {$elemMatch: {"item": {$regex: req.query.gifts, $options: "i"}, "category": req.query.category}}}, {"name":1, "wallName" : 1, "email": 1, "address": 1, "city":1, "latitude":1,"longitude":1,"gifts":1})
    
      // .sort({ wallName: 1 })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
        // console.log(dbModel),
      .catch(err => res.status(422).json(err));
        

    
  },
  // findAllSearchedGifts: function (req,res){
  //   db.User
  //   .find({})
  //   .then(dbModel =>
  //   res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // }
  findAllSearchedGifts: function (req,res){
    db.User
    .find({"gifts": {$elemMatch: {"item": {$regex: req.query.gifts, $options: "i"}}}})
    .then(dbModel =>
    res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

};




