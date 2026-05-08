import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["Início", "Coleções", "Promoções","Contato"];

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navInner}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Vogue Vault Logo" className={styles.logo} />
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`${styles.navLink} ${currentPage === link ? styles.active : ""}`}
                onClick={() => { onNavigate(link); setMenuOpen(false); }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={menuOpen ? styles.barOpen : ""} />
            <span className={menuOpen ? styles.barHide : ""} />
            <span className={menuOpen ? styles.barOpen : ""} />
          </button>
        </div>
      </div>
    </nav>
  );
}
