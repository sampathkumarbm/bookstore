import React, {useState, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import { Header } from "../header"
import { Book } from "./book"
import './book.css'

const url = "http://13.50.118.213:5001/books"

export const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const fetchHandler = async() => {
        return await axios.get(url)
        .then((res)=>{
            setIsLoading(false)
            return res.data
        })
    }
    console.log('books',books)
    useEffect(()=>{
        setIsLoading(true)
        fetchHandler().then((data) => setBooks(data.result))
    },[])
    return(
        <React.Fragment>
            <div style={{height:'80vh', width:'100vw', overflow:'auto'}}>
                <div style={{display:'flex', flexFlow:'wrap', gap:'10px', padding:'20px'}}>
                    {books.length > 0 ? books.map((book, i)=>(
                        <div style={{display:'flex'}} key={i}>
                            <Book book={book}/>
                        </div>
                    )) :
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', marginRight:'auto', marginLeft:'auto'}}>
                        {isLoading ? <CircularProgress /> :<img src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"/>}
                    </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}