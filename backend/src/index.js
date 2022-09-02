/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const images = require('./routes/images.router')
/**
 * App Variables
 */
const app = express();
const apiRouter = express.Router();
// const testRouter = require('backend/src/routes/testRouter.router..js')
/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json({ limit: '50mb' }));

app.use("/images", images)

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
