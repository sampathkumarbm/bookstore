import React from 'react'
import { Header } from "./components/header";
import { Routes, Route } from "react-router-dom"
import { AddBook } from "./components/add-book"
import { About } from "./components/about"
import { Books } from './components/book/books';
import { Home } from "./components/home"
import { BookDetails } from "./components/book/book-details"


function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path= "/" element={<Home />} exact/>
          <Route path= "/add" element={<AddBook />} exact/>
          <Route path= "/books" element={<Books/>} exact/>
          <Route path= "/about" element={<About/>} exact/>
          <Route path= "/books/:id" element={<BookDetails/>}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
