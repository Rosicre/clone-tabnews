import React from "react";

function UnderConstructionPage() {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>🚧</div>
      <h1 style={styles.title}>Página em Construção</h1>
      <p style={styles.text}>
        Estamos trabalhando arduamente para trazer uma experiência incrível em
        breve. Enquanto isso, agradecemos sua paciência e apoio.
      </p>
      <div style={styles.line}></div>
      <p style={styles.quote}>
        "A construção do futuro está em andamento."
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  icon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    margin: "10px 0",
  },
  text: {
    fontSize: "16px",
    color: "#555",
  },
  line: {
    width: "100px",
    height: "2px",
    backgroundColor: "#3498db",
    margin: "20px auto",
  },
  quote: {
    fontStyle: "italic",
    color: "#777",
  },
};

export default UnderConstructionPage;
