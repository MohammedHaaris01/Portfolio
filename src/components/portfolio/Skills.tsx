import { motion } from "framer-motion";
import { Code, Cpu, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Tools and Languages",
    icon: Code,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "C++", level: "Basics" },
      { name: "MySQL", level: null },
      { name: "Linux", level: null },
      { name: "GNU Radio", level: null },
    ],
  },
  {
    title: "Technical Competencies",
    icon: Cpu,
    skills: [
      { name: "Networking Fundamentals", level: null },
      { name: "Software Defined Radio (SDR)", level: null },
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    skills: [
      { name: "English", level: null },
      { name: "Urdu", level: null },
      { name: "Tamil", level: null },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Skills</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-secondary rounded-lg">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-secondary text-sm text-foreground rounded-lg border border-border"
                  >
                    {skill.name}
                    {skill.level && (
                      <span className="ml-1 text-muted-foreground">({skill.level})</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
