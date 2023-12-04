import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';

import {CommonRoutesConfig} from './common/common.routes.config'
import {StudentsRoutes} from './students/students.routes.config'
import {CoursesRoutes} from './courses/courses.routes.config'

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.port || 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json()) // All incoming requests are parsed as JSON

app.use(cors()) // Allows cross-origin requests

const loggerOptions: expressWinston.LoggerOptions = { // Logs all handled HTTP requests, makes it JSON, prettier, and colored
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // When not debugging, don't log everything
}

app.use(expressWinston.logger(loggerOptions)) // Makes application use our logger

routes.push(new StudentsRoutes(app)) // Adds routes
routes.push(new CoursesRoutes(app))

// ------

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage)
});

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => { // Checks that each route is properly configured
    debugLog(`Routes configured for ${route.getName()}`)
  })
  console.log(runningMessage) // Tells us server is up and running.
})
