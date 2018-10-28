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
      .create(req.query)
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
    // console.log( req.query);

      db.Walls
      .find({gifts:req.query.gifts}, {"firstName":1, "wallName" : 1, "email": 1, "zipCode": 1})
    
      // .sort({ wallName: 1 })
      .then(dbModel => 
        // console.log(dbModel),
        res.json(dbModel))
      .catch(err => res.status(422).json(err));
        

    
  },

};




