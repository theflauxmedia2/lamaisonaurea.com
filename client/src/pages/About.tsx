import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Intro */}
        <div className="container mx-auto px-6 md:px-12 mb-32">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl text-foreground mb-12 leading-tight"
            >
              We believe that <span className="text-accent italic">beauty</span> is a form of hospitality.
            </motion.h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                src="https://pixabay.com/get/gd510d28ea61921eb012504e966ad920b4b9e59689987975866ad80d9a1bbb810815ea782af078f59ce690d09c7b1bb261ad181f7afde3d33ac24baad0cef1b5f_1280.jpg" 
                alt="Studio founder" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground">The Studio</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                Founded in 2018, La Maison Aurea is a boutique interior design studio focused on creating emotive spaces. We strip away the unnecessary to reveal the essential beauty of structure, light, and material.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                Our aesthetic is rooted in the principles of Wabi-Sabi—finding perfection in imperfection—and Modern Minimalism. We craft homes that are not just to be looked at, but to be lived in.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-secondary/30 py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="font-serif text-4xl mb-16 text-center">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6 p-8 bg-background border border-border/50 hover:border-accent transition-colors duration-300">
                <span className="text-6xl font-serif text-accent/20">01</span>
                <h3 className="text-2xl font-serif">Discovery</h3>
                <p className="text-muted-foreground font-light">We begin by listening. Understanding your lifestyle, your needs, and your dreams for the space is paramount.</p>
              </div>
              <div className="space-y-6 p-8 bg-background border border-border/50 hover:border-accent transition-colors duration-300">
                <span className="text-6xl font-serif text-accent/20">02</span>
                <h3 className="text-2xl font-serif">Curation</h3>
                <p className="text-muted-foreground font-light">We select materials, textures, and furnishings that speak to each other, creating a cohesive narrative.</p>
              </div>
              <div className="space-y-6 p-8 bg-background border border-border/50 hover:border-accent transition-colors duration-300">
                <span className="text-6xl font-serif text-accent/20">03</span>
                <h3 className="text-2xl font-serif">Execution</h3>
                <p className="text-muted-foreground font-light">Precision management of contractors and artisans to ensure the vision is realized flawlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
