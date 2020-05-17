import React from "react";
import { useStyles } from "../styles";
import astro2 from "../image/astro2.jpg";
import Footer from "./Footer";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        src={astro2}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          marginTop: "50px",
          width: "100%",
          minheight: "100%",
          zIndex: "-1",
          background: "cover",
        }}
        alt="project cover"
      />
      <form
        className={classes.formControl}
        autoComplete="off"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <TextField label="Name" fullWidth>
          <input type="text" name="name" />
        </TextField>
        <TextField label="Email" fullWidth>
          <input type="email" name="email" />
        </TextField>
        <TextField label="Message" multiline={10} fullWidth>
          <input name="message" />
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          endIcon={<Send />}
          style={{
            marginTop: 20,
          }}
        >
          Submit
        </Button>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
