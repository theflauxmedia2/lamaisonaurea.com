import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useServices } from "@/hooks/use-services";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { type Service } from "@shared/schema";
import { ArrowRight, Star } from "lucide-react";

const fallbackServices: Service[] = [
  {
    id: 1,
    title: "Bespoke Residences",
    description:
      "End-to-end architectural and interior design for luxury homes, balancing sculptural form with livable warmth.",
    image: "/images/009.webp",
  },
  {
    id: 2,
    title: "Interior Architecture",
    description:
      "Layered material palettes, custom millwork, and curated furnishings tailored to how you live and entertain.",
    image: "/images/010.webp",
  },
  {
    id: 3,
    title: "Commercial Environments",
    description:
      "Signature workplaces and hospitality spaces that elevate brand presence through light, proportion, and precision detailing.",
    image: "/images/011.webp",
  },
];

export default function Services() {
  const { data: services, isLoading, isError } = useServices();
  const displayServices =
    !isError && services?.length ? services : fallbackServices;

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f1] text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-28 pb-28">
        <div className="mx-auto px-6 md:px-10 w-full max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Expertise</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              We offer comprehensive design services tailored to your unique lifestyle. From concept to completion, we manage every detail with precision and care.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-32">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="space-y-32">
              {displayServices.map((service, idx) => (
                <div 
                  key={service.id} 
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={idx % 2 === 1 ? 'md:order-2' : ''}
                  >
                    <div className="relative overflow-hidden rounded-sm bg-muted/40 aspect-[4/3]">
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={idx % 2 === 1 ? 'md:order-1' : ''}
                  >
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">{service.title}</h2>
                    <div className="w-12 h-[3px] bg-foreground/70 mb-8" />
                    <p className="text-muted-foreground leading-loose font-light text-lg">
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          )}

          {/* Process Strip */}
          <div className="mt-28 bg-white border border-border/60 p-10 md:p-14 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Our Method
                </p>
                <h3 className="font-serif text-3xl md:text-4xl">
                  A considered, end-to-end partnership.
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-auto">
                {["Discovery", "Concept", "Detailing", "Delivery"].map((step, idx) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="h-[1px] w-8 bg-foreground/30" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        0{idx + 1}
                      </p>
                      <p className="text-sm font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Slice */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Testimonials
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-6">
                “They orchestrated every detail with calm precision. The result feels inevitable—and completely ours.”
              </h3>
              <p className="text-muted-foreground text-sm tracking-wide uppercase">Evelyn Clarke — Tribeca Residence</p>
              <div className="flex items-center gap-2 mt-4 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-sm bg-muted/40 aspect-[16/10]">
                <img
                  src="/images/012.webp"
                  alt="Client interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
