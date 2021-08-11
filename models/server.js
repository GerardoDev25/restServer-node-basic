var cors = require("cors");
const express = require("express");

class Server {
   constructor() {
      this.port = process.env.PORT;
      this.app = express();
      this.userPath = "/api/users";

      // * middlewares
      this.middlewares();

      // * routes
      this.routes();
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
   }

   // ? funtion that listen the app in the port
   listen() {
      this.app.listen(this.port, () => {
         console.log("server run in port ", this.port);
      });
   }
}

module.exports = Server;
