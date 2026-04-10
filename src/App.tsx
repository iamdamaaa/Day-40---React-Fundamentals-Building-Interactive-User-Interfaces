import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import mbakRiasImg from './assets/MbakRias.jpg' // Variabel: mbakRiasImg
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  const [nama, setNama] = useState<string>("");
  const [umur, setUmur] = useState<number>();
  const [hobby, setHobby] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-white/70 backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/30">
              HCP
            </div>
            <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Hi Clean
            </span>
          </a>

          <div className="flex md:order-2 space-x-3">
            <button className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-sm px-6 py-2.5 transition-all">
              Mulai Sekarang
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-2xl bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li><a href="#" className="block py-2 px-3 text-red-500 font-bold">Home</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-red-500">Layanan</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-red-500">Pricing</a></li>
            </ul>
          </div>
        </div>
      </nav>

{/* MAIN CONTENT SECTION */}
      <section id="center" className="pt-32 pb-20 flex flex-col items-center min-h-screen bg-gray-50">
        
        {/* Profile Image Container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <img 
            src={mbakRiasImg} 
            className="relative base rounded-full shadow-2xl border-4 border-white object-cover" 
            width="200" 
            height="200"
            alt="Hero" 
          />
        </div>

        {/* Text Content */}
        <div className="text-center mt-10 px-4">
          <h1 className="text-slate-900 text-5xl font-black tracking-tight">
            Hi, my name is <span className="text-red-500">{nama || "..."}</span>
          </h1>
          <p className="text-gray-500 text-xl mt-4 max-w-lg mx-auto leading-relaxed">
            Saya berusia <span className="font-bold text-slate-800">{umur || "—"}</span> tahun, 
            dan hobby saya adalah <span className="font-bold text-slate-800">{hobby || "—"}</span>.
          </p>
        </div>

        {/* Action Button (Itung Pencet) */}
        <div className="mt-12">
          <button
            className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={() => setCount((c) => c + 1)}
          >
            Itung pencetnya: {count}
          </button>
        </div>

        {/* Simple Input Form Area */}
        <div className="mt-16 w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
           <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Update Profile</h3>
           <div className="space-y-4">
             <input 
               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white outline-none transition-all"
               type="text" 
               placeholder="Masukkan nama..."
               onChange={(e) => setNama(e.target.value)} 
             />
             <input 
               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white outline-none transition-all"
               type="number" 
               placeholder="Masukkan umur..."
               onChange={(e) => setUmur(Number(e.target.value))} 
             />
             <input 
               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white outline-none transition-all"
               type="text" 
               placeholder="Masukkan hobby..."
               onChange={(e) => setHobby(e.target.value)} 
             />
           </div>
        </div>

      </section>    </>
  )
}

export default App