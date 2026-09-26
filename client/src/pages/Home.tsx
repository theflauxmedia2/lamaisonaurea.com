import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { useProjects } from "@/hooks/use-projects";
import { getAllProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const heroImages = [
  "/images/000.webp",
  "/images/001.webp",
  "/images/002.webp",
  "/images/003.webp",
  "/images/004.webp",
  "/images/005.webp",
  "/images/006.webp",
  "/images/007.webp",
  "/images/008.webp",
  "/images/009.webp",
  "/images/010.webp",
  "/images/011.webp",
  "/images/012.webp",
  "/images/013.webp",
  "/images/014.webp",
];

export default function Home() {
  const { data: projects, isLoading, isError } = useProjects();
  const displayProjects = !isError && projects?.length ? projects : getAllProjects();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-advance images every 5 seconds
  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    };

    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const resetAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  const goToPrevious = () => {
    setCurrentImageIdx((prev) => {
      const newIdx = (prev - 1 + heroImages.length) % heroImages.length;
      return newIdx;
    });
    resetAutoAdvance();
  };

  const goToNext = () => {
    setCurrentImageIdx((prev) => {
      const newIdx = (prev + 1) % heroImages.length;
      return newIdx;
    });
    resetAutoAdvance();
  };
  
  // Filter featured projects, take top 3
  const featuredProjects = displayProjects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section with Image Slider */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Image Slider Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImages[currentImageIdx]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
          
          {/* Vignette overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
          
          {/* Film grain texture */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" result=\"noise\" /%3E%3CfeDisplacementMap in=\"SourceGraphic\" in2=\"noise\" scale=\"1\" /%3E%3C/filter%3E%3Crect width=\"400\" height=\"400\" filter=\"url(%23noiseFilter)\" /%3E%3C/svg%3E')",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-white/80">
              Interior Design Studio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
              Timeless Luxury.<br />
              <span className="italic font-light text-amber-100">Soulful</span> Design.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-white/70 leading-relaxed mb-12 font-light">
              We create spaces that breathe, merging architectural precision with 
              organic warmth to craft homes that feel like sanctuaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="rounded-none bg-white text-black hover:bg-white/90 border border-white px-7"
                >
                  View Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none border-white/60 text-white hover:bg-white/10 px-7"
                >
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
          {/* Image counter */}
          <div className="flex gap-2">
            {heroImages.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setCurrentImageIdx(idx);
                  resetAutoAdvance();
                }}
                className={`h-1 transition-all ${
                  idx === currentImageIdx ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/60 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/60 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>
      </section>

      {/* Press / Credibility */}
      <section className="py-10 bg-[#f7f5f1] border-b border-border/60">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap items-center justify-center gap-10 text-sm tracking-[0.25em] uppercase text-muted-foreground">
          <span className="text-foreground/70">Featured In</span>
          <span className="opacity-70">Architectural Digest</span>
          <span className="opacity-70">Dezeen</span>
          <span className="opacity-70">Interior Design</span>
          <span className="opacity-70">Wallpaper*</span>
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
              <img
                src="/images/005.webp"
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

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-12">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Gallery
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">
                A glimpse inside our portfolio of spaces.
              </h2>
              <p className="text-muted-foreground text-lg font-light">
                A curated selection of details, vignettes, and rooms. Explore the full gallery to
                wander through our projects in images.
              </p>
            </div>
            <Link href="/gallery">
              <Button
                variant="outline"
                className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-3"
              >
                View Full Gallery
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {["/images/000.webp", "/images/001.webp", "/images/002.webp", "/images/003.webp"].map(
              (src, idx) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`relative overflow-hidden bg-muted/40 rounded-sm ${
                    idx === 0 || idx === 3 ? "aspect-[4/5]" : "aspect-[3/4]"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Gallery preview ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    loading="lazy"
                  />
                </motion.div>
              ),
            )}
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
