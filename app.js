const express = require("express")
const app = express()
const fetch = require("node-fetch")
const API_ENDPOINT = "http://cs-test.2636073e-ceb7-4639-89ac-d7c92b7f83cc/"

app.get("/", (req, res) => { 
  fetch(API_ENDPOINT, { method: "GET" })
    .then(response => response.json())
    .then(data => res.status(200).json(data))
    .catch(error => res.status(422).json(error))
})

module.exports = app
