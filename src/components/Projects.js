import React from "react";
import "../App.css";
import { useStyles } from "../styles";
import astro1 from "../image/astro1.png";
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import { getProjects } from "../projectData";
import Footer from "./Footer";
import { GitHub } from "@material-ui/icons";

// const cards = {
//   title: "Random title",
//   url:
//     "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//   desc: "Random text",
// };

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        src={astro1}
        style={{
          paddingTop: "50px",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          minheight: "100%",
          zIndex: "-1",
        }}
        alt="project cover"
      />
      <article className={classes.article}>
        <div className={classes.gridArticle}>
          {getProjects.map((project) => (
            <GridComponent key={project.id} project={project} />
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
};

function GridComponent({ project }) {
  const classes = useStyles();
  return (
    <>
      <Card
        style={{
          maxHeight: "500px",
          maxWidth: "100%",
        }}
        align="center"
      >
        <CardActionArea>
          <CardMedia>
            <img
              src={project.thumbnail}
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
              }}
              alt="project cover"
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="navlinks"
          >
            <Button size="small" color="primary" variant="outlined">
              DEMO
            </Button>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navlinks"
          >
            <GitHub
              style={{
                color: "#76ff03",
                marginRight: "10px",
              }}
            />
          </a>
        </CardActions>
      </Card>
    </>
  );
}

export default Projects;
