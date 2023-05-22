import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Images = () => {
  return (
    <div style={{ padding: "50px 0px" }}>
      <Container>
        <Typography
          style={{ fontSize: "36px", textAlign: "center", fontWeight: "700" }}
        >
          Latest From Our Gallery
        </Typography>
        <p
          style={{
            color: "#777777",
            textAlign: "center",
            marginTop: "2%",
            marginBottom: "40px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
        </p>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6} md={7}>
              <img
                src="https://preview.colorlib.com/theme/security/img/g1.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <img
                src="https://preview.colorlib.com/theme/security/img/g2.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <img
                src="	https://preview.colorlib.com/theme/security/img/g3.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <img
                src="https://preview.colorlib.com/theme/security/img/g4.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <img
                src="https://preview.colorlib.com/theme/security/img/g5.jpg.webp"
                alt=""
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <img
                src="https://preview.colorlib.com/theme/security/img/g6.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6} md={7}>
              <img
                src="https://preview.colorlib.com/theme/security/img/g7.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Images;
