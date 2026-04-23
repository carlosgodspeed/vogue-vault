import modelo3 from "../assets/modelo_3.png";
import styles from "./Hero.module.css";

export default function Hero({ onNavigate }) {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay} />

      <div className={styles.modelRight}>
        <img src={modelo3} alt="Modelo Vogue Vault" className={styles.modelImg} />
        <div className={styles.modelFade} />
      </div>

      <div className={styles.content}>
        <div className={styles.logoBlock}>
        </div>

        <div className={styles.tagline}>
          <span className={styles.line} />
          <span className={styles.tagText}>MODA E ESTILO</span>
          <span className={styles.line} />
        </div>

        <p className={styles.subtitle}>
          Descubra peças que transcendem tendências.<br />
          Alta moda, identidade, poder feminino.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => onNavigate("Coleções")}>
            Ver Coleções
          </button>
          <button className={styles.btnOutline} onClick={() => onNavigate("Promoções")}>
            Promoções
          </button>
        </div>

        <div className={styles.stats}>
          {[
            { num: "312+", label: "Peças Exclusivas" },
            { num: "48", label: "Designers" },
            { num: "40%", label: "Black Friday Off" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>ROLAR</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
