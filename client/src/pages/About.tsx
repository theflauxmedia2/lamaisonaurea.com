import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f1]">
      <Navigation />

      <main className="flex-grow pt-24 pb-24">
        {/* Hero: full-width image + overlay headline */}
        <section className="relative w-full h-[50vh] min-h-[320px] md:h-[55vh] md:min-h-[400px] mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src="/images/006.webp"
              alt="La Maison Aurea — interior design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/20" />
          </motion.div>
          <div className="absolute inset-0 flex items-end justify-start p-6 md:p-12 lg:p-16">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-2xl drop-shadow-lg"
            >
              Crafting Innovative, <strong>User-Centric</strong> Environments
            </motion.h1>
          </div>
        </section>

        <section className="about-section container mx-auto px-6 md:px-12">
          {/* Intro: image + text side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-32">
            <motion.div
              {...fadeIn}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/images/013.webp"
                  alt="Interior design — La Maison Aurea studio"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </motion.div>
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-muted-foreground font-light leading-relaxed text-lg md:text-xl"
              >
                With over <strong className="text-foreground font-medium">5 years of professional experience</strong> in the
                field of <strong className="text-foreground font-medium">Architecture and Interior Design</strong>, this
                practice is dedicated to creating spaces that seamlessly blend
                functionality with high-end aesthetics. By adopting a holistic
                approach to design, every project is treated as a unique expression
                of style, purpose, and the inhabitant's personality.
              </motion.p>
            </div>
          </div>

          <hr className="border-border/60 my-16 md:my-20" />

          {/* Design Philosophy: text + image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-32">
            <div className="lg:col-span-7">
              <motion.h2
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.05 }}
                className="font-serif text-2xl md:text-3xl text-foreground mb-6"
              >
                Design Philosophy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted-foreground font-light leading-relaxed text-lg"
              >
                The core philosophy centers on <strong className="text-foreground font-medium">sustainable innovation</strong>
                . By prioritizing the use of eco-friendly materials and smart design
                techniques, we ensure that every environment is not only visually
                stunning but also environmentally responsible and comfortable.
                Whether it is a <strong className="text-foreground font-medium">minimalist aesthetic</strong> or an{" "}
                <strong className="text-foreground font-medium">intricate, eclectic approach</strong>, the goal remains the
                same: to inspire and enhance the lives of those who inhabit the
                space.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/images/018.webp"
                  alt="Sustainable, minimalist interior design"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Areas of Expertise + image strip */}
          <div className="mb-24 md:mb-32">
            <motion.h2
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.05 }}
              className="font-serif text-2xl md:text-3xl text-foreground mb-8"
            >
              Areas of Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-muted-foreground font-light leading-relaxed text-lg list-none pl-0"
              >
                <li>
                  <strong className="text-foreground font-medium">Residential Design:</strong>{" "}
                  Transforming cozy homes into modern sanctuaries tailored to
                  individual needs.
                </li>
                <li>
                  <strong className="text-foreground font-medium">Commercial &amp; Office Spaces:</strong>{" "}
                  Designing dynamic, productive environments for the modern
                  workforce.
                </li>
                <li>
                  <strong className="text-foreground font-medium">Hospitality Design:</strong>{" "}
                  Crafting upscale, immersive experiences for hotels and luxury
                  stays.
                </li>
                <li>
                  <strong className="text-foreground font-medium">Turnkey Projects:</strong>{" "}
                  Managing high-value, large-scale projects from initial concept to
                  final execution.
                </li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src="/images/007.webp"
                    alt="Residential and luxury interior design"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-sm mt-8">
                  <img
                    src="/images/021.webp"
                    alt="Victorian and eclectic interior design"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Proven Impact: wide image + text */}
          <div className="space-y-12">
            <motion.h2
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.05 }}
              className="font-serif text-2xl md:text-3xl text-foreground"
            >
              Proven Impact
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden rounded-sm"
            >
              <img
                src="/images/026.webp"
                alt="Portfolio — Japandi, Modern Contemporary, Victorian, Fusion interiors"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl"
            >
              Having successfully delivered <strong className="text-foreground font-medium">over 60+ projects</strong>{" "}
              across diverse locations like Bangalore, Madurai, and Coonoor, our
              portfolio demonstrates a mastery of various design themes—from{" "}
              <strong className="text-foreground font-medium">Japandi</strong> and{" "}
              <strong className="text-foreground font-medium">Modern Contemporary</strong> to{" "}
              <strong className="text-foreground font-medium">Victorian</strong> and{" "}
              <strong className="text-foreground font-medium">Fusion</strong> styles. Our
              technical precision is backed by{" "}
              <strong className="text-foreground font-medium">GFC (Good For Construction)</strong> standards, ensuring
              that what is designed is built to perfection.
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
