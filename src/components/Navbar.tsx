import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import logo from '../assets/logo_ye.png';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Competencies', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset for navbar height
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="fixed bottom-10 left-0 right-0 z-50 px-6 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-fit mx-auto bg-white/10 backdrop-blur-xl border border-white/20 py-2 px-4 flex items-center gap-3 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] pointer-events-auto"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-navy/80">
          Available for new opportunities in Thailand
        </p>
      </motion.div>
    </div>

    <div className="fixed top-0 left-0 right-0 z-40">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-md border-b border-black/5"
      >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img 
            src={logo} 
            alt="YE WIN Logo" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-all relative group ${
                activeSection === item.href.substring(1) 
                  ? 'text-navy' 
                  : 'text-black/60 hover:text-navy'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-navy transition-all duration-300 ${
                activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
          <a 
            href="/YE_WIN_CV.pdf"
            download="YE_WIN_CV.pdf"
            className="flex items-center gap-2 px-5 py-2 bg-navy text-white text-sm font-medium rounded-full hover:bg-sea transition-all shadow-md hover:shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-navy"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-bold uppercase tracking-widest transition-all ${
                    activeSection === item.href.substring(1) 
                      ? 'text-navy' 
                      : 'text-black/40 hover:text-navy'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="/YE_WIN_CV.pdf"
                download="YE_WIN_CV.pdf"
                className="flex items-center justify-center gap-2 w-full py-4 bg-navy text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-sea transition-all shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  </div>
    </>
  );
}
