import modelo1 from "../../assets/modelo_1.png";
import modelo2 from "../../assets/modelo_2.png";
import modelo4 from "../../assets/modelo_4.png";
import styles from "./Lookbook.module.css";

const LOOKS = [
  {
    id: 1,
    img: modelo1,
    label: "Look 01",
    name: "Noir Elegance",
    desc: "Conjunto premium · Verão 2025",
  },
  {
    id: 2,
    img: modelo2,
    label: "Look 02",
    name: "Urban Grace",
    desc: "Coleção Exclusiva · Resort",
  },
  {
    id: 3,
    img: modelo4,
    label: "Look 03",
    name: "Power Stance",
    desc: "Alta Moda · Inverno 2025",
  },
];

export default function Lookbook() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Lookbook */}
        <br></br>
        <br></br>
        <div className={styles.eyebrowRow}>
          <span className={styles.goldLine} />
          <span className={styles.eyebrowText}>LOOKBOOK — TEMPORADA 2025</span>
        </div>

        <div className={styles.looksGrid}>
          {LOOKS.map((look, i) => (
            <div
              key={look.id}
              className={`${styles.lookCard} ${i === 1 ? styles.lookCardTall : ""}`}
            >
              <div className={styles.lookImgWrap}>
                <img src={look.img} alt={look.name} className={styles.lookImg} />
                <div className={styles.lookOverlay}>
                  <span className={styles.lookLabel}>{look.label}</span>
                  <div className={styles.lookMeta}>
                    <span className={styles.lookName}>{look.name}</span>
                    <span className={styles.lookDesc}>{look.desc}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
