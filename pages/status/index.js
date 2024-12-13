import useSWR from "swr";
import { useState } from "react";
import styles from "./StatusPage.module.css";

// Função para buscar dados da API e calcular a latência
async function fetchStaAPI(key) {
  try {
    const start = performance.now();
    const response = await fetch(key);

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    const end = performance.now();
    const responseBody = await response.json();

    return {
      ...responseBody,
      latency: end - start,
    };
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    return null;
  }
}

export default function StatusPage() {
  const [activeTab, setActiveTab] = useState("database"); // Estado para tab ativa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.statusContainer}>
      <h1 className={styles.statusHeader}>Status do Sistema</h1>

      <div className={styles.tabs}>
        <button
          className={activeTab === "database" ? styles.activeTab : ""}
          onClick={() => handleTabClick("database")}
        >
          Banco de Dados
        </button>
        <button
          className={activeTab === "latency" ? styles.activeTab : ""}
          onClick={() => handleTabClick("latency")}
        >
          Latência
        </button>
        <button
          className={activeTab === "maxConnections" ? styles.activeTab : ""}
          onClick={() => handleTabClick("maxConnections")}
        >
          Máximo de Conexões
        </button>
        <button
          className={activeTab === "openConnections" ? styles.activeTab : ""}
          onClick={() => handleTabClick("openConnections")}
        >
          Conexões Abertas
        </button>
        <button
          className={activeTab === "all" ? styles.activeTab : ""}
          onClick={() => handleTabClick("all")}
        >
          Todos
        </button>
      </div>

      <UpdatedAp activeTab={activeTab} />
    </div>
  );
}

function UpdatedAp({ activeTab }) {
  // Hook para buscar dados com atualização automática
  const { data, error, isValidating } = useSWR("/api/v1/status", fetchStaAPI, {
    refreshInterval: 2000, // Atualiza a cada 2 segundos
  });

  const currentTime = new Date().toLocaleString();

  if (isValidating) {
    return (
      <div className={styles.statusItem}>
        <div className={styles.loading}></div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={styles.statusItem}>
        Não foi possível carregar as informações.
      </div>
    );
  }

  return (
    <div>
      <p className={styles.timestamp}>Atualizado em: {currentTime}</p>
      {activeTab === "database" && (
        <div className={styles.infoGrid}>
          <div>
            <span className={styles.icon}>📂</span>
            <p>Versão do Banco de Dados:</p>
            <h3>{data.dependencies.database.version}</h3>
          </div>
        </div>
      )}
      {activeTab === "latency" && (
        <div className={styles.infoGrid}>
          <div>
            <span className={styles.icon}>⚡</span>
            <p>Latência:</p>
            <h3>{data.latency.toFixed(2)} ms</h3>
          </div>
        </div>
      )}
      {activeTab === "maxConnections" && (
        <div className={styles.infoGrid}>
          <div>
            <span className={styles.icon}>🔗</span>
            <p>Máximo de Conexões:</p>
            <h3>{data.dependencies.database.max_connections}</h3>
          </div>
        </div>
      )}
      {activeTab === "openConnections" && (
        <div className={styles.infoGrid}>
          <div>
            <span className={styles.icon}>📶</span>
            <p>Conexões Abertas:</p>
            <h3>{data.dependencies.database.opened_connections}</h3>
          </div>
        </div>
      )}
      {activeTab === "all" && (
        <div className={styles.infoGrid}>
          <div>
            <span className={styles.icon}>📂</span>
            <p>Versão do Banco de Dados:</p>
            <h3>{data.dependencies.database.version}</h3>
          </div>
          <div>
            <span className={styles.icon}>🔗</span>
            <p>Máximo de Conexões:</p>
            <h3>{data.dependencies.database.max_connections}</h3>
          </div>
          <div>
            <span className={styles.icon}>📶</span>
            <p>Conexões Abertas:</p>
            <h3>{data.dependencies.database.opened_connections}</h3>
          </div>
          <div>
            <span className={styles.icon}>⚡</span>
            <p>Latência:</p>
            <h3>{data.latency.toFixed(2)} ms</h3>
          </div>
        </div>
      )}
    </div>
  );
}
