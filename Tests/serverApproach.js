const axios = require('axios');
const baseURL = `http://localhost:8080/`;
const METHODS = {
  POST: "POST",
  PUT: "PUT",
  GET: "GET",
  DELETE: "DELETE"
};

async function approachToServer(options) {
    return await axios(options);
}
module.exports = {
  baseURL: baseURL,
  METHODS: METHODS,
  approachToServer: approachToServer
};
