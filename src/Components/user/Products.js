import React, { useEffect, useState } from 'react'
import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { ButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Products() {

    const [products, setData] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:8080/user/produits')
        .then(res => {
            setData(res.data)
            console.log(res.data)
            
        })}, [])
    

  return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Box m={4}>
            <ButtonGroup fullWidth variant="outlined" color='success' aria-label="outlined button group">
                <Button>Salade</Button>
                <Button>Tarte</Button>
                <Button>Hamburger</Button>
            </ButtonGroup>
            </Box>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {
                
                products.map(pr => (
                    <Grid item xs={2} sm={4} md={4} key={pr.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            
                        <CardMedia
                        component="img"
                        height="140"
                        image={pr.cat.designation == "Hamburger"? "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg":
                                                                    "https://leseauxmineralesdoulmes-store.ma/1152-large_default/sidi-ali-pack-6x15l.jpg"}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pr.nomPrd}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {pr.description}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {pr.prixUt} Mad
                        </Typography>
                        </CardContent>
                        <CardActions>

                        <Button variant="contained" color='success' endIcon={<AddIcon />}>Add to chart</Button>
                        
                        </CardActions>
                    </Card>
            
                    
                </Grid>
                ))
            }
            </Grid>
        </Container>
    </>
  )
}
