import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { deleteSecByID, getAllSec } from "../api/httprequests";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const Cards = () => {
  const [securities, setSecurities] = useState();
  useEffect(() => {
    getAllSec().then((res) => {
      setSecurities(res);
    });
  }, []);

  return (
    <div style={{ width: "100%",  padding: "5% 0 " }}>
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
            {securities &&
              securities.map((elem) => (
                <Grid item xs={12} md={6} lg={3}>
                  <Card key={elem.title} sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={elem.image}
                        alt="employer"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            margin: "20px 0",
                            color: "#777777",
                            fontSize: "15px",
                            fontWeight: "300",
                            lineHeight: "1.625em",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {elem.desc}
                        </Typography>
                        <span>Likes:{elem.likeCount}</span>
                        <br />
                        <span>Comments:{elem.commentCount}</span>
                      </CardContent>
                      <Button
                        variant="outlined"
                        color="error"
                        style={{ display: "block", margin: "0 auto" }}

                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteSecByID(elem._id).then((res) => {
                                Swal.fire(
                                  `${res.title} Deleted!`,
                                  "Your artist has been deleted.",
                                  "success"
                                );
                              });
                              setSecurities(
                                securities.filter((x) => x._id !== elem._id)
                              );
                            }
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Cards;
