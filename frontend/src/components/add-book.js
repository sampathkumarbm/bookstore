import React, {useState} from "react";
import { Box, Button, Checkbox, FormLabel, FormControlLabel, TextField } from "@mui/material";
import axios from "axios"
import { useNavigate} from "react-router-dom"

export const AddBook = () => {
    const history = useNavigate()
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        author: "",
        price: "",
        image: "",
        phone: ""
    })
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const sendRequest = async() => {
        console.log({...inputs, available: checked})
        await axios.post("http://localhost:5000/add",{...inputs, available: checked})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/books'))
        console.log(inputs)
    }
console.log('inputs',inputs)
    return(
        <form onSubmit={handleSubmit}>
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
                
                <FormLabel>Phone</FormLabel>
                <TextField value={inputs.phone} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="phone"></TextField>

                <FormControlLabel control={<Checkbox checked={checked} />} onChange={()=>{setChecked(!checked)}} label="Available" />

                <Button variant="contained" type="submit">Add Book</Button>
            </Box>
        </form>
    )
}