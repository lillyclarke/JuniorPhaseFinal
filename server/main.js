const PORT = process.env.PORT || 3000;
const server = require('./index');
const { db } = require('./db');
// const app = require('./index');

// db.sync()
//   .then(() => {
//     server.listen(PORT, () => console.log(`

//       Listening on port ${PORT}

//       http://localhost:${PORT}

//       `));
//   });

const init = async () => {
  await db.seed();
  app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
  );
};

init();
