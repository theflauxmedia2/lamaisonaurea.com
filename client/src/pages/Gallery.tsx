import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const galleryImages = [
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
  "/images/015.webp",
  "/images/016.webp",
  "/images/017.webp",
  "/images/018.webp",
  "/images/019.webp",
  "/images/020.webp",
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f1] text-foreground">
      <Navigation />

      <main className="flex-grow pt-28 pb-28">
        <div className="mx-auto px-6 md:px-10 w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Gallery
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">
              A study in light, material, and quiet detail.
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              A curated glimpse into residences and spaces we have crafted—moments of texture,
              proportion, and atmosphere captured in stills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (idx % 6) * 0.05 }}
                className="group relative overflow-hidden bg-muted/50 rounded-sm aspect-[4/5]"
              >
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


