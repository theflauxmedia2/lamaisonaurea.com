import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/data/projects";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { data: projects, isLoading, isError } = useProjects();
  const displayProjects =
    !isError && projects?.length ? projects : getAllProjects();

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f1] text-foreground">
      <Navigation />

      <main className="flex-grow pt-28 pb-28">
        <div className="mx-auto px-6 md:px-10 w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              A collection of bespoke residences and commercial spaces, each
              telling a unique story of place, material, and light.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {displayProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
