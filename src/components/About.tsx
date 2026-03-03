import { motion } from 'motion/react';
import yeAtSeaPhoto from '../assets/ye_at_sea.jpg';


export default function About() {
  const features = [
    {
      title: "Maritime Background",
      desc: "I am an STCW-certified maritime professional with over 7 years of international sea service on tugboats and oil/chemical tankers across the UAE and Singapore."
    },
    {
      title: "Legal & Certifications",
      desc: "Currently based in Bangkok, Thailand, I hold a valid Thai work permit and visa, along with an active Seaman Book and internationally recognized maritime certifications."
    },
    {
      title: "Career Objective",
      desc: "With strong commercial vessel experience and operational discipline, I am now seeking an opportunity to transition into the yacht industry, particularly within Pattaya and Thai waters."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={cardVariants}
              className="font-display text-5xl font-bold mb-12"
            >
              Reliable <br />
              <span className="text-navy italic">Maritime</span> Operations <br />
              at Sea.
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 gap-6"
            >
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariants}
                  whileHover={{ x: 10 }}
                  className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden transition-colors hover:bg-white/[0.08]"
                >
                  {/* Decorative background glow */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-navy/5 rounded-full blur-3xl group-hover:bg-navy/10 transition-colors" />
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-grow">
                      <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-navy transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-base text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-navy/20 rounded-3xl overflow-hidden border border-white/10">
              <img 
                src={yeAtSeaPhoto}
                alt="Workspace"
                className="w-full h-full object-cover "
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white text-black p-6 md:p-8 rounded-3xl shadow-2xl max-w-[180px] md:max-w-xs">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-navy">7+</p>
                  <p className="text-[10px] md:text-xs font-medium text-black/40 uppercase tracking-widest">Years Experience</p>
                </div>
                <div className="h-px bg-black/5" />
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-navy">100%</p>
                  <p className="text-[10px] md:text-xs font-medium text-black/40 uppercase tracking-widest">Safety Record</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
