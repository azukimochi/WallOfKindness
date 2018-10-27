const db = require("../models"); 

module.exports = {


    //==========================================
  // Angle Routes:
  //==========================================

  findAllAngels: function(req, res) {
    db.Walls
      .find({isAngle: true})
      .sort({wallName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createWall: function(req, res) {
    db.Walls
      .create(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findWallById: function(req, res) {
    db.Walls
      .find({email: req.query.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateWall: function(req, res) {
    db.Walls
      .findOneAndUpdate({ email: req.query.id }, req.query, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  save:  function(req, res){
    console.log("Save Article Path hit");
    db.Article.findOne({articleId: req.body.articleId})
    .then(function(response){
      if (response === null) { // Only Create Article if it has not been Created
        db.Article.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
      } // End if
    })
  },

  getSavedArticles: function(req, res){
    
     db.Article
     .find({})
      .sort({ date: -1 })
       .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },

  deleteSavedArticle: function(req, res){
   
    db.Article
    .remove({articleId: req.body.articleId}, (err)=>{
       if (err) throw err;

      

       db.Article
         .find({})
          .sort({ date: -1 })
           .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      })
       .catch(err => res.status(422).json(err));
  }
};
