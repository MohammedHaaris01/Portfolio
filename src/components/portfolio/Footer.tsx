import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Name and Title */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Mohammed Haaris L</h3>
            <p className="text-primary-foreground/70 text-sm">Engineering Student</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              Contact
            </h4>
            <a
              href="mailto:mohammedhaaris1405@gmail.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>mohammedhaaris1405@gmail.com</span>
            </a>
            <a
              href="tel:+919344860903"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(+91) 9344860903</span>
            </a>
            <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>Chennai, Tamil Nadu</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              Links
            </h4>
            <a
              href="https://github.com/MohammedHaaris01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>github.com/MohammedHaaris01</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-haaris-316394294/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/mohammed-haaris-316394294</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Mohammed Haaris L. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
