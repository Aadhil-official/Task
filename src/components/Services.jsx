import { Grid, Grid2, Typography } from '@mui/material'
import React from 'react'
import CargoArea from '../assets/CargoArea.jpg'

function Services() {
    return (
        <div id='Services' style={{ marginTop: '50px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} textAlign='center'>
                    <Typography variant='body2' sx={{ color: 'lightgreen' }}>Real Solution ,Rela Fast</Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Best Global Logistic Solutions.</Typography>
                    <br />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4} sx={{ alignItems: 'center' }}>
                    {/* <Grid xs={6}> */}
                    <img src={CargoArea} width='60%' height='73%' alt="cargo" />
                    <Typography variant='h6'></Typography>
                </Grid>
                <Grid item xs={4} sx={{ alignItems: 'center' }}>
                    {/* </Grid>
                    
                    <Grid xs={6}> */}
                    {/* <Typography variant='body2'>hiii</Typography> */}
                    <img src={CargoArea} width='60%' height='73%' alt="" />
                    {/* </Grid> */}
                    
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    )
}

export default Services