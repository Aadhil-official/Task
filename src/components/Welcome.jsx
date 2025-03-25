import { Grid, Typography } from '@mui/material'
import React from 'react'
import cargo2 from '../assets/cargo2.webp'

function Welcome() {
    return (
        <div style={{marginTop:'20px'}}>
            <Grid container>
                <Grid item xs={6}>
                    <img src={cargo2} style={{marginLeft:'20px'}} width='70%' height='90%' alt="cargo img" />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4'>
                        TransMax Logistic Around <span style={{ color: 'orange' }}>the world</span>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Welcome