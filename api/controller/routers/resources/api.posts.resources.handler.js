"use strict";
const express = require("express");
const router = express.Router();
// let DBMSPool_connection = require("../../../model/connection/api.model.pool.connection");
const DeleteResource = require("../modules/delete.resource");
const ReadResource = require("../modules/get.resource");
const ReadResources = require("../modules/get.resources");

// posts resources routes handler
router
  .route("/")
  .get(async (request, response) => {
    ReadResources(request, response, "posts.resources.json");
  })
  .post(async (request, response) => {
    this.response = response;

    this.response.statusCode = 201;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Method", "POST");
    this.response.contentType = "application/json";

    // handler and catch all api server errors to prevent app crush
    try {
      // query all posts available from db
      const PostsResources = require("../../../model/json/posts.resources.json");

      // filter out the corresponding or co-existing duplicate resource with the request from the db
      let FoundExistingPostResource = PostsResources[0].find((resource) => {
        return resource.title === request.body.title;
      });

      if (
        typeof request.body.title === "undefined" ||
        typeof request.body.creator === "undefined" ||
        typeof request.body.post === "undefined"
      ) {
        return this.response.status(400).sendStatus(400);
      } else if (
        FoundExistingPostResource &&
        Object.is(FoundExistingPostResource, FoundExistingPostResource)
      ) {
        return this.response
          .status(400)
          .json({ Message: "Resource already exits!" });
      } else {
        // send successful response on successful resource creation
        return this.response
          .status(Number(parseInt(201)))
          .json(
            "body" in request ? { Message: `Resource has been created!` } : ""
          );
      }
    } catch (error) {
      // console.log(error);
      this.response
        .status(500)
        .json("body" in request ? { ERROR: error } : { ERROR: error });
    }
  });

// GET or request for a single resource from the DB
// handle modification of a single api resources from the DB
router
  .route("/:id")
  .get(async (request, response) => {
    ReadResource(request, response, "Posts_Resources");
  })
  .put(async (request, response) => {
    this.response = response;

    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Method", "PUT");
    this.response.contentType = "application/json";

    // handler and catch all api server errors to prevent app crush
    try {
      // query all posts available from db
      const PostsResources = require("../../../model/json/posts.resources.json");

      // filter out the corresponding or co-existing duplicate resource with the request from the db
      let FoundExistingPostResource = PostsResources[0].find((resource) => {
        return resource.id === request.params.id;
      });

      if (
        (request && !FoundExistingPostResource) ||
        typeof FoundExistingPostResource === "undefined"
      ) {
        return this.response.status(404).json({
          Message: `Requested resource with id ${JSON.stringify(
            request.params.id
          )} not found!`,
        });
      } else if (
        typeof request.body.post === "undefined" ||
        typeof request.body.creator === "undefined" ||
        typeof request.body.title === "undefined"
      ) {
        return this.response.status(400).sendStatus(400);
      } else {
        // send response on successful resource update operation
        return this.response
          .status(200)
          .jsonp(
            "body" in request
              ? {
                  Message: `Updated resource with id ${FoundExistingPostResource.id}`,
                }
              : ""
          );
      }
    } catch (error) {
      // console.log(error);
      return this.response
        .status(500)
        .json("body" in request ? { ERROR: error } : { ERROR: error });
    }
  })
  .delete(async (request, response) => {
    DeleteResource(request, response, "posts.resources.json");
  });

// send a 404 response for undefined queries or routes
router.use(require("../../middleware/error/404.middleware.handler"));
module.exports = router;
