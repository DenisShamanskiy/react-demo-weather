import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
}
