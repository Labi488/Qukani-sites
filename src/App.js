import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, MapPin, Menu, X, PaintBucket, Car, Factory, Construction, Mail, Award, Users, Target, Camera, Instagram } from 'lucide-react';
import "./App.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-yellow-400 selection:text-black">
      <nav className="fixed w-full z-50 bg-white backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            {/* Pfad zu deinem Logo angepasst */}
            <img src="/LogoSMQ.jpeg" alt="Strassenmarkierung Qukani Logo" className="h-14 w-auto" />
          </a>
          <div className="hidden md:flex space-x-8 font-medium uppercase text-sm tracking-widest">
            <a href="#services" className="text-gray-700 hover:text-yellow-600 transition">Services</a>
            <a href="#galerie" className="text-gray-700 hover:text-yellow-600 transition">Galerie</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition">Kontakt</a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white z-10" />
          {/* Pfad zum Hintergrundbild angepasst */}
          <img src="/Bild1.jpeg" alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <img src="/LogoSMQ.jpeg" alt="Logo" className="h-32 md:h-40 w-auto mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none text-gray-900">PRÄZISION AUF <br /><span className="text-yellow-500">JEDEM METER.</span></h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/41764886125" className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition shadow-lg">JETZT OFFERTE ANFRAGEN</a>
          </div>
        </div>
      </section>

      <section id="galerie" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pfade für die Galerie-Bilder angepasst (Bild1.jpeg bis Bild9.jpeg) */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <div key={n} className="aspect-video rounded-2xl overflow-hidden shadow-lg group">
              <img src={`/Bild${n}.jpeg`} alt={`Projekt ${n}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-center text-gray-400 text-sm">
        <img src="/LogoSMQ.jpeg" alt="Logo" className="h-16 w-auto mx-auto mb-6 brightness-0 invert opacity-80" />
        <p>&copy; {new Date().getFullYear()} Strassenmarkierung Qukani.</p>
      </footer>
    </div>
  );
};

export default LandingPage;


