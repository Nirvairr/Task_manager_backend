const express = require("express");
const connectToMongo = require('./db');
var cors = require('cors');

const app = express();
const port = 5000;
connectToMongo();

app.use(cors());
app.use(express.json());

//Avialable routes
app.use('/api/auth',require('./routes/auth'))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
