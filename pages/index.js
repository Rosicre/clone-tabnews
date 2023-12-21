import React from "react";
import "./UnderConstructionPage.css"; // Importe o arquivo CSS

function UnderConstructionPage() {
  return (
    <div className="under-construction-container">
      <div className="construction-icon">&#x1F6A7;</div>
      <h1>Página em Construção</h1>
      <p>
        Estamos trabalhando arduamente para trazer uma experiência incrível em
        breve. Enquanto isso, agradeço sua paciência e apoio.
      </p>
      <div className="construction-line"></div>
      <p className="quote">
        "A construção do futuro está em andamento."
      </p>
    </div>
  );
}

export default UnderConstructionPage;
