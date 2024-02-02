/* Swagger configuration */
const options = {
  openapi: 'OpenAPI 3',   
  language: 'en-US',      
  disableLogs: false,     
  autoHeaders: false,     
  autoQuery: false,       
  autoBody: false         
}

const config = require('./server.js');
const swaggerAutogen = require('swagger-autogen')();

const doc = {
info: {
  version: '1.0.0',      // by default: '1.0.0'
  title: 'REST API',        // by default: 'REST API'
  description: '',  // by default: ''
  contact: {
      'name': 'API Support',
      'email': 'nafise.mougamadousalime@gmail.com'
  },
},
host: 'localhost:5000',      // by default: 'localhost:3000'
basePath: '/',  // by default: '/'
schemes: ['http'],   // by default: ['http']
consumes: ['application/json'],  // by default: ['application/json']
produces: ['application/json'],  // by default: ['application/json']
tags: [],      // by default: empty Array
securityDefinitions: {},  // by default: empty object
definitions: {},
          // by default: empty object (Swagger 2.0)
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js', './controllers/*.js'];

/* NOTE: if you use the express Router, you must pass in the 
 'endpointsFiles' only the root file where the route starts,
 such as: index.js, app.js, routes.js, ... */
// swaggerAutogen(outputFile, endpointsFiles, doc);

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./routes/post.routes.js'); // root file
});