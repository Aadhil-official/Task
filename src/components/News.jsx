import { Button, Grid, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import d26th from '../assets/d26th.jpeg';
import d20th from '../assets/d20th.jpeg';
import d22th from '../assets/d22th.jpg';
import d15th from '../assets/d15th.jpeg';
import messageimg from '../assets/messageimg.png';

function News() {
    const arr = [d26th, d22th, d20th, d15th];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id='Blog' style={{ padding: '40px 0' }}>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={12} textAlign='center'>
                    <Typography variant='h4' fontWeight='bold'>
                        LATEST NEWS
                    </Typography>
                    <Typography variant='body2' color='gray' marginTop={1}>
                        INTEGER CONGUE ELIT
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent='center' marginTop={3}>
                {arr.map((image, index) => (
                    <Fragment key={index}>
                        <Grid item xs={12} md={5}>
                            <Button
                                variant='contained'
                                onClick={() => setActiveIndex(index)}
                                sx={{
                                    backgroundColor: activeIndex === index ? 'skyblue' : 'lightgray',
                                    width: '100%',
                                    padding: 1,
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    borderRadius: 0
                                }}
                            >
                                <Grid container>
                                    <Grid item xs={5}>
                                        <img src={image} alt="news" style={{ minHeight: '220px' }} width="100%" height="auto" />
                                    </Grid>
                                    <Grid item xs={7} padding={2} textAlign='left' color= {activeIndex=== index ? 'white':'black'}>
                                    <Typography variant='body1' fontWeight='bold'>
                                        CURABITUR LOREM UISM QUIS
                                    </Typography>
                                    <Typography variant='body2' marginTop={1}>
                                        Admin <img src={messageimg} style={{ marginBottom: '-3px' }} width='20px' height='20px' alt="message icon" /> 15
                                    </Typography>
                                    <Typography variant='body2' marginTop={1}>
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...
                                    </Typography>
                                </Grid>
                        </Grid>
                    </Button>
                        </Grid>
        </Fragment>
    ))
}
            </Grid >
        </div >
    );
}

export default News;
