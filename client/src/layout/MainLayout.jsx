import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header className="bg-purple-800 text-white" />
        <main className="flex-1 p-4">
            <Outlet />
        </main>
        <Footer className="bg-purple-800 text-white" />
    </div>

  );
}
