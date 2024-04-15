// const { envs } = require("./config/env");
import { envs } from "./config/env.js";
// const { starterServer } = require("./server/server");
import { starterServer } from "./server/server.js";

const main = () => {
  starterServer({ port: envs.PORT, public_path: envs.PUBLIC_PATH });
};

(async () => {
  main();
})();
