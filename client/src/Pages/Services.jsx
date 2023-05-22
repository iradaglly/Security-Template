import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

const Services = () => {
  return (
    <div style={{ width: "100%", padding: "5% 0 " }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "38px" }}>Our Offered Services</h1>
        <p style={{ color: "#777777" }}>
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  maxWidth: 350,
                  padding: "20px",
                  backgroundColor: "#f9f9ff",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://preview.colorlib.com/theme/security/img/s1.jpg.webp"
                    alt="employers"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      Basic & Coomon Repairs
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginTop: "20px",
                        color: "#777777",
                        fontSize: "15px",
                        fontWeight: "300",
                        lineHeight: "1.625em",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Computer users and programmers have become so accustomed
                      to using Windows, even for the changing capabilities and
                      the appearances of the graphical.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  maxWidth: 350,
                  padding: "20px",
                  backgroundColor: "#f9f9ff",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://preview.colorlib.com/theme/security/img/s2.jpg.webp"
                    alt="employers"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                   Brake Repairs & Services
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginTop: "20px",
                        color: "#777777",
                        fontSize: "15px",
                        fontWeight: "300",
                        lineHeight: "1.625em",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Computer users and programmers have become so accustomed
                      to using Windows, even for the changing capabilities and
                      the appearances of the graphical.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  maxWidth: 350,
                  padding: "20px",
                  backgroundColor: "#f9f9ff",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://preview.colorlib.com/theme/security/img/s3.jpg.webp"
                    alt="employers"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
             Preventive Maintenance
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginTop: "20px",
                        color: "#777777",
                        fontSize: "15px",
                        fontWeight: "300",
                        lineHeight: "1.625em",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Computer users and programmers have become so accustomed
                      to using Windows, even for the changing capabilities and
                      the appearances of the graphical.
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

export default Services;
