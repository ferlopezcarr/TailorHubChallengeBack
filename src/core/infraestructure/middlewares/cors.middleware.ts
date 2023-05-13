

import { Request, Response } from 'express';

export class CorsMiddleware {

    constructor() {}

    public getMiddleware(request: Request, response: Response, next: any) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }

}