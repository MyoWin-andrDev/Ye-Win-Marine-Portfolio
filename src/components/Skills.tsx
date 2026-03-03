import { motion } from 'motion/react';

export default function Skills() {
  const competencies = [
    {
      category: "Vessel Operations",
      items: [
        "Tugboat Operations",
        "Vessel Maneuvering",
        "Independent Helm Control",
        "Towing & Harbor Assistance",
        "Mooring & Anchoring Supervision"
      ]
    },
    {
      category: "Navigation & Safety",
      items: [
        "Navigation Watchkeeping (STCW II/4)",
        "Safety Management & Compliance",
        "Emergency Response & Firefighting",
        "Survival Techniques",
        "Ship Security Duties"
      ]
    },
    {
      category: "Deck & Crew Management",
      items: [
        "Deck Supervision",
        "Crew Coordination",
        "Equipment & Machinery Handling",
        "Rope Work & Line Handling",
        "Safety Inspections & Maintenance"
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#050A15] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold mb-6 uppercase leading-[1.1]">
              Core <br /> Competencies
            </h2>
            <p className="text-white/50 text-lg font-medium max-w-2xl">
              Operational strengths developed through seven years of international commercial sea service.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white/[0.03] border border-white/10 p-10 rounded-3xl flex flex-col hover:bg-white/[0.05] transition-all duration-500 group"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-white mb-10 pb-4 border-b border-white/10">
                {group.category}
              </h3>
              <ul className="space-y-8">
                {group.items.map((item, j) => (
                  <li 
                    key={j}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 group-hover/item:bg-white transition-colors flex-shrink-0" />
                    <span className="text-xs font-bold tracking-[0.15em] text-white/50 group-hover/item:text-white transition-colors uppercase leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Operational Discipline</div>
            <div className="hidden md:block w-12 h-px bg-white/10" />
            <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Safety Leadership</div>
            <div className="hidden md:block w-12 h-px bg-white/10" />
            <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Technical Precision</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
