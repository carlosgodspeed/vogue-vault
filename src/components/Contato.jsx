import { useState } from "react";
import styles from "./Contato.module.css";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.nome && form.email && form.mensagem) {
      setSent(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.goldLine} />
            <span className={styles.eyebrowText}>FALE CONOSCO</span>
          </div>
          <h2 className={styles.title}>
            Entre em<br /><em>Contato</em>
          </h2>
          <p className={styles.desc}>
            Atendimento exclusivo para clientes Vogue Vault. Nossa equipe responde em até 24 horas.
          </p>

          <div className={styles.infoList}>
            {[
              { label: "E-MAIL", value: "contato@voguevault.com.br" },
              { label: "WHATSAPP", value: "+55 (11) 9 9999-0000" },
              { label: "HORÁRIO", value: "Seg–Sex, 9h às 18h" },
            ].map((info) => (
              <div key={info.label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{info.label}</span>
                <span className={styles.infoValue}>{info.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.socialRow}>
            {["Instagram", "Pinterest", "TikTok"].map((s) => (
              <a key={s} href="#" className={styles.socialLink}>{s}</a>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Mensagem Enviada</h3>
              <p className={styles.successSub}>Entraremos em contato em breve.</p>
            </div>
          ) : (
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Mensagem</label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Como podemos ajudá-la?"
                  className={styles.textarea}
                  rows={5}
                />
              </div>
              <button className={styles.btnSubmit} onClick={handleSubmit}>
                Enviar Mensagem →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
