import { Button, Container, Grid, Typography } from '@mui/material'
import axios from "axios";
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateId } from '../../features/sates/sates';


export const DetailState = ({restartDetail}) => {
  const selector = useSelector((state) => state.state);
  const dispatch = useDispatch();

    const [sateDetail, setsateDetail] = useState(null)
    useEffect(() => {
      if(selector.idState !== ''){
        axios
        .get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${selector.idState}`)
        .then((values) => setsateDetail(values?.data.results[0]));
      }
    }, [selector.idState])
    
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
                <Button onClick={() =>  dispatch(updateId(''))} variant='contained'>Regresar</Button>
            </Grid>
        </Grid>}
    </Container>
  )
}
