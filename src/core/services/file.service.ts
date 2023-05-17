import * as fs from "fs";
import * as path from "path";

const ENCONDING = "utf8";

export const readFile = (filePath: string): Promise<any | null> => {
  if (!filePath || filePath.length <= 0) {
    return Promise.reject("No file path provided");
  }
  return fs.promises
    .readFile(path.join(__dirname, filePath), ENCONDING)
    .then((data) => {
      return JSON.parse(data);
    });
};

export const writeFile = (filePath: string, data: any): Promise<any | null> => {
  if (!filePath || filePath.length <= 0) {
    return Promise.reject("No file path provided");
  }
  if (!data || data.length <= 0) {
    return Promise.reject("No data provided");
  }
  return fs.promises.writeFile(
    path.join(__dirname, filePath),
    JSON.stringify(data),
    ENCONDING
  );
};
