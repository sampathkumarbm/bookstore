import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Book } from "./book"
import './book.css'

const url = "http://localhost:5000/books"

export const Books = () => {
    const [books, setBooks] = useState();
    const fetchHandler = async() => {
        return await axios.get(url).then((res)=>res.data)
    }
    console.log('books',books)
    useEffect(()=>{
        fetchHandler().then((data) => setBooks(data.result))
    },[])
    return(
        <div style={{height:'100vh', width:'100vw', overflow:'auto'}}>
            <div style={{display:'flex', flexFlow:'wrap', gap:'10px', padding:'20px'}}>
                {books && books.map((book, i)=>(
                    <div style={{display:'flex'}} key={i}>
                        <Book book={book}/>
                    </div>
                ))}
            </div>
        </div>
    )
}