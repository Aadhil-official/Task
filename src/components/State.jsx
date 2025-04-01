import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function State() {
    const [countdel, setCountdel] = useState(0)
    const [countcon, setCountcon] = useState(0)
    const [countsat, setCountsat] = useState(0)
    const [countton, setCountton] = useState(0)

    useEffect(() => {
        setCountcon(137);
        setCountdel(890);
        setCountton(740);
        setCountsat(600);
    }, []);

    return (
        <div id='Tracking'>
            <Grid container justifyContent='center' spacing={4}>
                <Grid item xs={12}>
                    <div style={{ marginTop: '60px' }}>&nbsp;</div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} container justifyContent="center" alignItems="center" textAlign="left">
                    <Typography variant='h3' sx={{ fontWeight: 'bold', marginRight: '5px' }}>{countdel}</Typography>
                    <Typography variant='body1'>
                        Delivered<br />packages
                    </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3} container justifyContent="center" alignItems="center" textAlign="left">
                    <Typography variant='h3' sx={{ fontWeight: 'bold', marginRight: '5px' }}>{countcon}</Typography>
                    <Typography variant='body1'>
                        Countries<br />covered
                    </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3} container justifyContent="center" alignItems="center" textAlign="left">
                    <Typography variant='h3' sx={{ fontWeight: 'bold', marginRight: '5px' }}>{countton}</Typography>
                    <Typography variant='body1'>
                        Tons<br />of Goods
                    </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3} container justifyContent="center" alignItems="center" textAlign="left">
                    <Typography variant='h3' sx={{ fontWeight: 'bold', marginRight: '5px' }}>{countsat}</Typography>
                    <Typography variant='body1'>
                        Satisfied<br />Clients
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default State