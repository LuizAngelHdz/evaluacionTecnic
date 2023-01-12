import { Button, Container, Grid, Typography } from '@mui/material'
import axios from "axios";
import React, {useEffect, useState} from 'react'

export const DetailState = ({stateId, restartDetail}) => {
    const [sateDetail, setsateDetail] = useState(null)
    useEffect(() => {
      if(stateId !== ''){
        axios
        .get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${stateId}`)
        .then((values) => setsateDetail(values?.data.results[0]));
      }
    }, [stateId])
    
  return (
    <Container style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:'4vh'}}>
        {sateDetail === null ? <h1>Loading...</h1> : 
        <Grid container spacing={2} >
      
            <Grid item md={12}>
                <Typography variant='h4'>Descripcción del estado de {sateDetail?.state}</Typography>
            </Grid>
            <Grid item md={6}>
            <Typography><strong>Name:</strong> {sateDetail.name}</Typography>
                <Typography><strong>City id:</strong> {sateDetail.cityid}</Typography>
                <Typography><strong>Iconcode:</strong> {sateDetail.iconcode}</Typography>
                <Typography><strong>Last Report Time:</strong>{sateDetail.lastreporttime}</Typography>
            </Grid>
            <Grid item md={6}>
            <Typography><strong>state:</strong> state: {sateDetail.state}</Typography>
                <Typography><strong>Lalitude:</strong>  {sateDetail.latitude}</Typography>
                <Typography><strong>Longitude:</strong> {sateDetail.longitude}</Typography>
                <Typography><strong>validdateutc:</strong> {sateDetail.validdateutc}</Typography>
            </Grid>
            <Grid item md={12}>
                <Button onClick={() =>restartDetail()} variant='contained'>Regresar</Button>
            </Grid>
        </Grid>}
    </Container>
  )
}
