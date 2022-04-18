import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



function UpdateCategory() {

    let params = useParams();
    const id = params.id;

    const [categorie, setcategorie] = useState({})

    useEffect(async () => {
       await axios.get(`http://localhost:8080/admin/categories/${id}`)
       .then(cat =>{
            setcategorie(cat.data)
            console.log(cat.data);
       })
    }, [])
    
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:8080/admin/update/categorie/${id}`,categorie)       
    }

    function handleForm(e) {
        const { name, value } = e.target;
        setcategorie({ ...categorie, 'designation': value });
       // setData( value );
      
        }

    return (
    <>
        
        <Paper
        elevation={3}
        square
        component="form"
        sx={{m: 2,  display: 'flex', alignItems: 'center'}}
        onSubmit={update}
        >
            <Box
            sx={{
            margin: 30,
            width: 500,
            maxWidth: '100%',
            }}
        >
            <TextField fullWidth  id="fullWidth" value={categorie.designation} onChange={handleForm} />    

        </Box>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
            
      </>


  )
}

export default UpdateCategory