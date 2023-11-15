const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001

//middlewares
app.use(cors({
  origin : "http://13.50.118.213:3000"
}));

app.use(express.json());
app.use(require("./routes/book-routes"));


// get driver connection
const dbo = require("./db/conn");

app.listen(port, (err, response) => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err, response) {
  console.log({response},{err})
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

//Testing
