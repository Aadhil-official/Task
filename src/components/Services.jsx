import { Grid, Grid2, Typography } from '@mui/material';
import React from 'react';
import CargoArea from '../assets/CargoArea.jpg';

function Services() {
    return (
        <div id='Services'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div style={{ height: '100px' }}>&nbsp;</div>
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <Typography variant='body2' sx={{ color: 'lightgreen' }}>Real Solution, Real Fast</Typography>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Best Global Logistic Solutions.</Typography>
                    <br />
                </Grid>

                <Grid container item xs={12} justifyContent="center" spacing={2} gap={1}>
                    <Grid item xs={12} sm={7} md={5} container alignItems="center" sx={{ backgroundColor: 'whitesmoke', paddingBottom: '8px' }} justifyContent="flex-start">
                        <Grid item xs={3.5} sm={3.5} md={3.5}>
                            <img src={CargoArea} width="100%" height="auto" alt="cargo" />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} sx={{ marginLeft: '6px' }}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Air Freight Services</Typography>
                            <Typography variant='body2' sx={{ color: 'darkgray' }}>
                                At our Auto Service garage, we fully appreciate how difficult it can be for people to find.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={7} md={5} container alignItems="center" sx={{ backgroundColor: 'whitesmoke', paddingBottom: '8px' }} justifyContent="flex-start">
                        <Grid item xs={3.5} sm={3.5} md={3.5}>
                            <img src={CargoArea} width="100%" height="auto" alt="cargo" />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} sx={{ margin: '6px' }}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Drone Services</Typography>
                            <Typography variant='body2' sx={{ color: 'darkgray' }}>
                                These are unique and often differ from one industry to the other. Our logistics expertise.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ marginLeft:'100px', color: 'darkgray' }} variant='body2'>
                        Logistic & Transport Solutions Saves Your Time.<button style={{ backgroundColor: 'white' }}><span style={{ color: 'black', fontWeight: 'bold' }}>Finds Your Solutions</span></button>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Services;
