import bodyParser from "body-parser";
import { Application } from "express";

export class BodyParserMiddleware {
  constructor(app: Application) {
    app.use(bodyParser.json());
  }
}
