import React, {useEffect, useState} from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined"
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
    const history = useNavigate()
    const [value, setValue] = useState();   
    const path = useLocation().pathname.split('/')[1]
    console.log('path',path)

    
    useEffect(()=>{
        console.log('path',path)
        switch(path){
            case "books" : {
                setValue(0)
                break;
            }
            case "add" : {
                setValue(1)
                break;
            }
            case "about" : {
                setValue(2)
                break;
            }
        }
    },[path])
    console.log('vale',value)
    return(
        <div>
            <AppBar sx={{backgroundColor:'#5a626b'}} position="sticky">
                <Toolbar>
                <Typography variant="h5" style={{display:'flex', alignItems:'center'}}>
                    <LibraryBooksOutlinedIcon size="lg"/>&ensp;
                    BOOK STORE APPLICATION
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

