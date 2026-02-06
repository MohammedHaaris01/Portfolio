import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Activities from "@/components/portfolio/Activities";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
