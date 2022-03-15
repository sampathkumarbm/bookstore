import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

export const BookDetails = () => {
    const id = useParams().id
    useEffect(()=>{
        const fetchHandler = async() =>{
            await axios.get(`http://localhost:5000/books/${id}`).then(res => {console.log(res)})
        }
        fetchHandler();
    },[id])
    return (
        <div>

        </div>
    )
}