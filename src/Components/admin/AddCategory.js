import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function AddCategory() {
  
    
    const [categorie, setcategorie] = useState({})
    const add = async (e) =>{
        e.preventDefault()
        await axios.post(`http://localhost:8080/admin/add/categorie/`,categorie)       
    }

    function handleForm(e) {
        const { name, value } = e.target;
        setcategorie({ ...categorie, [name] : value });
       // setData( value );
      
        }

    return (
    <>
        
        <Paper
        elevation={3}
        square
        component="form"
        sx={{m: 2,  display: 'flex', alignItems: 'center'}}
        onSubmit={add}
        >
            <Box
            sx={{
            margin: 30,
            width: 500,
            maxWidth: '100%',
            }}
        >
            <TextField fullWidth  id="fullWidth" name='designation' onChange={handleForm} />    

        </Box>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
            
      </>
  )
}

export default AddCategory