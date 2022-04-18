import React, { useEffect, useState, Component } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';


export default function AdProducts() {

    const [products, setData] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:8080/user/produits')
        .then(res => {
            setData(res.data)
            //console.log(res.data)
                        
        })}, [])

    
    const [searchData, setSearche] = useState('')
    function handleForm(e) {
        const { name, value } = e.target;
        //setData({ ...searchData,  value });
        setSearche( value );
        }
    function print(e){
        e.preventDefault()
        console.log(searchData)
    }

  return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Grid container spacing={2} columns={{ xs: 2, sm: 12, md: 12 }}>
                <Grid item xs={2} sm={2}>                 
                    <ButtonGroup
                        orientation="vertical"
                        variant="outlined"
                        color='success'
                        size="large"
                        
                    >
                        <Button>Hamburger</Button>
                        <Button>Tarte</Button>
                        <Button>Salade</Button>
                    </ButtonGroup>
                    
                </Grid>
                <Grid item xs={2} sm={10}>
                    <SearchComponent />
                    <ProductsList products={products}/>
                </Grid>
            </Grid>
        </Container>
      </>

  )
}


export function SearchComponent() {

    const [searchData, setData] = useState('')
    function handleForm(e) {
        const { name, value } = e.target;
        //setData({ ...searchData,  value });
        setData( value );
        }
    function print(e){
        e.preventDefault()
        //console.log(searchData)
    }
  return (
        <Paper
            elevation={3}
            square
            component="form"
            sx={{m: 2,  display: 'flex', alignItems: 'center'}}
            onSubmit={print}
            
            >
            
            <InputBase
                sx={{ m: 2, flex: 1 }}
                placeholder="Cherchez Produit"
                inputProps={{ 'aria-label': 'Cherchez Produit' }}
                color='success'
                name='filter'
                value={searchData}
                onChange={handleForm}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
  )
}




export class ProductsList extends Component {
  render() {
    return (
        <>
        <List dense sx={{ width: '100%',  bgcolor: 'background.paper' }}>
        {this.props.products.map((prod) => {
            return (
            <ListItem
                key={prod.id}
            >
                <ListItemButton>
                <ListItemAvatar>
                    <Avatar
                    alt="img"
                    src="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg"
                    />
                </ListItemAvatar>
                <ListItemText id={prod.id} primary={prod.nomPrd} />
                </ListItemButton>
                <Button m={4} variant="text" color="primary" startIcon={<CreateOutlinedIcon />}>
                    Modifier
                </Button>
                <Button m={4} variant="text" color="error" startIcon={<DeleteIcon />}>
                    Supprimer 
                </Button>
            </ListItem>
            );
        })}
    </List>
    </>
    )
  }
}



