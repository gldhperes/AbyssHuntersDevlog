// Components
import BackgroundLayer from "../components/BackgroundLayer/BackgroundLayer.tsx";
import Header from "../components/Header/Header.tsx";
import Hero from "../components/Hero/Hero.tsx";
import About from "../components/About/About.tsx";
import Timeline from "../components/Timeline/Timeline.tsx";
import Footer from "../components/Footer/Footer.tsx";
import LanguageFlags from "../components/LanguageFlags/LanguageFlags.tsx";

// Styles
import styles from "./Devlog.module.css";

export default function Devlog() {
  return (
    <div className={styles.page}>

      <LanguageFlags />

      <BackgroundLayer />
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Timeline />
      </main>
      <Footer />
    </div>
  );

}
