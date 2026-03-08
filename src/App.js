import React, { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, MessageCircle, Menu, X, Construction, Car, Factory, PaintBucket, Award, Users, Target, Clock, MapPin } from 'lucide-react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { title: 'Strassenmarkierung', icon: <Construction size={32} />, desc: 'Präzise Linienführung für maximale Sicherheit im Verkehr.' },
    { title: 'Parkplatzmarkierung', icon: <Car size={32} />, desc: 'Optimale Raumnutzung und klare Signaletik für Ihr Areal.' },
    { title: 'Industriemarkierung', icon: <Factory size={32} />, desc: 'Sicherheit und Struktur für Lagerhallen und Industrieböden.' },
    { title: 'Spezialmarkierungen', icon: <PaintBucket size={32} />, desc: 'Individuelle Symbole, Logos und Bodenmarkierungen nach Mass.' },
  ];

  const stats = [
    { label: 'Jahre Erfahrung', value: '28+', icon: <Award className="text-yellow-600" /> },
    { label: 'Zufriedene Kunden', value: '500+', icon: <Users className="text-yellow-600" /> },
    { label: 'Qualitätsanspruch', value: '100%', icon: <Target className="text-yellow-600" /> },
    { label: 'Schweizweit', value: 'CH', icon: <MapPin className="text-yellow-600" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-yellow-200">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <img src="LogoSMQ.jpeg" alt="Logo" className="h-9 w-auto" />
          <div className="hidden md:flex space-x-12 font-bold uppercase text-[11px] tracking-[0.25em] text-gray-400">
            <a href="#services" className="hover:text-yellow-600 transition-colors">Services</a>
            <a href="#galerie" className="hover:text-yellow-600 transition-colors">Galerie</a>
            <a href="#ueber-uns" className="hover:text-yellow-600 transition-colors">Über uns</a>
            <a href="#kontakt" className="text-yellow-600">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-48 pb-32 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Logo ist jetzt präsenter (h-[140px] statt h-28) */}
          <img src="LogoSMQ.jpeg" alt="Qukani" className="h-[140px] w-auto mb-10" />

          {/* Überschrift ohne das doppelte 'Strassenmarkierung' darüber */}
          <h1 className="text-6xl md:text-[84px] font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            PRÄZISION AUF <br /><span className="text-yellow-600">JEDEM METER.</span>
          </h1>

          <p className="text-gray-400 text-xl mb-14 max-w-2xl leading-relaxed font-medium">
            Professionelle Markierungslösungen in Emmen. Wir bringen Struktur und Sicherheit auf Ihren Asphalt.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://wa.me/41764886125" className="px-12 py-6 bg-yellow-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-95 hover:bg-yellow-700 shadow-xl shadow-yellow-600/20 flex items-center justify-center gap-3 uppercase text-sm">
              <MessageCircle size={22}/> JETZT OFFERTE ANFRAGEN
            </a>
            <a href="#services" className="px-12 py-6 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-black transition-all transform hover:scale-105 shadow-xl shadow-black/10 uppercase text-sm">
              UNSERE LEISTUNGEN
            </a>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="services" className="py-32 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[40px] font-black mb-20 uppercase tracking-tighter">Unsere <span className="text-yellow-600">Expertise</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-12 bg-white rounded-[32px] border border-gray-50 hover:shadow-2xl transition-all duration-500 group">
                <div className="text-yellow-600 mb-10 transform group-hover:rotate-6 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-5 tracking-tight">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARBEIT / GALERIE */}
      <section id="galerie" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[40px] font-black mb-4 uppercase tracking-tighter">Unsere <span className="text-yellow-600">Arbeit</span></h2>
          <p className="text-gray-400 mb-20 font-medium">Einblicke in unsere Projekte und Referenzen</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="rounded-[40px] overflow-hidden aspect-[4/3] bg-gray-50 group border border-gray-100">
                <img src={`Bild${n}.jpeg`} alt={`Projekt ${n}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section id="ueber-uns" className="py-32 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[40px] font-black mb-12 uppercase tracking-tighter">Über <span className="text-yellow-600">uns</span></h2>
            <h3 className="text-2xl font-bold mb-8 tracking-tight text-gray-800 uppercase">28 Jahre Erfahrung</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">Mit über 28 Jahren Erfahrung in der Markierungsbranche gründete Hasan Qukani 2016 die Strassenmarkierung Qukani.</p>
            <p className="text-gray-400 leading-relaxed font-medium italic border-l-4 border-yellow-600 pl-6">"Seitdem sind wir Ihr zuverlässiger Partner für professionelle Bodenmarkierungen in der ganzen Schweiz."</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-12 rounded-[48px] shadow-sm text-center border border-gray-50 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-5">{stat.icon}</div>
                <div className="text-4xl font-black mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <footer id="kontakt" className="py-32 px-6 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-[40px] font-black mb-16 uppercase tracking-tighter">Kontaktieren <br/><span className="text-yellow-600 text-yellow-600">Sie uns</span></h2>
              <div className="space-y-8">
                <a href="tel:0764886125" className="flex items-center gap-8 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all"><Phone size={24}/></div>
                  <div><p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Telefon</p><p className="text-xl font-bold group-hover:text-yellow-600 transition-colors">076 488 61 25</p></div>
                </a>
                <a href="mailto:Qukani@hispeed.ch" className="flex items-center gap-8 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all"><Mail size={24}/></div>
                  <div><p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">E-Mail</p><p className="text-xl font-bold group-hover:text-yellow-600 transition-colors">Qukani@hispeed.ch</p></div>
                </a>
                <a href="https://www.instagram.com/strassenmarkierungen_qukani" target="_blank" rel="noreferrer" className="flex items-center gap-8 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all"><Instagram size={24}/></div>
                  <div><p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Instagram</p><p className="text-xl font-bold group-hover:text-yellow-600 transition-colors">@strassenmarkierungen_qukani</p></div>
                </a>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-16 rounded-[64px] text-white">
              <div className="flex items-center gap-4 mb-12"><Clock className="text-yellow-600"/><h4 className="font-bold uppercase tracking-[0.2em] text-xs">Öffnungszeiten</h4></div>
              <div className="space-y-6 opacity-90 font-medium">
                {['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'].map(day => (
                  <div key={day} className="flex justify-between border-b border-white/10 pb-4"><span>{day}</span><span>07:30–18:00</span></div>
                ))}
                <div className="flex justify-between text-yellow-600 pt-2 font-bold"><span>Sonntag</span><span>Geschlossen</span></div>
              </div>
              <div className="mt-16">
                <a href="https://wa.me/41764886125" className="w-full py-6 bg-yellow-600 text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-yellow-700 transition-all uppercase text-sm tracking-widest">Chat via WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="mt-40 text-center">
            <p className="text-[10px] font-bold text-gray-300 tracking-[0.4em] uppercase">© 2026 Strassenmarkierung Qukani | Kirchfeldstrasse 53, 6032 Emmen</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

  
