import { Button, Grid, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import d26th from '../assets/d26th.jpeg'
import d20th from '../assets/d20th.jpeg'
import d22th from '../assets/d22th.jpg'
import d15th from '../assets/d15th.jpeg'
import { Margin, Padding } from '@mui/icons-material'

function News() {
    const arr = [d26th, d22th, d20th, d15th];
    return (
        <div style={{ marginTop: '50px' }}>
            <Grid container spacing={0}>
                <Grid item xs={12} textAlign='center'>
                    <Typography variant='h4'>
                        LATEST NEWS
                    </Typography>
                    <br /><Typography variant='body2'>
                        INTEGER CONGUE ELIT
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>

                {arr.map((image, index) => (
                    <><Fragment key={image}>
                        {index % 2 === 0 && <Grid item xs={3}></Grid>}
                        <Button variant='contained' sx={{ backgroundColor: 'gray' }}>
                            <Grid sx={{ backgroundColor: 'gray' }} item xs={4}>
                                <img src={image} alt="image" width="200px" height="200px" />
                            </Grid>
                        </Button>
                        {index % 2 === 0 && <Grid item xs={3}></Grid>}

                    </Fragment><br /><br /></>
                ))}

            </Grid>
        </div>
    )
}

export default News