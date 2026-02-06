import { motion } from "framer-motion";
import { Award, Users, Radio } from "lucide-react";

const activities = [
  {
    title: "NCICT Technical Conference",
    description: "Participated in NCICT Technical Conference at SSN Engineering College",
    date: "February 2025",
    icon: Award,
  },
  {
    title: "Radio Frequency Club Member",
    description: "Member of Radio Frequency Club at RMK Engineering College",
    date: "October 2025 – Present",
    icon: Radio,
  },
  {
    title: "IEEE ComSoc Student Member",
    description: "IEEE Student Member in IEEE Communications Society (ComSoc)",
    date: "December 2025 – Present",
    icon: Users,
  },
];

const Activities = () => {
  return (
    <section id="activities" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Activities</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="p-3 bg-secondary rounded-lg w-fit mb-4 group-hover:bg-accent/10 transition-colors">
                <activity.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {activity.description}
              </p>
              <span className="text-xs font-medium text-accent">{activity.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
