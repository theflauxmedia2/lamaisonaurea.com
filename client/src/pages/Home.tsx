import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: projects, isLoading } = useProjects();
  
  // Filter featured projects, take top 3
  const featuredProjects = projects?.filter(p => p.isFeatured).slice(0, 3) || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EAE8E4] opacity-40"></div>
          {/* Unsplash hero architectural detail */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop)' }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-muted-foreground">
              Interior Design Studio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8">
              Timeless Luxury.<br />
              <span className="italic font-light text-accent">Soulful</span> Design.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed mb-12 font-light">
              We create spaces that breathe, merging architectural precision with 
              organic warmth to craft homes that feel like sanctuaries.
            </p>
            <Link href="/projects">
              <Button size="lg" className="rounded-none">
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Intro */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Unsplash luxury interior */}
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
                alt="Philosophy" 
                className="w-full h-auto aspect-[3/4] object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Designed for the way <br /> you live.
              </h2>
              <p className="text-muted-foreground leading-loose font-light text-lg">
                La Maison Aurea is grounded in the belief that luxury is not just about 
                what you see, but how you feel. Our approach is holistic and deeply personal, 
                crafting environments that reflect the unique narratives of those who dwell within them.
              </p>
              <div className="pt-4">
                <Link href="/about" className="group inline-flex items-center text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
                  Read our Philosophy <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Selected Works</p>
              <h2 className="font-serif text-4xl md:text-5xl">Signature Projects</h2>
            </div>
            <Link href="/projects" className="hidden md:block">
              <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background">
                View All Works
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[4/5] w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 w-1/3 mb-2"></div>
                  <div className="h-6 bg-gray-200 w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {featuredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          )}
          
          <div className="mt-12 md:hidden text-center">
             <Link href="/projects">
              <Button variant="outline" className="rounded-none w-full">
                View All Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Values */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <h2 className="font-serif text-3xl md:text-5xl italic">"Simplicity is the ultimate sophistication."</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <div className="flex justify-center text-accent mb-4">
                  <Star className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="text-xl font-serif">Curated Materials</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  We source natural stones, woods, and textiles that age beautifully over time.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center text-accent mb-4">
                  <Star className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="text-xl font-serif">Spatial Harmony</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  Balancing light, volume, and flow to create deeply restful environments.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center text-accent mb-4">
                  <Star className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="text-xl font-serif">Artisan Craft</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                   Collaboration with master craftsmen for bespoke furniture and details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
