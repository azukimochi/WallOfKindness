import axios from "axios";


export default {
  // Gets all books
  lookForGifts: function(searchParams) {
    // return axios.get("/api/searchGifts");
    return axios.get("/api/walls/searchGifts?gifts=" + searchParams.gifts + "&area=" + searchParams.address + "&range=" + searchParams.range)
    .catch(function(error){
      console.log(error);
    })
    
  },

  getAllGifts: function(searchGifts){
    return axios.get("/api/walls/getAllGifts")
    .catch(function(error){
      console.log(error);

    })
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves wall info to the database
  saveWallInfo: function(wallData) {
    return axios.post("/api/wallsUpdate", wallData);
  },
  createNewWall: function(newWallData) {
    return axios.post("/createWall", newWallData);
  },

  register: function(newUserData) {
  return axios.post("/api/users/create", newUserData);
  },

  logIn: function(loginData) {
    return axios.get("api/users/logIn", {params: loginData})
  },

  getUserInfo: function(id) {
    return axios.get("/api/users/find/" + id)
  },
  // ,
  // loadWallInfo: function(wallData) {
  //   return axios.post("/api/wallsLoad", wallData);
  // }
};

