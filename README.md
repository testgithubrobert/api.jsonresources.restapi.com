# React + Vite / client side

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This template is the frontend the json-api 
https://github.com/testgithubrobert/json-api.git 

# Node.js & Express.js

This is simple API that provides json based resources or objects that are made up of different categories
of json resources or objects and run on a local and online server port for heroku.
Its deployed on heroku and git for version control

https://github.com/testgithubrobert/json-api.git 

# Routes for API / backend

GET    /resources
    provides all json resources available on the APIs database

GET, POST    /resources/texts
    provides all json text resources available on the APIs database

GET, PUT, DELETE   /resources/texts/resource-id
    provides a single json text resource available on the APIs database basing on provided resource id

GET, POST    /resources/blogs
    provides all json blogs resources available on the APIs database

GET, PUT, DELETE    /resources/blogs/resource-id
    provides a single json blog resource available on the APIs database basing on provided resource id

GET, POST    /resources/photos
    provides all json photos resources available on the APIs database

GET, PUT, DELETE    /resources/photos/resource-id
    provides a single json photo resource available on the APIs database basing on provided resource id

GET, POST    /resources/users
    provides all json users resources available on the APIs database

GET, PUT, DELETE    /resources/users/resource-id
    provides a single json user resource available on the APIs database basing on provided resource id


# description
Mainly this is a simple REST API that handles both the backend and the frontend side or its a MERN or Fullstack
API that provides simple jsonp or json data resources that can be used to test out projects that handle fetching
either using axios or the fetch api or any other resource in order to access data using HTTP/HTTPS methods.
It use MySQL as a database on the backend, node.js and express.js for server rendering and react.js library for frontend