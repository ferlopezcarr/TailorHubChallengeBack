import path from 'path';
import dotenv from "dotenv";

const envArgument = process.argv.find(arg => arg.startsWith("env"));

const ENVIRONMENT = envArgument?.substring(4)?.split("'")?.join("");

const envFile = (!ENVIRONMENT ? '.env' : `.env.${ENVIRONMENT}`);
const envPath = path.resolve(__dirname, `../environments/${envFile}`);

dotenv.config({ path: envPath });

/**
 * Environmnet Constants
 */
const DEFAULT_PORT = 8000;
const PORT = process.env.SERVER_PORT === undefined ?
    DEFAULT_PORT :
    Number.parseInt(process.env.SERVER_PORT);
const API_PREFIX = process.env.API_PREFIX === undefined ?
    'api' : process.env.API_PREFIX;
const API_VERSION = process.env.API_VERSION === undefined ?
    'v1' : process.env.API_VERSION;

export const ENV_CONFIG = {
    DEFAULT_PORT,
    PORT,
    ENVIRONMENT,
    API_PREFIX,
    API_VERSION
};