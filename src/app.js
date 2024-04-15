const { envs } = require("./config/env");
const { starterServer } = require("./server/server");

const main = () => {
  starterServer({ port: envs.PORT, public_path: envs.PUBLIC_PATH });
};

(async () => {
  main();
})();
