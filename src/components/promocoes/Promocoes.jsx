import promocaoImg from "../../assets/vogue_vault_promoção.png";
import styles from "./Promocoes.module.css";

const DEALS = [
  { label: "Coleção Inverno", discount: "30% OFF", desc: "Seleção de casacos e sobreposições", code: "VAULT30" },
  { label: "Acessórios Premium", discount: "25% OFF", desc: "Bolsas, cintos e joias selecionadas", code: "ACCESS25" },
  { label: "Black Friday", discount: "Até 40% OFF", desc: "Todas as categorias · Oferta limitada", code: "BF2025" },
];

export default function Promocoes() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Banner Principal */}
        <div className={styles.banner}>
          <img src={promocaoImg} alt="Promoções Vogue Vault" className={styles.bannerImg} />
          <div className={styles.bannerOverlay}>
            <div className={styles.bannerContent}>
              <div className={styles.eyebrow}>
                <span className={styles.goldLine} />
                <span className={styles.eyebrowText}>OFERTAS EXCLUSIVAS</span>
              </div>
              <h2 className={styles.bannerTitle}>
                Black Friday<br />
                <em>Vogue Vault</em>
              </h2>
              <p className={styles.bannerSub}>Descontos de até 40% em toda a coleção</p>
              <button className={styles.btnPrimary}>Ver Todas as Ofertas</button>
            </div>
          </div>
        </div>

        {/* Cards de Promoções */}
        <div className={styles.dealsHeader}>
          <span className={styles.goldLine} />
          <span className={styles.eyebrowText}>PROMOÇÕES DA SEMANA</span>
        </div>

        <div className={styles.dealsGrid}>
          {DEALS.map((deal) => (
            <div key={deal.code} className={styles.dealCard}>
              <div className={styles.dealDiscount}>{deal.discount}</div>
              <div className={styles.dealLabel}>{deal.label}</div>
              <p className={styles.dealDesc}>{deal.desc}</p>
              <div className={styles.dealCode}>
                <span className={styles.codeLabel}>CUPOM:</span>
                <span className={styles.code}>{deal.code}</span>
              </div>
              <button className={styles.dealBtn}>Aproveitar</button>
            </div>
          ))}
        </div>

        {/* Countdown Banner */}
        <div className={styles.countdownBanner}>
          <div className={styles.countdownLeft}>
            <span className={styles.countdownTag}>OFERTA RELÂMPAGO</span>
            <h3 className={styles.countdownTitle}>Frete Grátis em Pedidos Acima de R$ 499</h3>
            <p className={styles.countdownSub}>Válido para todo o Brasil · Apenas esta semana</p>
          </div>
          <button className={styles.btnOutline}>Comprar Agora →</button>
        </div>
      </div>
    </section>
  );
}
