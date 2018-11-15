const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./users.js");
const jwt = require("jsonwebtoken");

router.use("/api", verifytoken, apiRoutes);
router.use("/users", userRoutes);

// Verify Token
function verifytoken(req, res, next) {
    console.log("hello", req.query)
    //Get auth header value
     const bearerHeader = req.headers['authorization'];
    //Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      //Set the token
      req.token = bearerToken;
      
      console.log("I am req.token", req.token)
      jwt.verify(req.token, 'secretkey', (err, authData) => {
       if (err) {
         res.json({
           status: '404',
         });
         console.log("token is not valid!")
       }
        //  res.json({
        //    status: '200',
        //  });
        //next middleware
         next();
       
     });

  
    } else {
      //Forbidden
      res.sendStatus(403);
  
    }
    

  };

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router; 