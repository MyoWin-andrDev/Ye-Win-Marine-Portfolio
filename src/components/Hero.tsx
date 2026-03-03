import { motion } from 'motion/react';
import { ArrowRight, Anchor, ShieldCheck } from 'lucide-react';
import heroPhoto from '../assets/hero-photo.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#001f3f 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center py-12 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest rounded-full mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            STCW-Compliant Seafarer
          </motion.span>
          
          <h1 className="font-display text-5xl md:text-8xl font-bold leading-[0.9] mb-8 text-navy">
            YE WIN <br />
            <span className="italic text-black/20 block mt-4 text-3xl md:text-5xl lg:text-6xl">
              Senior Deckhand <br />
              & Mate Assistant
            </span>
          </h1>
          
          <p className="text-lg text-black/60 max-w-lg mb-10 leading-relaxed">
            7+ years of international commercial sea service.
            Safety-driven. Operationally disciplined. Yacht-ready.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#experience"
              className="group flex items-center gap-2 px-8 py-4 bg-navy text-white rounded-full font-semibold hover:bg-sea transition-all shadow-xl shadow-navy/20"
            >
              View Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-black/10 rounded-full font-semibold hover:bg-black/5 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative block lg:block"
        >
          <div className="relative z-10 w-full h-[400px] md:h-[550px] max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-navy/10">
            <img 
              src={heroPhoto} 
              alt="Mr. Ye Win"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sea/10 rounded-full blur-3xl" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-black/5 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy">Tender Captain</p>
              <p className="text-[10px] text-black/40">7+ Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black/10 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-navy rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
