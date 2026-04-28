import { useState } from "react";
import col1 from "../../assets/coleção_1.png";
import col2 from "../../assets/coleção_2.png";
import col3 from "../../assets/coleção_3.png";
import styles from "./Colecoes.module.css";

const COLLECTIONS = [
  {
    id: 1,
    img: col1,
    name: "Noir Séduction",
    season: "Verão 2025",
    pieces: 24,
    tag: "EXCLUSIVO",
    desc: "Silhuetas ousadas que definem o novo poder feminino.",
  },
  {
    id: 2,
    img: col2,
    name: "Ivory Dreams",
    season: "Resort 2025",
    pieces: 18,
    tag: "NOVO",
    desc: "Leveza etérea em tecidos que sussurram elegância.",
  },
  {
    id: 3,
    img: col3,
    name: "Velvet Rebellion",
    season: "Inverno 2025",
    pieces: 31,
    tag: "TENDÊNCIA",
    desc: "Onde o romantismo encontra a subversão moderna.",
  },
];

export default function Colecoes() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.goldLine} />
            <span className={styles.eyebrowText}>COLEÇÕES EM DESTAQUE</span>
          </div>
          <h2 className={styles.title}>
            Universos de<br /><em>Alta Moda</em>
          </h2>
        </div>
        // criar uma rota de mostruario omostrando todas as coleções
        <button className={styles.btnOutline} onClick={() => onNavigate("Coleções")}>
          Ver Todas →
        </button>
      </div>

      <div className={styles.grid}>
        {COLLECTIONS.map((col, i) => (
          <div
            key={col.id}
            className={`${styles.card} ${i === 1 ? styles.cardOffset : ""}`}
            onMouseEnter={() => setHovered(col.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={styles.imgWrap}>
              <img
                src={col.img}
                alt={col.name}
                className={styles.img}
                style={{ transform: hovered === col.id ? "scale(1.06)" : "scale(1)" }}
              />
              <div className={styles.overlay} />
              <span className={styles.tag}>{col.tag}</span>
              <div className={styles.cardInfo}>
                <span className={styles.season}>{col.season}</span>
                <h3 className={styles.cardName}>{col.name}</h3>
                <p className={styles.cardDesc}>{col.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.pieces}>{col.pieces} PEÇAS</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
