const port = process.env.PORT || 3000;
const app = require('./campus');


app.listen(port, ()=> console.log(`listening on port ${port}`));
