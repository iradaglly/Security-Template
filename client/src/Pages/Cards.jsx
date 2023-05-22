import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = () => {
  return (
    <div style={{ width: "100%", height: "100vh", padding: "5% 0 " }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "38px" }}>Latest From Our Gallery</h1>
        <p style={{ color: "#777777" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua.
        </p>
      </div>
      <Box sx={{ flexGrow: 1, padding: "4% 0" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="employer"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Cards;
