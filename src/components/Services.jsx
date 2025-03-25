import { Grid, Grid2, Typography } from '@mui/material'
import React from 'react'
import CargoArea from '../assets/CargoArea.jpg'

function Services() {
    return (
        <div>
            <Grid container>
                <Grid justifyContent='center' item xs={12} textAlign='center'>
                    <Typography variant='body2' sx={{ color: 'lightgreen' }}>Real Solution ,Rela Fast</Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Best Global Logistic Solutions.</Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginRight: 'auto', marginLeft: 'auto' }}>
                    {/* <Grid xs={6}> */}
                    <img src={CargoArea} width='50%' height='50%' alt="cargo"  />
                    {/* </Grid>
                    
                    <Grid xs={6}> */}
                    {/* <Typography variant='body2'>hiii</Typography> */}
                    <img src={CargoArea} width='50%' height='50%' alt="" />
                    {/* </Grid> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Services