"use strict";
const express = require("express");
const router = express.Router();

var ApiInformation = require("../../model/json/api.information.json");

// serve information about api
router.route("/api/about-api").get((request, response) => {
    this.response = response;
    this.request = request;
    this.response.statusCode = Number(200);
    this.response.contentType = "application/json";

    this.request && Object.is(ApiInformation.about_api, ApiInformation.about_api) 
    ? this.response.status(Number(parseInt(200))).json(ApiInformation.about_api) : ""
});

// serve information about api privacy
router.route("/api/privacy").get((request, response) => {
    this.response = response;
    this.request = request;
    this.response.statusCode = Number(200);
    this.response.contentType = "application/json";

    this.request && Object.is(ApiInformation["privacy"],
        ApiInformation["privacy"])
    ? this.response.status(Number(parseInt(200))).json(ApiInformation["privacy"]) : ""
});

// serve information about api terms
router.route("/api/terms").get((request, response) => {
    this.response = response;
    this.request = request;
    this.response.statusCode = Number(200);
    this.response.contentType = "application/json";

    this.request && Object.is(ApiInformation["terms"],
        ApiInformation["terms"]) 
    ? this.response.status(Number(parseInt(200))).json(ApiInformation["terms"]) : ""
});

/*
    routers for all api resources handlers
*/

// -*users resource routes
router.use("/users", require("./resources/api.users.resources.handler"));
// -*photos resources routes
router.use("/photos", require("./resources/api.photos.resources.handler"));
// -*texts resources routes
router.use("/texts", require("./resources/api.texts.resources.handler"));
// -*posts resources routes
router.use("/posts", require("./resources/api.posts.resources.handler"));


// send a 404 response for undefined queries or routes
router.use(require("../middleware/error/404.middleware.handler"));
module.exports = router;