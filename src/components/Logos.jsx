import { Grid } from '@mui/material'
import React from 'react'
import com from '../assets/companylogo.png'
import '../styles/Logos.css'

function Logos() {
    const arr = [com, com, com, com, com, com, com, com, com, com, com, com];
    return (
        <div>
            <Grid container>
                <Grid item xs={12} className='film'>
                    {arr.map((item, index) => (
                        <img key={index} src={item} alt="Company Logo" style={{ marginRight: '20px', width: '100px', height: '100px', margin: '10px' }} />
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Logos