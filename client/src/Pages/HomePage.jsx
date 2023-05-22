import style from "./home.module.css";
import { Typography } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";

const HomePage = () => {
  return (
    <div className={style.home} style={{ width: "100%", height: "100vh" }}>
      <Container>
        <div style={{ paddingTop: "35%" }}>
          <Typography
            style={{
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "1.8px",
            }}
          >
            OPENNING ON 21ST FEBRUARY, 2018
          </Typography>
          <Typography
            style={{
              fontSize: "48px",
              fontWeight: "700",
              marginTop: "20px",
              color: "white",
            }}
          >
            Exhibition on Modern Era
          </Typography>
          <Typography style={{ color: "white", marginTop: "10px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
            Ut enim ad minim. sed do eiusmod tempor incididunt..
          </Typography>
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#fab700", marginTop: "20px" }}
        >
          GET STARTED
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
