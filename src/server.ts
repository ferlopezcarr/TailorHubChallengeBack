import { App } from "./app";

// Initialize Configuration
import { ENV_CONFIG } from "./config/env.config";

/**
 * Start application
 */
const app = new App(
  !!ENV_CONFIG.PORT ? ENV_CONFIG.PORT : ENV_CONFIG.DEFAULT_PORT
);

app.listen();
