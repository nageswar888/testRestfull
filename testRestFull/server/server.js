const PORT = process.env.PORT || 3333;

import os from "os";
import express from "express";
import http from "http";
import RoutesConfig from "./config/routes.conf";
//import DBConfig from "./config/config";
import Routes from "./routes/index";

const app = express();

app.get('/', (req, res) => res.send('Nageswar'));

RoutesConfig.init(app);
//DBConfig.init();
Routes.init(app, express.Router());
require("./models/index");
http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
