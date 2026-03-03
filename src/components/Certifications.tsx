import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    "Rating Forming Part of a Navigational Watch (STCW II/4)",
    "Efficient Deck Hand Certificate",
    "Basic Safety Training (STCW A-VI/1)",
    "Personal Survival Techniques",
    "Fire Prevention & Fire Fighting",
    "Elementary First Aid",
    "Personal Safety & Social Responsibilities",
    "Security Awareness Training (STCW A-VI/6-1)",
    "Designated Security Duties (STCW A-VI/6-2)",
    "Seafarer Identification & Record Book (Valid until 2026)"
  ];

  return (
    <section id="certifications" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold text-navy mb-4">Professional <br /> Certifications.</h2>
            <p className="text-black/40 text-lg font-medium">STCW-compliant qualifications and maritime credentials.</p>
          </motion.div>
          <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy">
            <Award className="w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-black/[0.02] border border-black/5 hover:border-navy/20 transition-all group"
            >
              <CheckCircle2 className="w-5 h-5 text-navy/20 group-hover:text-navy transition-colors flex-shrink-0" />
              <span className="font-medium text-black/80">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
