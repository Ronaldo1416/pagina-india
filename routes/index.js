const express = require("express");
const router = express.Router();
const speakerRoute = require ('./speakers');
const feedbackRoute = require ('./feedback');
const { request } = require("express");

module.exports = params =>{
   router.get("/", (req,res) => {
    res.render("pages/index", {pageTitle: "Welcome"});
});

   router.use ('/speakers', speakerRoute(params));
   router.use ('/feedback', feedbackRoute(params));

    return router; 
};
