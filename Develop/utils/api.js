//require axios
const axios = require("axios");

const api = {
  async getUser(data) {
    try {
      let response = await axios.get(
        "https://api.github.com/users/${userResponses.username}"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

//export maodile to call in index.js
module.exports = api;