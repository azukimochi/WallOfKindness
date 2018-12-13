import axios from "axios";

export default {
  lookForGifts: function(searchParams) {
    return axios.get("/api/walls/searchGifts?gifts=" + searchParams.gifts + "&area=" + searchParams.address + "&category=" + searchParams.category)
  },

   getAllGifts: function(searchGifts){
    return axios.get("/api/walls/getAllGifts?gifts=" + searchGifts.gifts)
  },

  saveWallInfo: function(wallData) {
    return axios.post("/api/wallsUpdate", wallData);
  },

  createNewWall: function(newWallData) {
    return axios.post("/createWall", newWallData);
  },

  register: function(newUserData) {
  return axios.post("/users/create", newUserData);
  },

  logIn: function(loginData) {
    return axios.get("/users/logIn", {params: loginData})
  },

  getUserInfo: function(reqObj) {
    return axios.get("/auth/findUser/" + reqObj.id, 
    {headers: {"Authorization" : `Bearer ${reqObj.token}`}}
  )},

  updateUserInfo: function(id, token, reqObj) {
    return axios.put("/auth/update/" + id, reqObj,
    {headers: {"Authorization" : `Bearer ${token}`}}
  )},

  auth: function(token) {
    return axios.get('/auth', 
    {headers: {"Authorization" : `Bearer ${token}`}}
  )}
  
};

