import machupicchu from "../../assets/machu-picchu.jpg";

import styles from "./hero.module.css";

export const Hero: React.FC<{
  title: string;
  text1: string;
  text2: string;
  text3: string;
}> = (props) => {
  const { title } = props;
  const { text1 } = props;
  const { text2 } = props;
  const { text3 } = props;

  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.nav}>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
      </div>
      <img src={machupicchu} className={styles.hero_photo} alt="machu-picchu" />
    </section>
  );
};

Hero.displayName = "Hero Component";

// export default hero;
