import React from "react";
import { Hero } from "./components/Hero";
import { Concept } from "./components/Concept";
import { Time } from "./components/Time";
import { History } from "./components/History";
import { Theories } from "./components/Theories";
import { Facts } from "./components/Facts";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-white">
      <Hero />
      <Concept />
      <Time />
      <History />
      <Theories />
      <Facts />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-500 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-2 text-sm uppercase tracking-widest font-bold text-slate-400">
            Продолжайте смотреть вверх
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} Исследователь Космоса. Создано для бесконечного любопытства.
          </p>
        </div>
      </footer>
    </div>
  );
}
