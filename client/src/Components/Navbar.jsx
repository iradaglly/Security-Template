import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 ,position:"fixed",width:"100%",backgroundColor:"rgba(0, 0, 0, 0.615)"}}>
        <AppBar position="static" style={{backgroundColor:"transparent",}}>
          <Container>
            <Toolbar >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              
              <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"bold",fontSize:"21px" }}>
                Security Services
              </Typography>
              <Button
                style={{ marginRight: "10px",color:"white",fontWeight:"bold"
             }}
            
              >
            <Link to="/">Home</Link>
              </Button>
             
              <Button   style={{color:"white",fontWeight:"bold"
             }}>
               <Link to="/add">Add</Link>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
