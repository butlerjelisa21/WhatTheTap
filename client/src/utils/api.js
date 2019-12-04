import axios from "axios";

export default {
  // Logins a user
  login: function(userData) {
    return axios.post("/api/userEmail", userData);
  },
  // Creates a user
  signUp: function(userData) {
    return axios.post("/api/requestUser/", userData);
  }
};