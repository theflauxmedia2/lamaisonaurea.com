import { Link } from "wouter";
import { type Project } from "@shared/schema";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  imageOverride?: string;
}

const fallbackImages = ["/images/006.webp", "/images/007.webp", "/images/008.webp"];

export function ProjectCard({ project, index, imageOverride }: ProjectCardProps) {
  const imageSrc =
    imageOverride ||
    project.coverImage ||
    project.galleryImages?.[0] ||
    fallbackImages[index % fallbackImages.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group block"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/5] bg-muted/40 rounded-sm">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />

          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div className="mt-5 space-y-1">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            {project.category}
          </p>
          <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
