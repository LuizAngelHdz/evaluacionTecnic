import React, { useEffect, useState } from "react";
import {
  Table as MuyTable,
  TableBody,
  TableCell,
  TableRow,
  Pagination,
  Typography,
  TableHead,
} from "@mui/material";
import axios from "axios";
import { Container } from "@mui/system";

export const Table = ({setstateId}) => {
  const [listTable, setlistTable] = useState([]);
  const [page, setpage] = useState(0);
  const rowsPerPage = 10
  useEffect(() => {
    axios
      .get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
      .then((values) => setlistTable(values.data?.results));
  }, []);

  const changePage = (newPage) =>setpage(newPage-1)
  const validate = (item) =>item.probabilityofprecip > 60 || item.relativehumidity>50 ? 'Si llueve' : 'No llueve'

  return (
      <Container>
        <Typography variant='h5'>Lista de Estados</Typography>
      <MuyTable variant='striped'>
        <TableHead>
            <TableCell>_id</TableCell>
            <TableCell>cityid</TableCell>
            <TableCell>name</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Probability of Precip</TableCell>
            <TableCell>Relative Humidity</TableCell>
            <TableCell>Last report</TableCell>
            <TableCell>llueve</TableCell>
        </TableHead>
        <TableBody>
          {listTable.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((item) => (
            <TableRow onClick={() => setstateId(item._id)}  style={{cursor:'pointer'}} key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.cityid}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.probabilityofprecip}</TableCell>
              <TableCell>{item?.relativehumidity}</TableCell>
              <TableCell>{item.lastreporttime}</TableCell>
              <TableCell><Typography style={{color: validate(item) ==='No llueve'? 'blue':'red'}}>{validate(item)}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuyTable>
      <Pagination 
      count={Math.round(listTable.length/rowsPerPage)}
      page={page+1}
      onChange={(_,page) => changePage(page)}
      />
      </Container>
  );
};
