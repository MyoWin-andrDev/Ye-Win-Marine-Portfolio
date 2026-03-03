import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ship, Calendar, MapPin, Anchor, ShieldCheck, Flag, Info, UserCheck, ZoomIn, X } from 'lucide-react';
import mtOceanicCyanRecord from '../assets/mt_ocenic_cyan.jpeg';
import seaServiceRecord1 from '../assets/mt_ocean_cheetah.jpeg';
import mvChenChangRecord from '../assets/mv_chen_chang.jpeg';
import aslMercuryRecord from '../assets/asl_mercury.jpeg';
import absoluteRecord from '../assets/absolute.jpeg';
import melana68Record from '../assets/melana_68.jpeg';

interface VesselExperience {
  id: number;
  vesselName: string;
  vesselType: string;
  imo: string;
  flag: string;
  grt: string;
  callSign: string;
  enginePower: string;
  rank: string;
  period: string;
  tradingArea: string;
  embarkationPort: string;
  image: string;
  signatureImage: string;
  responsibilities: string[];
}

const vesselData: VesselExperience[] = [
  {
    id: 1,
    vesselName: "MT OCEANIC CYAN",
    vesselType: "Chemical / Oil Products Tanker",
    imo: "9434694",
    flag: "Panama",
    grt: "8,505 GRT",
    callSign: "3EQU2",
    enginePower: "N/A",
    rank: "Able Seaman (A/B)",
    period: "Mar 2013 – Jan 2014",
    tradingArea: "Worldwide",
    embarkationPort: "UAE",
    image: "https://www.shipspotting.com/photos/big/7/1/6/885617.jpg?cb=0",
    signatureImage: mtOceanicCyanRecord,
    responsibilities: [
      "Navigation watchkeeping under STCW regulations",
      "Cargo deck operations on chemical/oil tanker",
      "Mooring and anchoring operations in international ports",
      "Emergency response drills and safety compliance",
      "Routine maintenance and deck preservation"
    ]
  },
  {
    id: 2,
    vesselName: "MT OCEAN CHEETAH",
    vesselType: "Oil Products Tanker",
    imo: "9075400",
    flag: "Singapore",
    grt: "7,354 GRT",
    callSign: "N/A",
    enginePower: "3,840 kW",
    rank: "Ordinary Seaman (O/S)",
    period: "May 2015 – July 2016",
    tradingArea: "Worldwide",
    embarkationPort: "Mina Saqr, UAE",
    image: "https://www.shipspotting.com/photos/big/0/6/8/1698860.jpg?cb=0",
    signatureImage: seaServiceRecord1,
    responsibilities: []
  },
  {
    id: 3,
    vesselName: "MV CHEN CHANG",
    vesselType: "General Cargo Vessel",
    imo: "N/A",
    flag: "N/A",
    grt: "1,500 GRT",
    callSign: "BR3383",
    enginePower: "1,340 kW",
    rank: "Able Seaman (A/B)",
    period: "Oct 2016 – Jan 2018",
    tradingArea: "Worldwide",
    embarkationPort: "UAE",
    image: "https://static.vesselfinder.net/ship-photo/0-416003895-d19691d3b9b0d91b0e505c2f69053a09/1?v1",
    signatureImage: mvChenChangRecord,
    responsibilities: []
  },
  {
    id: 4,
    vesselName: "MV ASL MERCURY",
    vesselType: "Tugboat",
    imo: "9504712",
    flag: "Singapore",
    grt: "298 GRT",
    callSign: "9V7431",
    enginePower: "1,106 kW",
    rank: "Able Seaman (A/B)",
    period: "Jan 2019 – Nov 2019",
    tradingArea: "Worldwide",
    embarkationPort: "Singapore",
    image: "https://www.shipspotting.com/photos/middle/8/4/1/1621148.jpg?cb=0",
    signatureImage: aslMercuryRecord,
    responsibilities: []
  },
  {
    id: 5,
    vesselName: "ABSOLUTE",
    vesselType: "Tugboat",
    imo: "9561215",
    flag: "Palau",
    grt: "296 GRT",
    callSign: "T8A3945",
    enginePower: "1,174.5 kW",
    rank: "Able Seaman (A/B)",
    period: "May 2023 – Nov 2023",
    tradingArea: "Worldwide",
    embarkationPort: "R.A.K, UAE",
    image: "https://www.marinetraffic.com/getAssetDefaultPhoto/?photo_size=800&asset_id=732196&asset_type_id=0",
    signatureImage: absoluteRecord,
    responsibilities: []
  },
  {
    id: 6,
    vesselName: "MELANA 68",
    vesselType: "Tug",
    imo: "9330886",
    flag: "Malaysia",
    grt: "282 GRT",
    callSign: "N/A",
    enginePower: "1000 x 2 kW",
    rank: "Able Seaman (A/B)",
    period: "Oct 2016 – Jan 2018",
    tradingArea: "Worldwide",
    embarkationPort: "UAE",
    image: "https://www.shipspotting.com/photos/big/5/0/1/2582105.jpg?cb=0",
    signatureImage: melana68Record,
    responsibilities: []
  }
];

function VesselCard({ vessel, onViewRecord }: { vessel: VesselExperience, onViewRecord: (img: string) => void }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5 flex flex-col h-[520px] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="h-44 relative overflow-hidden">
        <img 
          src={vessel.image} 
          alt={vessel.vesselName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <h3 className="text-white font-display text-2xl font-bold">{vessel.vesselName}</h3>
          <p className="text-white/80 text-[10px] font-medium uppercase tracking-widest">{vessel.vesselType}</p>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-navy/40">
              <Info className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase tracking-wider">IMO Number</span>
            </div>
            <p className="text-xs font-bold text-navy">{vessel.imo}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-navy/40">
              <Flag className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Flag State</span>
            </div>
            <p className="text-xs font-bold text-navy">{vessel.flag}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-navy/40">
              <Anchor className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Gross Tonnage</span>
            </div>
            <p className="text-xs font-bold text-navy">{vessel.grt}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-navy/40">
              <Ship className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Engine Power</span>
            </div>
            <p className="text-xs font-bold text-navy">{vessel.enginePower}</p>
          </div>
        </div>

        <div className="h-px bg-black/5" />

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy/5 rounded-lg flex items-center justify-center text-navy">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Rank Held</p>
              <p className="text-xs font-bold text-navy">{vessel.rank}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy/5 rounded-lg flex items-center justify-center text-navy">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Service Period</p>
              <p className="text-xs font-bold text-navy">{vessel.period}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy/5 rounded-lg flex items-center justify-center text-navy">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Embarkation Port</p>
              <p className="text-xs font-bold text-navy">{vessel.embarkationPort}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button 
            onClick={() => onViewRecord(vessel.signatureImage)}
            className="w-full py-3.5 bg-navy text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-sea transition-all shadow-lg shadow-navy/10 active:scale-95"
          >
            Click to see the record
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl font-bold text-navy mb-4">Professional  <br /> Sea Service</h2>
            <p className="text-black/40 text-lg font-medium">A verified overview of my international commercial maritime experience.</p>
          </motion.div>
          <div className="w-full md:w-1/2 h-px bg-black/5 self-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vesselData.map((vessel, i) => (
            <motion.div 
              key={vessel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <VesselCard vessel={vessel} onViewRecord={setSelectedImage} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Detail Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Sea Service Record Detail"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 md:-right-16 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20 shadow-xl group"
              >
                <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
