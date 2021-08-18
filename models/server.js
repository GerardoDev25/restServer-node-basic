var cors = require("cors");
const express = require("express");
const { dbConnection } = require("../database/config.js");

class Server {
   constructor() {
      this.port = process.env.PORT;
      this.app = express();

      // * paths
      this.userPath = "/api/users";
      this.authPath = "/api/auth";

      // * connect to data base
      this.connectDB();

      // * middlewares
      this.middlewares();

      // * routes
      this.routes();
   }

   async connectDB() {
      await dbConnection();
   }

   // ? function that contains all middlewares of the app
   middlewares() {
      // * cors
      this.app.use(cors());

      // * read and body parse
      this.app.use(express.json());

      // * public directory
      this.app.use(express.static("public"));
   }

   // ? function that handle the routes of the app
   routes() {
      this.app.use(
         this.userPath,
         require("../routes/users.routes.js")
      );
      this.app.use(
         this.authPath,
         require("../routes/auth.routes.js")
      );
   }

   // ? funtion that listen the app in the port
   listen() {
      this.app.listen(this.port, () => {
         console.log("server run in port ", this.port);
      });
   }
}

module.exports = Server;
