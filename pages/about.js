import Image from "next/image";
import hero from "../public/images/hero.png";
import content from "../utils/content.json";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    document.title = "About Me | Tanner Maasen";
  }, []);
  return (
    <>
      <style jsx global>
        {`
          .image-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .image-wrapper > span img {
            border-radius: 50%;
            box-shadow: inset rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
          @media screen and (min-width: 750px) {
            .container {
              background: white;
              border-radius: 1rem;
              margin: auto;
              width: 50%;
              margin-top: 4rem;
            }
          }
          .content {
            padding: 1em 2em 2em;
          }
          .content .subtitle {
            line-height: 1.5em;
            font-size: 15px;
            margin: 0;
          }
          .content .date {
            font-size: medium;
            font-style: italic;
            color: #818181;
            margin-right: auto;
          }
        `}
      </style>
      <div className="container">
        <div className="image-wrapper">
          <h1>{content.about.title}</h1>
          <Image
            src={hero}
            alt="me"
            objectFit="cover"
            objectPosition="50% 0%"
            width={150}
            height={150}
            placeholder="blur"
          />
          <div className="content">
            <span className="date">{content.about.entryDate}</span>
            <h5 className="subtitle">{content.about.subtitle}</h5>
            <br />
            <p>{content.about.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
