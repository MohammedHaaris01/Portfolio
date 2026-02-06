import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.E. in Electronics and Communication",
    specialization: "Advanced Communication Technology",
    institution: "R.M.K Engineering College, Kavaraipettai",
    period: "2023 – 2027",
    score: "CGPA (up to 5th Sem): 8.30",
    current: true,
  },
  {
    degree: "B.S. Online Degree in Data Science and Applications",
    institution: "IIT Madras",
    period: "2023 – Present",
    score: "CGPA (up to January 2026): 6.89",
    current: true,
  },
  {
    degree: "HSC (Grade 12)",
    institution: "Maharishi Vidya Mandir Senior Secondary School, Thiruvottiyur",
    period: "2021 – 2023",
    score: "Percentage: 92%",
    current: false,
  },
  {
    degree: "SSLC (Grade 10)",
    institution: "Maharishi Vidya Mandir Senior Secondary School, Thiruvottiyur",
    period: "2019 – 2020",
    score: "Percentage: 94%",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Education</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-card border rounded-xl p-6 hover:border-accent/50 transition-colors ${
                edu.current ? "border-accent/30" : "border-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground leading-tight">{edu.degree}</h3>
                    {edu.current && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  {edu.specialization && (
                    <p className="text-sm text-muted-foreground">{edu.specialization}</p>
                  )}
                  <p className="text-sm text-foreground/80">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="text-sm font-medium text-accent">{edu.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
