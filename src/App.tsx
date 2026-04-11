import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import mbakRiasImg from "./assets/MbakRias.jpg"; // Variabel: mbakRiasImg;
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <section className="pt-24">
        <div className="p-4">
          <h2 className="font-bold text-gray-800">welcome to my dashboard</h2>
          
          <div className="grid grid-cols-4 pt-7">
            {/* Card Utama */}
            <div className="flex flex-col p-6 bg-red-800 shadow rounded-xl h-50">
              
              {/* Bagian Hitam (Atas) */}
              <div className="flex justify-between items-center h-4/10 w-full bg-black">
                <a href="">cost saving</a>
                <a href="">kanan</a>
              </div>
              
              {/* Bagian Bawah (Yellow) */}
              <div className="flex flex-row h-6/10 w-full bg-yellow-500">
                {/* Bagian Putih (Kiri) */}
                <div className="flex flex-col h-full w-1/2 bg-white">
                  <div className="w-full h-6/10 bg-purple-700"></div>
                  <div className="w-full h-4/10 bg-yellow-700"></div>
                </div>
                
                {/* Bagian Hijau (Kanan) */}
                <div className="h-full w-1/2 bg-green-600"></div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;