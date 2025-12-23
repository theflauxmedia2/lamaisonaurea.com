import { Link } from "wouter";
import { type Project } from "@shared/schema";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group block"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/5] bg-secondary/30">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          
          {/* Unsplash image with fallback */}
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="mt-6 space-y-1">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">{project.category}</p>
          <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
