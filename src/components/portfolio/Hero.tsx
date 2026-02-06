import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="container-max w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr,auto] gap-12 items-start"
        >
          {/* Main Content */}
          <div className="space-y-8">
            {/* Name and Title */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tight"
              >
                Mohammed Haaris L
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground font-medium"
              >
                Engineering Student
              </motion.p>
            </div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              An engineering student with a keen interest in telecommunications, signal processing, 
              and programming, with the long-term goal of establishing a career in communication 
              technology and related fields of engineering. Looking forward to applying theoretical 
              knowledge to practical systems, enhancing technical skills, and contributing to 
              problem-solving in the real world. Also interested in learning about contemporary 
              wireless communication systems, RF technology, and software-based communication solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground"
            >
              <a 
                href="mailto:mohammedhaaris1405@gmail.com" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>mohammedhaaris1405@gmail.com</span>
              </a>
              <a 
                href="tel:+919344860903" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(+91) 9344860903</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Chennai, Tamil Nadu</span>
              </span>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex lg:flex-col gap-4"
          >
            <a
              href="https://github.com/MohammedHaaris01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:border-accent hover:bg-secondary/50 transition-all group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="text-sm font-medium text-foreground">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-haaris-316394294/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:border-accent hover:bg-secondary/50 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="text-sm font-medium text-foreground">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
