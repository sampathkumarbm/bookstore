import React, {useEffect, useState} from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined"
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
    const history = useNavigate()
    const [value, setValue] = useState();   


    useEffect(()=>{
        history('./books')
    },[])
    return(
        <div>
            <AppBar sx={{backgroundColor:'#5a626b'}} position="sticky">
                <Toolbar>
                <Typography >
                    <LibraryBooksOutlinedIcon/>
                </Typography>
                <Tabs
                    sx={{ml: "auto"}}
                    textColor="inherit" 
                    indicatorColor="primary" 
                    value={value} 
                    onChange={(e, val)=>{setValue(val)}}>
                        <Tab LinkComponent={ NavLink } to= "/books" label = "Books"/>
                        <Tab LinkComponent={ NavLink } to= "/add" label = "Add Books"/>
                        <Tab LinkComponent={ NavLink } to= "/about" label = "About Us"/>
                </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

