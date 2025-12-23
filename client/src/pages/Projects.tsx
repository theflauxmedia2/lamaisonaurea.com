import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-2xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Portfolio</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              A collection of bespoke residences and commercial spaces, each telling a unique story of place, material, and light.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {projects?.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          )}
          
          {!isLoading && projects?.length === 0 && (
            <div className="py-32 text-center text-muted-foreground">
              <p>No projects found yet.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
