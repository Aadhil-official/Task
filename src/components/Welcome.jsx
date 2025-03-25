import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import cargo2 from '../assets/cargo2.webp'

function Welcome() {
    return (
        <div id='Pages' style={{ marginTop: '50px' }}>
            <Grid container>
                <Grid item xs={6}>
                    <img src={cargo2} style={{ marginLeft: '20px' }} width='70%' height='90%' alt="cargo img" />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h4'>
                        TransMax Logistic Around <span style={{ color: 'orange' }}>the world</span>
                    </Typography>

                    <Typography variant='body2'>
                        TransMax is the world's driving worldwide coordinations supplier - we uphold industry and exchange the world wide trade of merchandise through land transport<br /><br />

                        <span style={{ color: 'gray' }}>
                            Our worth added administrations guarantee the progression of prouducts proceeds consistently and supply chains stay loan and streamined for progress
                        </span>
                    </Typography>
                    <br /><br />
                    <Button variant='contained' size='small' sx={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '0px' }}>
                        more about us
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Welcome