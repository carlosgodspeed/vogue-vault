import modelo1 from "../assets/modelo_1.png";
import modelo2 from "../assets/modelo_2.png";
import modelo3 from "../assets/modelo_3.png";
import roupa1 from "../assets/roupa_1.png";
import roupa2 from "../assets/roupa_2.png";
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
    img: modelo3,
    label: "Look 03",
    name: "Power Stance",
    desc: "Alta Moda · Inverno 2025",
  },
];

const PECAS = [
  {
    id: 1,
    img: roupa1,
    name: "Camisa Signature",
    price: "R$ 389,00",
    tag: "NOVO",
  },
  {
    id: 2,
    img: roupa2,
    name: "Casaco Luxe Shearling",
    price: "R$ 1.290,00",
    tag: "EXCLUSIVO",
  },
];

export default function Lookbook() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Lookbook */}
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

        {/* Produtos em Destaque */}
        <div className={styles.pecasSection}>
          <div className={styles.eyebrowRow} style={{ marginBottom: 36 }}>
            <span className={styles.goldLine} />
            <span className={styles.eyebrowText}>PEÇAS EM DESTAQUE</span>
          </div>

          <div className={styles.pecasGrid}>
            {PECAS.map((peca) => (
              <div key={peca.id} className={styles.pecaCard}>
                <div className={styles.pecaImgWrap}>
                  <img src={peca.img} alt={peca.name} className={styles.pecaImg} />
                  <span className={styles.pecaTag}>{peca.tag}</span>
                  <button className={styles.pecaBtn}>Adicionar à Sacola</button>
                </div>
                <div className={styles.pecaInfo}>
                  <span className={styles.pecaName}>{peca.name}</span>
                  <span className={styles.pecaPrice}>{peca.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
