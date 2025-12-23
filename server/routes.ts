import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // === API ROUTES ===

  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProjectBySlug(req.params.slug);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  app.get(api.services.list.path, async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === SEED DATA ===
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    console.log("Seeding database...");
    
    // Seed Services
    await storage.createService({
      title: "Residential Interiors",
      description: "Curating homes that reflect your essence through bespoken design and timeless aesthetics.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
    });
    
    await storage.createService({
      title: "Luxury Living Spaces",
      description: "Transforming open spaces into sanctuaries of comfort and elegance.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
    });
    
    await storage.createService({
      title: "Concept Design",
      description: "Visionary concepts that bridge the gap between architectural structure and interior soul.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
    });

    // Seed Projects
    await storage.createProject({
      title: "The Obsidian Apartment",
      slug: "obsidian-apartment",
      shortDescription: "A monochromatic study in texture and light.",
      fullDescription: "Located in the heart of the city, The Obsidian Apartment is a testament to the power of monochrome. By layering varying shades of charcoal, slate, and ink, we created a space that feels both dramatic and deeply restful. Materials include blackened oak, honed basalt, and velvet upholstery.",
      category: "Residential",
      coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
      galleryImages: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=2000"
      ],
      isFeatured: true
    });

    await storage.createProject({
      title: "Villa Serenity",
      slug: "villa-serenity",
      shortDescription: "Coastal elegance meets modern minimalism.",
      fullDescription: "Perched on the cliffs, Villa Serenity embraces the horizon. The design palette draws directly from the surroundings: sand, sea foam, and bleached wood. Large panoramic windows blur the line between indoors and outdoors, creating a seamless flow of light and air.",
      category: "Residential",
      coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
      galleryImages: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000"
      ],
      isFeatured: true
    });

    await storage.createProject({
      title: "Atelier Lumiere",
      slug: "atelier-lumiere",
      shortDescription: "A creative workspace designed for clarity.",
      fullDescription: "For this creative agency, we stripped back the unnecessary to reveal the essential. High ceilings, industrial concrete features softened by linen curtains, and warm lighting create an atmosphere of focused creativity. It is a workspace that feels like a gallery.",
      category: "Commercial",
      coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
      galleryImages: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
      ],
      isFeatured: false
    });
    
    console.log("Database seeded successfully.");
  }
}
