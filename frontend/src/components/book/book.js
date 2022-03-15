import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Link, useNavigate } from "react-router-dom";
import './book.css'

export const Book = ({book}) => {
    const {_id, name, author, description, price, image} = book
    return(
        <div>
            <Card sx={{ display: 'flex', width:'341px', height: '195px'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    height="180"
                    image= {image}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Tooltip title={name}>
                        <Typography  sx={{whiteSpace: 'nowrap', width: '180px', overflow: 'hidden', textOverflow: 'ellipsis'}} variant="h6">
                             {name}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={description}>
                        <Typography sx={{display: '-webkit-box',maxWidth: '100%',WebkitLineClamp: 2,WebkitBoxOrient: 'vertical', width: '180px', overflow: 'hidden',textOverflow: 'ellipsis'}} fontSize='13px'>
                            {description}
                        </Typography>
                    </Tooltip>
                    <Typography sx={{whiteSpace: 'nowrap', width: '180px', overflow: 'hidden', textOverflow: 'ellipsis'}} variant="subtitle2">
                        By&nbsp;{author}
                    </Typography>
                    <Typography variant="subtitle2" style={{color:'orange'}}>
                       {price} Rs
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button LinkComponent={Link} to={`/books/${_id}`} size="small">Update</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Box>
            </Card><br/>
        </div>
    )
}