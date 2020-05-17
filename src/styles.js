import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(3),
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-around",
    textDecoration: "none",
    listStyle: "none",
  },
  typedContainer: {
    position: "absolute",
    top: "40%",
    left: "40%",
    transform: "translate(-60%, -40%)",
    width: "100vw",
    textAlign: "center",
    zIndex: "1",
  },
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    maxHeight: "300px",
    width: "100vw",
    backgroundColor: "#424242",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },

  //Project

  article: {
    display: "grid",
    // gridTemplateColumns: "minmax(auto, 935px)",
    width: "100%",
    padding: "100px",
  },
  gridArticle: {
    [theme.breakpoints.down("sm")]: {
      gridGap: 20,
      gridTemplateColumns: "1fr",
    },
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 20,
  },

  cardAction: {
    display: "flex",
    justifyContent: "space-around",
  },

  //FormControl

  formControl: {
    position: "absolute",
    top: 200,
    left: 300,
    width: "30vw",
    [theme.breakpoints.down("sm")]: {
      top: 100,
      left: 60,
      width: 220,
    },
    marginTop: theme.spacing(2),
  },
}));
