import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const stylenut= {
    margin: 40,
    float: "left"

}

function Categories() {
  
   const [categories, setData] = useState([]);

   useEffect(async () => {
    await axios.get('http://localhost:8080/admin/categories/') 
    .then( res => {
       setData(res.data)
    })},[] )
 
    

    const deleted = async (id) =>{
        await axios.delete(`http://localhost:8080/admin/delete/categorie/${id}`)        
    }
    
    
    return (

        <>
        <Button variant="outlined" startIcon={<AddIcon/>} color="success" style={stylenut} component={Link} to={`add`}>
            Add Category
        </Button>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((cat) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {cat.id}
                </TableCell>
                <TableCell align="right">{cat.designation}</TableCell>
                <TableCell align="right">
                <Button variant="outlined" startIcon={<EditIcon />} color="primary" component={Link} to={`update/${cat.id}`}>
                  update
                </Button>
                </TableCell>
                <TableCell align="right">
                <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={() => deleted(cat.id)}>
                  delete
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        
        </>
      
  )
}

export default Categories