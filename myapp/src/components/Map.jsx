import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';


const Map = () => {
    var [names, setNames] = useState(
        [
            { "sname": "Tiya", "age": 20 },
            { "sname": "Teena", "age": 32 },
            { "sname": "Timy", "age": 25},
            { "sname": "Tessa", "age": 22 }
        ]
    )
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
            
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>  
                          {names.map((val) => {
                              
                              return (
                                  <TableRow>
                                      <TableCell>{ val.sname}</TableCell>
                                      <TableCell> { val.age}</TableCell>
                                  </TableRow>
                                  
                              )
                          })}
                          
                      </TableBody>
                
                        
                 
                  
              </Table>
          </TableContainer>
      
    </div>
  )
}

export default Map
