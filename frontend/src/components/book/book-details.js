import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, FormLabel, FormControlLabel, TextField } from "@mui/material";

import { useParams } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export const BookDetails = () => {
    const id = useParams().id
    const history = useNavigate()

    const [inputs, setInputs] = useState({})
    const [checked, setChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/books'))
    }

    const handleChange = (e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const sendRequest = async() => {
        console.log({...inputs, available: checked})
        await axios.put(`http://localhost:5000/books/${id}`,{...inputs, available: checked})
    }

    useEffect(()=>{
        const fetchHandler = async() =>{
            await axios.get(`http://localhost:5000/books/${id}`).then(res => {setInputs(res.data.result)})
        }
        fetchHandler()
    },[id])
    console.log('inputs',inputs)
    return (
        <div>
            {inputs && <form onSubmit={handleSubmit}>
                <Box 
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    maxWidth="600px"
                    alignContent="center"
                    alignItem="center"
                    marginLeft="auto"
                    marginRight="auto"
                    padding="20px"
                >
                    <FormLabel>Name</FormLabel>
                    <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"></TextField>

                    <FormLabel>Description</FormLabel>
                    <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description"></TextField>

                    <FormLabel>Author</FormLabel>
                    <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author"></TextField>

                    <FormLabel>Price</FormLabel>
                    <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price"></TextField>

                    <FormLabel>Image</FormLabel>
                    <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image"></TextField>

                    <FormControlLabel control={<Checkbox checked={checked} />} onChange={()=>{setChecked(!checked)}} label="Available" />

                    <Button variant="contained" type="submit">Update Book</Button>
                </Box>
            </form>}
        </div>)
}