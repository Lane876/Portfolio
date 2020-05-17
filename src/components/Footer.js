import React from "react";
import { useStyles } from "../styles";
import { GitHub, Twitter, Instagram, Facebook } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography className={classes.footerLinks}>
        <a
          href="https://github.com/Lane876"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub
            style={{
              fontSize: 45,
              color: "#fff",
            }}
            className={classes.icon}
          />
        </a>
        <a
          href="https://twitter.com/Lane8765"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter
            style={{
              fontSize: 45,
              color: "#fff",
            }}
            className={classes.icon}
          />
        </a>
        <a
          href="https://www.instagram.com/hyperionnn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            style={{
              fontSize: 45,
              color: "#fff",
            }}
            className={classes.icon}
          />
        </a>
        <a
          href="https://www.facebook.com/milan.milenkovic.376?ref=bookmarks"
          target="_blank"
        >
          <Facebook
            style={{
              fontSize: 45,
              color: "#fff",
            }}
            className={classes.icon}
          />
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
