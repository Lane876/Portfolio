import { v4 as uuid } from "uuid";

import instagram from "./projectImages/instagram.png";
import musicapp from "./projectImages/musicapp.png";
import covid from "./projectImages/covid19.png";
import movieapp from "./projectImages/movieapp.png";
import hackernews from "./projectImages/hackernews.png";
import riseshop from "./projectImages/riseshop.png";

export const getProjects = [
  {
    id: uuid(),
    title: "Instagram Clone",
    thumbnail: `${instagram}`,
    desc:
      "I've played around with ReactJS, Apollo, GraphQL, MaterialUi, firebase. It is still a work in progress...",
    link: "https://instagram-clone-7e8df.web.app/",
    github: "https://github.com/Lane876/instagram-clone",
  },
  {
    id: uuid(),
    title: "Music Share App",
    thumbnail: `${musicapp}`,
    desc:
      "I've built this awesome app usig ReactJS, GraphQL, Context, MaterialUi, React-Player, Apollo, firebase and sweet love...",
    link: "https://music-share-app.web.app/",
    github: "https://github.com/Lane876/music-share",
  },
  {
    id: uuid(),
    title: "COVID-19 Data Tracker",
    thumbnail: `${covid}`,
    desc:
      "API is from 'covid19.mathdro.id/api'. I used ReactJS, API, Axios, MaterialUi, react-charts and all safety measurements!",
    link: "https://covid-19-app-285bd.web.app/",
    github: "https://github.com/Lane876/covid-19-tracker",
  },
  {
    id: uuid(),
    title: "Movie Database App",
    thumbnail: `${movieapp}`,
    desc:
      "It is working and it is awesome! I used ReactJS, Axios and firebase.",
    link: "https://movie-db-8fb7f.web.app/",
    github: "https://github.com/Lane876/movie-database-app",
  },
  {
    id: uuid(),
    title: "Hacker News Clone",
    thumbnail: `${hackernews}`,
    desc:
      "In my opinion, this is improved 'https://news.ycombinator.com/'. I used ReactJS and firebase. Such a hacker, much wow!",
    link: "https://hacker-news-clone-1af48.web.app/new/1",
    github: "https://github.com/Lane876/hacker-news-clone",
  },
  {
    id: uuid(),
    title: "E-commerce shop",
    thumbnail: `${riseshop}`,
    desc: "E-commerce site built with ReactJS, Redux, firebase, Stripe",
    link: "https://crown-db-aa592.web.app/",
    github: "https://github.com/Lane876/rise-shop-react-firebase-stripe-redux",
  },
];
