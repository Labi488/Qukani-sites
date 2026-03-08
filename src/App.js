import React, { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, MessageCircle, Menu, X, Construction, Car, Factory, PaintBucket, Award, Users, Target, Clock } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'galerie', 'ueber-uns', 'kontakt'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Strassenmarkierung', icon: <Construction />, desc: 'Präzise Linienführung für maximale Sicherheit im Verkehr.' },
    { title: 'Parkplatzmarkierung', icon: <Car />, desc: 'Optimale Raumnutzung und klare Signaletik für Ihr Areal.' },
    { title: 'Industriemarkierung', icon: <Factory />, desc: 'Sicherheit und Struktur für Lagerhallen und Industrieböden.' },
    { title: 'Spezialmarkierungen', icon: <PaintBucket />, desc: 'Individuelle Symbole, Logos und Bodenmarkierungen nach Mass.' },
  ];

  const navItem = (id, label) => (
    <a href={`#${id}`} className={`font-bold uppercase text-xs tracking-widest transition-colors ${activeSection === id ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}>
      {label}
    </a>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="LogoSMQ.jpeg" alt="Logo" className="h-10 w-auto" />
          <div className="hidden md:flex space-x-10">
            {navItem('services', 'Services')}
            {navItem('galerie', 'Galerie')}
            {navItem('ueber-uns', 'Über uns')}
            {navItem('kontakt', 'Kontakt')}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden"><Menu /></button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 font-medium mb-4">Strassenmarkierung</p>
          <img src="LogoSMQ.jpeg" alt="Qukani Logo" className="h-24 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase">PRÄZISION AUF <br /><span className="text-yellow-500">Jedem Meter.</span></h1>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">Professionelle Markierungslösungen in Emmen. Wir bringen Struktur und Sicherheit auf Ihren Asphalt.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/41764886125" className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-95 hover:bg-yellow-600 shadow-md">JETZT OFFERTE ANFRAGEN</a>
            <a href="#services" className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full transition-transform hover:scale-105">UNSERE LEISTUNGEN</a>
          </div>
        </div>
      </section>

      {/* EXPERTISE / SERVICES */}
      <section id="services" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-12 uppercase">Unsere <span className="text-yellow-500">Expertise</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-yellow-200 transition-all group">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE / ARBEIT */}
      <section id="galerie" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-2 uppercase">Unsere <span className="text-yellow-500">Arbeit</span></h2>
          <p className="text-gray-500 mb-12">Einblicke in unsere Projekte und Referenzen</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                <img src={`Bild${n}.jpeg`} alt={`Projekt ${n}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER UNS (Icons rechts) */}
      <section id="ueber-uns" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black mb-8 uppercase">Über <span className="text-yellow-500">uns</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">Wir sind Ihr spezialisierter Partner für hochwertige Bodenmarkierungen. Mit modernster Technik und langjähriger Erfahrung garantieren wir präzise Ergebnisse.</p>
            <p className="text-gray-600 text-lg leading-relaxed">Unser Fokus liegt auf Langlebigkeit, Sicherheit und höchster Kundenzufriedenheit in der Region Luzern und Umgebung.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl"><Award className="text-yellow-500 mb-2" size={32} /><span className="font-bold text-sm">Qualität</span></div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl"><Users className="text-yellow-500 mb-2" size={32} /><span className="font-bold text-sm">Erfahrung</span></div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl"><Target className="text-yellow-500 mb-2" size={32} /><span className="font-bold text-sm">Präzision</span></div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl"><Clock className="text-yellow-500 mb-2" size={32} /><span className="font-bold text-sm">Pünktlich</span></div>
          </div>
        </div>
      </section>

      {/* KONTAKT (Instagram, Email & WhatsApp) */}
      <footer id="kontakt" className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-16 uppercase tracking-widest">Kontaktieren Sie <span className="text-yellow-500">uns</span></h2>
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <a href="https://www.instagram.com/qukani_markierungen/" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-all">
              <Instagram className="mb-4 text-gray-400 group-hover:text-yellow-500" size={40} />
              <span className="text-gray-400 group-hover:text-yellow-500 font-bold uppercase tracking-widest">Instagram</span>
              <p className="text-sm text-gray-500 mt-2">@qukani_markierungen</p>
            </a>
            <a href="mailto:info@qukani.ch" className="flex flex-col items-center group transition-all">
              <Mail className="mb-4 text-gray-400 group-hover:text-yellow-500" size={40} />
              <span className="text-gray-400 group-hover:text-yellow-500 font-bold uppercase tracking-widest">E-Mail</span>
              <p className="text-sm text-gray-500 mt-2">info@qukani.ch</p>
            </a>
            <a href="https://wa.me/41764886125" className="flex flex-col items-center group transition-all">
              <MessageCircle className="mb-4 text-gray-400 group-hover:text-yellow-500" size={40} />
              <span className="text-gray-400 group-hover:text-yellow-500 font-bold uppercase tracking-widest">Chat starten</span>
              <p className="text-sm text-gray-500 mt-2">WhatsApp Support</p>
            </a>
          </div>
          <div className="border-t border-gray-800 pt-12">
            <img src="LogoSMQ.jpeg" alt="Logo" className="h-12 mx-auto mb-6 brightness-0 invert opacity-50" />
            <p className="text-gray-500 text-xs tracking-widest uppercase">&copy; {new Date().getFullYear()} Strassenmarkierung Qukani. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

