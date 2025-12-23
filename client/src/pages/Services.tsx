import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useServices } from "@/hooks/use-services";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-24">
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
              {services?.map((service, idx) => (
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
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={idx % 2 === 1 ? 'md:order-1' : ''}
                  >
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">{service.title}</h2>
                    <div className="w-12 h-1 bg-accent mb-8"></div>
                    <p className="text-muted-foreground leading-loose font-light">
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
