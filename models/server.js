const express = require("express");

class Server {
   constructor() {
      this.app = express();
      this.port = process.env.PORT;

      // * middlewares
      this.middlewares();

      // * routes
      this.routes();
   }

   // ? function that contains all middlewares of the app
   middlewares() {
      // * public directory
      this.app.use(express.static("public"));
   }

   // ? function that handle the routes of the app
   routes() {
      this.app.get("/api", (req, res) => {
         res.send("hola mundo");
      });
   }

   // ? funtion that listen the app in the port
   listen() {
      this.app.listen(this.port, () => {
         console.log("server run in port ", this.port);
      });
   }
}

module.exports = Server;
