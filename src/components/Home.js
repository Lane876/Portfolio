import React from "react";
import { Typography } from "@material-ui/core";
import Typed from "react-typed";
import { useStyles } from "../styles";
import Footer from "./Footer";
import astro from "../image/astro.jpg";

const Home = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        padding: "40px",
        overflowX: "hidden",
      }}
    >
      <img
        src={astro}
        style={{
          paddingTop: "50px",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          minheight: "100%",
          zIndex: "-1",
        }}
        alt="Cover BG"
      />
      <div className={classes.typedContainer}>
        <Typography variant="h4">
          <Typed strings={["Hi, I am Milan..."]} typeSpeed={20} />
        </Typography>
        <br />
        <Typography variant="h5">
          <Typed
            strings={[
              "Web Development",
              "Design",
              "Software Engineering",
              "ReactJS",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
