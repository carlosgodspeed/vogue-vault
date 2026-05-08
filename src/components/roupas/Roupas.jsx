import roupa1 from "../../assets/roupa_1.png";
import roupa2 from "../../assets/roupa_2.png";
import styles from "./Pecasroupas.css";

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

export default function Pecasroupas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
