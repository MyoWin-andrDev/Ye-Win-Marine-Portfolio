import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-6xl font-bold mb-8">
              Crew Placement <br />
              <span className="text-navy italic">Engagement</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-md">
              Professional enquiries and placement opportunities are welcome.
            </p>
            
            <div className="space-y-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">Contact Me</p>
                <div className="space-y-2">
                  <p className="text-2xl font-medium">061-036-8481</p>
                  <p className="text-2xl font-medium">yewin1437@gmail.com</p>
                </div>
              </div>
              
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Social</p>
                <div className="flex gap-6">
                  <a 
                    href="https://www.facebook.com/2g7w1q71mk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-navy transition-colors"
                  >
                    <Icon icon="ri:facebook-fill" className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://line.me/ti/p/~yewin1991" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-navy transition-colors"
                  >
                    <Icon icon="ri:line-fill" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10 text-lg"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10 text-lg"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help you?"
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10 text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/10 text-lg"
                />
              </div>
              <div className="pt-6">
                <button 
                  className="px-12 py-5 bg-white text-black hover:bg-navy hover:text-white rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-2xl active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-32 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full overflow-hidden pointer-events-none"
          >
            <h2 className="text-[12vw] md:text-[15vw] font-black leading-none uppercase tracking-tighter text-white whitespace-nowrap -mb-2 md:-mb-4 inline-block">
              YEWIN85165
            </h2>
          </motion.div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">© 2024 Ye Win. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
