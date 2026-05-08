import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

const FOOTER_COLS = [
  {
    title: "Navegação",
    links: ["Início", "Coleções", "Promoções", "Contato", "Sobre"],
  },
  {
    title: "Vault",
    links: ["Acesso Membro", "Lookbook", "Tendências", "Novas Peças", "Parcerias"],
  },
  {
    title: "Atendimento",
    links: ["Central de Ajuda", "Trocas e Devoluções", "Rastreio de Pedido", "Atacado", "Newsletter"],
  },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={logo} alt="Vogue Vault" className={styles.logo} />
            <p className={styles.tagline}>
              Onde a moda se torna arte e cada peça conta uma história de poder e beleza.
            </p>
            <div className={styles.socialRow}>
              {["Instagram", "Pinterest", "TikTok"].map((s) => (
                <a key={s} href="#" className={styles.social}>{s}</a>
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className={styles.col}>
              <span className={styles.colTitle}>{col.title.toUpperCase()}</span>
              <ul className={styles.colLinks}>
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      className={styles.colLink}
                      onClick={() => {
                        const pages = ["Início", "Coleções", "Promoções", "Contato","Lookbook"];
                        if (pages.includes(link)) onNavigate(link);
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 Vogue Vault. Todos os direitos reservados.</span>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacidade</a>
            <a href="#" className={styles.bottomLink}>Termos</a>
            <a href="#" className={styles.bottomLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
