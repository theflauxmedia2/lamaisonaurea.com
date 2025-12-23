import { useRoute, Link } from "wouter";
import { useProject } from "@/hooks/use-projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const slug = params?.slug || "";
  const { data: project, isLoading, isError } = useProject(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-serif">Project not found</h2>
          <Link href="/projects" className="text-sm underline">Back to Projects</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Full width Hero */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[60vh] md:h-[80vh] relative mt-20"
        >
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white bg-gradient-to-t from-black/60 to-transparent">
            <div className="container mx-auto">
              <p className="text-sm tracking-widest uppercase mb-4 opacity-90">{project.category}</p>
              <h1 className="font-serif text-5xl md:text-7xl">{project.title}</h1>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 py-24">
          <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-4 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Scope</h3>
                <p className="text-lg font-serif">{project.shortDescription}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Year</h3>
                <p className="text-lg font-serif">{new Date(project.createdAt!).getFullYear()}</p>
              </div>
              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-8 md:space-y-16">
              {project.galleryImages.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} view ${idx + 1}`}
                    className="w-full h-auto"
                  />
                  <p className="mt-4 text-xs text-muted-foreground text-right italic">
                    Architectural Detail {idx + 1}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
