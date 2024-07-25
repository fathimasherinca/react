import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';


const Post = () => {
    var [user, setUser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log((response.data))
            setUser(response.data)
        })
  return (
    <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>

                          <TableCell>Id</TableCell>
                          <TableCell>Title</TableCell>
                        
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (

                              <TableRow>
                                  <TableCell>{val.id}</TableCell>
                                  <TableCell>{val.title}</TableCell>
                                  
                              </TableRow>
                          )
                      })}




                  </TableBody>




              </Table>
          </TableContainer>

    </div>
  )
}

export default Post
