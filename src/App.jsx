import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "@tanstack/react-router";
import { useEffect } from "react";

function App() {
  return (
    <div className="h-screen flex flex-col bg-zinc-200">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
