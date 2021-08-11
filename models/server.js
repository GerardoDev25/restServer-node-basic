const express = require("express");

class Server {
   constructor() {
      this.port = process.env.PORT;
      this.app = express();

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
      // * GET
      this.app.get("/api", (req, res) => {
         res.json({
            msg: "get API",
         });
      });

      // * POST
      this.app.post("/api", (req, res) => {
         res.json({
            msg: "post API",
         });
      });

      // * PUT
      this.app.put("/api", (req, res) => {
         res.json({
            msg: "put API",
         });
      });

      // * DELETE
      this.app.delete("/api", (req, res) => {
         res.json({
            msg: "delete API",
         });
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
