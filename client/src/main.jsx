import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";

import CollectionPage from "./components/collection/CollectionPage";
import MainLayout from "./layout/MainLayout";

// Wrapper que carga items desde la API y los pasa al componente
function CollectionPageWrapper() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const url = import.meta.env.VITE_API_URL
      ? import.meta.env.VITE_API_URL + "/api/items"
      : "http://localhost:5000/api/items";

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("Network response was not ok: " + r.status);
        return r.json();
      })
      .then(setItems)
      .catch((e) => {
        console.error("Error fetching items:", e);
        setItems([]);
      });
  }, []);

  return <CollectionPage items={items} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/collection" element={<CollectionPageWrapper />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
