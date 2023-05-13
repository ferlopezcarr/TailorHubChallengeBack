import * as fs from 'fs';
import * as path from 'path';

export class FileService {

    private readonly ENCONDING = 'utf8';

    private static _instance: FileService;

    constructor() {
    }

    public static getInstance(): FileService {
        return (!!FileService._instance ? FileService._instance : new FileService());
    }


    public readFile(filePath: string): Promise<any | null> {
        if (!filePath || filePath.length <= 0) {
            return Promise.reject("No file path provided");
        }
        return fs.promises.readFile(path.join(__dirname, filePath), this.ENCONDING).then(data => {
            return JSON.parse(data);
        });
    }

    public writeFile(filePath: string, data: any): Promise<any | null> {
        if (!filePath || filePath.length <= 0) {
            return Promise.reject("No file path provided");
        }
        if (!data || data.length <= 0) {
            return Promise.reject("No data provided");
        }
        return fs.promises.writeFile(path.join(__dirname, filePath), JSON.stringify(data), this.ENCONDING);
    }

}