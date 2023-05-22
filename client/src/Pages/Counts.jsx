import { Container } from '@mui/system'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Counts = () => {
  return (
    <div style={{ backgroundColor: '#fab700' }}>
            <Container maxWidth='lg'>
                <Box sx={{ flexGrow: 1,textAlign:'center',padding:'60px 0px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} lg={2}>
                            <p style={{fontSize:'50px',color:'white',fontFamily:'sans-serif'}}>2536</p>
                            <p style={{color:'white',}}>Projects Completed</p>
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <p style={{fontSize:'50px',color:'white',fontFamily:'sans-serif'}}>6784</p>
                            <p style={{color:'white',}}>Really Happy Clients</p>
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <p style={{fontSize:'50px',color:'white',fontFamily:'sans-serif'}}>1059</p>
                            <p style={{color:'white',}}>Total Tasks Completed</p>
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <p style={{fontSize:'50px',color:'white',fontFamily:'sans-serif'}}>2239</p>
                            <p style={{color:'white',}}>Cups of Coffee Taken</p>
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <p style={{fontSize:'50px',color:'white',fontFamily:'sans-serif'}}>434</p>
                            <p style={{color:'white',}}>In House Professionals</p>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </div>
  )
}

export default Counts