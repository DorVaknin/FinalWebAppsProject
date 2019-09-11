const fetch = require('node-fetch');
const baseURL = `http://localhost:8080/`;
const METHODS = {
  POST: "POST",
  PUT: "PUT",
  GET: "GET",
  DELETE: "DELETE"
};
async function approachToServer(url, options) {
  return await fetch(url, options);//
}

module.exports = {
  baseURL: baseURL,
  METHODS: METHODS,
  approachToServer: approachToServer
};
