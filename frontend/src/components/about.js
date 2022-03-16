import React from "react";
import { Box, Typography } from "@mui/material";

export const About = () => {
    return(
        <div style ={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", height:'80vh'}}>
           <Typography style={{color:'red'}} variant="h4" >This is a Basic Book Store Application where we can</Typography>
            <ol style={{color:'green'}}>
                <li><Typography variant="h6">Add New Books</Typography></li>
                <li><Typography variant="h6">All the Books Details</Typography></li>
                <li><Typography variant="h6">Delete the Existing Books</Typography></li>
                <li><Typography variant="h6">Update the Existing Book Details</Typography></li>
            </ol>
        </div>
    )
}