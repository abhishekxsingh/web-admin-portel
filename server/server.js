const express = require("express");
const cors = require("cors");
const http = require("http");
const compression = require("compression");
const path = require("path");
const esviews = require("es6views");
const SmartHttp = require("smart-http");

const routes = require("./routes");

const { PORT } = require("./config");

const app = express();

/**
 * Start the app by listening <port>
 * */
const httpServer = http.createServer(app);
const server = httpServer.listen(PORT);

/**
 * List of all middlewares used in project cors, compression, helmet
 * */
try {
  // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  app.enable("trust proxy");
  app.use(SmartHttp());

  app.use(
    cors({
      exposedHeaders: ["token", "refresh-token"],
    })
  );

  app.use(compression());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'dist')));

  esviews.viewEngine(app);
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "es6");

  app.use("/", routes);
} catch (e) {
  server.close();
}

module.exports = server;
