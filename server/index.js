const PORT = process.env.PORT || 3000;
const server = require("./app");
const { db } = require("./db");
const app = require("./app");
const seed = require("../bin/seed");

const init = async () => {
  console.log("seeding");
  await seed();
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

init();
