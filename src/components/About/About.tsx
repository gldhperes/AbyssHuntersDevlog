import styles from "./About.module.css";

const highlights = [
  { label: "Gênero", value: "RPG, Ação e exploração" },
  { label: "Ambientação", value: "Fantasia Medieval, Aventura e Exploração." },
  { label: "Tecnologias", value: "Unity, Photon Fusion 2, Playfab" },
  { label: "Status", value: "Em desenvolvimento" },
];

export default function About() {
  return (
    <section className={styles.section} id="sobre" aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.kicker}>Sobre o projeto</p>
          <h2 className={styles.title} id="about-title">
            Um mundo construído sobre o abismo
          </h2>
          <p className={styles.paragraph}>
            Abyss Hunters é um jogo online multiplayer Action RPG inspirado em Dauntless e Monster Hunter. Este
            devlog registra, atualização após atualização, o que está sendo construído: os sistemas,
            as mecânicas e as decisões que dão forma à descida.
          </p>
        </div>

        <dl className={styles.highlights}>
          {highlights.map((item) => (
            <div className={styles.highlight} key={item.label}>
              <dt className={styles.highlightLabel}>{item.label}</dt>
              <dd className={styles.highlightValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}