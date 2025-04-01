import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import cargo2 from '../assets/cargo2.webp'

function Welcome() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div id='Pages'>
            <Grid container>
                <Grid item xs={12} sx={{ height: '100px' }}>
                </Grid>
                <Grid item xs={12} md={7} sx={{ marginTop: isSmallScreen ? "" : "2%", textAlign: isSmallScreen ? 'center' : 'left' }}>
                    <img src={cargo2} style={{ marginLeft: '20px' }} width={isSmallScreen ? "70%" : "90%"} height='auto' alt="cargo img" />
                </Grid>
                <Grid item xs={12} md={4} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
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
                    <Button variant='contained' size='small' sx={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '0px', color: '#00008e' }}>
                        more about us
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Welcome