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
        <div style={{marginTop:'50px'}}>
            <Grid container justifyContent='center'>
                <Grid textAlign='center' item xs={2}>
                    <Typography variant='h4'>
                        {countdel} Delivered<br />packages
                    </Typography>
                </Grid>
                <Grid textAlign='center' justifyContent='center' item xs={2}>
                    <Typography variant='h4'>
                        {countcon} Countries<br />covered
                    </Typography>
                </Grid>
                <Grid textAlign='center' justifyContent='center' item xs={2}>
                    <Typography variant='h4'>
                        {countton} Tons<br />of Goods
                    </Typography>
                </Grid>
                <Grid textAlign='center' justifyContent='center' item xs={2}>
                    <Typography variant='h4'>
                        {countsat} Satisfied<br />Clients
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default State