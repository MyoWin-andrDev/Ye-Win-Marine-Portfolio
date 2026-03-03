import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'mykdqrvr';
  const [state, handleSubmit] = useForm(formId);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    if (state.succeeded || (state.errors)) {
      setShowStatus(true);
      if (state.succeeded) {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
      const timer = setTimeout(() => setShowStatus(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, state.errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10 text-lg"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10 text-lg"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors placeholder:text-white/10 text-lg"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-rose-400 text-xs" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Message</label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/10 text-lg"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs" />
              </div>
              <div className="pt-6 relative">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-12 py-5 bg-white text-black hover:bg-navy hover:text-white rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center gap-3"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <AnimatePresence>
                  {showStatus && state.succeeded && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-16 left-0 flex items-center gap-2 text-emerald-400"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium uppercase tracking-widest">Message sent successfully!</span>
                    </motion.div>
                  )}
                  {showStatus && state.errors && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-16 left-0 flex items-center gap-2 text-rose-400"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-medium uppercase tracking-widest">Submission failed. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
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
