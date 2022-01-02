import styles from "./Card.module.css";
import Image from "next/image";
import pic from "/public/images/trashmosphere.png";

export default function Card(props) {
  
    const myLoader = ({ src, width, quality }) => {
    return `/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${src}&w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <>
      <div className={styles.container}>
        <div className="image">
          <Image
            loader={myLoader}
            src={pic}
            alt="trashmosphere"
            width={400}
            height={200}
            placeholder="blur"
            blurDataURL="true"
          />
        </div>
        <div className={styles.text}>
          <details>
            <summary className={styles.title}>{props.title} </summary>
            <p className={styles.description}>{props.description}</p>
          </details>
        </div>
      </div>
    </>
  );
}
