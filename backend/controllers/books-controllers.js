const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

const getAllBooks = async (request, response, next) => {
  try {
    let db_connect = await dbo.getDb("books");
    db_connect
    .collection("books")
    .find({})
    .toArray(function (error, result) {
      if (error) response.status(404).json({ message: "No products found" });
      else response.status(200).json({result});
    });
  } catch (err) {
   throw err
  }
};

const getById = async (request, response, next) => {
    let myquery = { _id: ObjectId( request.params.id )};
    try {
        let db_connect = await dbo.getDb();
        db_connect
        .collection("books")
        .findOne(myquery, function (error, result) {
            if (error) response.status(404).json({ message: "No Book found" });
            else response.status(200).json({result});
          });
    } catch (err) {
    throw err
    }
};

const addBook = async (request, response, next) => {
  console.log('request', request.body)
  const { name, author, description, price, available, image } = request.body;
    try{
        let db_connect = await dbo.getDb();
        let myobj = {
            name,
            author,
            description,
            price,
            available,
            image
        };
        db_connect.collection("books").insertOne(myobj, function (error, result) {
            if (error) response.status(500).json({ message: "Unable To Add" });
            else response.status(201).json({result});
    });
    }catch (err) {
        throw err
  }}


const updateBook = async (request, response, next) => {
  const id = request.params.id;
  const { name, author, description, price, available, image } = request.body;
  try {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( request.params.id )};
    let newvalues = {
        $set: {
            name,
            author,
            description,
            price,
            available,
            image
        }
    };
    db_connect
        .collection("books")
        .updateOne(myquery, newvalues, function (error, result) {
        if (error) response.status(404).json({ message: "Unable To Update By this ID" });
        response.status(200).json({ result });
        });
  }catch (err) {
    throw err
  }
};

const deleteBook = async (request, response, next) => {
  const id = request.params.id;
  try {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( id )};
    db_connect.collection("books").deleteOne(myquery, function (error, obj) {
      if (error) response.status(404).json({ message: "Unable To Delete By this ID" });
      console.log("1 document deleted");
      response.status(200).json({ message: "Product Successfully Deleted" })
    });
  } catch (err) {
    throw err;
  }
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;