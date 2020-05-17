import React from "react";
import { useStyles } from "../styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar color="inherit">
      <Toolbar className={classes.nav}>
        <Link to="/" className="navlinks">
          <Button>Lane876</Button>
        </Link>
        <div className={classes.navButtons}>
          <Link to="/projects" className="navlinks">
            <Button color="primary" size="large">
              PROJECTS
            </Button>
          </Link>
          <Link to="/contact" className="navlinks">
            <Button color="primary" size="large">
              CONTACT
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
