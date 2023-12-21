import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

function UnderConstructionPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <FontAwesomeIcon icon={faTools} size="4x" style={{ color: "#3498db" }} />
      <h1 style={{ marginTop: "20px" }}>Página em Construção</h1>
      <p>
        Estamos trabalhando arduamente para trazer uma experiência incrível em
        breve. Enquanto isso, agradeço sua paciência e apoio.
      </p>
      <div
        style={{
          width: "100px",
          height: "2px",
          backgroundColor: "#3498db",
          margin: "20px auto",
        }}
      ></div>
      <p style={{ fontStyle: "italic", color: "#777" }}>
        "A construção do futuro está em andamento."
      </p>
    </div>
  );
}

export default UnderConstructionPage;
