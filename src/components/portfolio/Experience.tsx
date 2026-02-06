import { motion } from "framer-motion";
import { Briefcase, Radio, Bot, Zap } from "lucide-react";

const experiences = [
  {
    title: "Internship – BSNL",
    date: "June 2025",
    location: "Chennai, Tamil Nadu",
    icon: Briefcase,
    points: [
      "Studied telecom network architecture including switching systems and optical fiber communication links.",
      "Observed telecom power infrastructure supporting uninterrupted network availability and service reliability.",
      "Learned fundamentals of routing, packet switching, and packet data networks in practical environments.",
      "Gained understanding of Internet architecture, OSI model, and the TCP/IP protocol suite.",
      "Explored the evolution of communication technologies across different network generations.",
    ],
  },
  {
    title: "BladeLink Project",
    subtitle: "SDR / RF Communication System",
    date: "October 2025 – November 2025",
    icon: Radio,
    points: [
      "Developed a wireless communication system using BladeRF Software Defined Radio (SDR) for real-time data transmission.",
      "Worked with GNU Radio and RF signal processing techniques, implementing QPSK modulation and demodulation.",
    ],
  },
  {
    title: "Firefighting Robot Project",
    subtitle: "Robotics / Embedded Systems",
    date: "June 2025 – August 2025",
    icon: Bot,
    points: [
      "Designed and developed an autonomous robot for fire detection and response.",
      "Integrated sensors, control systems, and embedded programming for real-time operation.",
      "Worked on navigation logic and decision-making for hazardous environments.",
    ],
  },
  {
    title: "Optimizing Piezoelectric Energy Harvesting from Acoustic Waves",
    subtitle: "Research Project",
    date: "February 2025 – Energy Harvesting / Signal Analysis",
    icon: Zap,
    points: [
      "Studied the conversion of acoustic energy into electrical energy using piezoelectric materials.",
      "Analyzed system performance and efficiency under varying acoustic conditions.",
      "Explored signal characteristics and optimization techniques for improved energy output.",
      "Contributed to research documentation and technical analysis of results.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
            Technical Experience
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative grid md:grid-cols-[40px,1fr] gap-4 md:gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-start justify-center pt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary border-2 border-accent flex items-center justify-center">
                    <exp.icon className="w-4 h-4 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      {exp.subtitle && (
                        <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-accent">{exp.date}</span>
                      {exp.location && (
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
