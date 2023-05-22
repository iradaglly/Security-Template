import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Input from "@mui/base/Input";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        padding:"30px 0",
        backgroundColor: "#04091e",
        bottom: 0,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Container style={{ paddingTop: "4%" }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6} lg={4}>
              <h3 style={{ color: "white" }}>About Us</h3>
              <p style={{ color: "#716d6c" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua
              </p>
              <br />
              <p style={{ color: "#716d6c" }}>
                Copyright ©2023 All rights reserved | This template is made with{" "}
                <FavoriteBorderIcon
                  a
                  style={{ color: "#fab700", fontSize: "18px" }}
                />{" "}
                by ColorLib
              </p>
            </Grid>
            <Grid item xs={12} md={6} lg={4} style={{padding:"0 50px"}}>
              <h3 style={{ color: "white" }}>NewsLetter</h3>
              <p style={{ color: "#716d6c" }}>Stay update with our latest</p>
              <br />
              <Input style={{ width: "300px", height: "50px" }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {" "}
              <h3 style={{ color: "white" }}>Follow Us</h3>
              <p style={{ color: "#716d6c" }}>Let us be social</p>
              <br />
              <ul style={{display:"flex",listStyle:"none",padding:"0"}}>
                <li><FacebookIcon style={{color:"#716d6c",marginRight:"10px"}}/></li>
                <li><TwitterIcon style={{color:"#716d6c",marginRight:"10px"}}/></li>
                <li><PublicIcon style={{color:"#716d6c",marginRight:"10px"}}/></li>
                <li><InstagramIcon style={{color:"#716d6c",marginRight:"10px"}}/></li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
