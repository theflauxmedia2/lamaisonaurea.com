import { db } from "./db";
import { eq } from "drizzle-orm";
import {
  projects, services, inquiries,
  type Project, type InsertProject,
  type Service, type InsertService,
  type Inquiry, type InsertInquiry
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;
  getServices(): Promise<Service[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  
  // Seeding
  createProject(project: InsertProject): Promise<Project>;
  createService(service: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.id);
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.slug, slug));
    return project;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services).orderBy(services.id);
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }
}

export const storage = new DatabaseStorage();
