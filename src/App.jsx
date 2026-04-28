import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Colecoes from "./components/colecoes/Colecoes";
import Lookbook from "./components/lookbook/Lookbook";
import Promocoes from "./components/Promocoes/Promocoes";
import Contato from "./components/contato/Contato";
import Footer from "./components/footer/Footer";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Início");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Início":
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <div className="section-divider" />
            <Colecoes />
            <div className="section-divider" />
            <Lookbook />
          </>
        );
      case "Coleções":
        return (
          <div className="page-wrapper">
            <Colecoes />
            <div className="section-divider" />
            <Lookbook />
          </div>
        );
      case "Promoções":
        return (
          <div className="page-wrapper">
            <Promocoes />
          </div>
        );
      case "Contato":
        return (
          <div className="page-wrapper">
            <Contato />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
