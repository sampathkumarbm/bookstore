const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001

//middlewares
app.use(cors({
  origin : "http://13.50.118.213:3000/books"
}));

app.use(express.json());
app.use(require("./routes/book-routes"));


// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

//Testing
