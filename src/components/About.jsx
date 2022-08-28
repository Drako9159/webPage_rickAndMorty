import twitterColor from "../assets/twitter-color.png";
import gitHub from "../assets/github.png";
import style from "./About.module.css";

const about = {
  github: "https://github.com/Drako9159",
  twitter: "https://twitter.com/Drako9159",
  provider: "https://rickandmortyapi.com",
};

export default function About() {
  return (
    <div className={style.container}>
      <ul>
        <li>
          <h3>By Antonio Jaramillo</h3>
          <a href={about.github} target="_blank">
            <img src={gitHub} />
          </a>
          <a href={about.twitter} target="_blank">
            <img src={twitterColor} />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href={about.provider} target="_blank">
            The Rick and Morty API
          </a>
        </li>
      </ul>
    </div>
  );
}
