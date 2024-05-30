import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
const dataEnv = import.meta.env;

const firebaseConfig = {
  apiKey: dataEnv.VITE_FIREBASE_API_KEY,
  authDomain: dataEnv.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: dataEnv.VITE_FIREBASE_PROJECT_ID,
  storageBucket: dataEnv.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: dataEnv.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: dataEnv.VITE_FIREBASE_APP_ID,
};

// Inicializar Firebase
initializeApp(firebaseConfig);

// Renderizar la aplicación de React
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
