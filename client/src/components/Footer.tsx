import { Link } from "wouter";
import { Button } from "./Button";
import FooterCredits from "./FooterCredits";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Bar */}
      <div className="bg-background text-foreground border-t border-border/60">
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Begin</p>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight">
              Ready to craft your next space?
            </h3>
          </div>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button className="rounded-none px-6 py-3">Book a Consultation</Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="rounded-none border-foreground/60 text-foreground hover:bg-foreground hover:text-background px-6 py-3"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-primary-foreground/10">
                <img
                  src="/favicon_io/android-chrome-512x512.png"
                  alt="La Maison Aurea"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl">La Maison Aurea.</h2>
            </div>
              <p className="text-primary-foreground/70 max-w-sm font-light leading-relaxed">
              Crafting soulful spaces that breathe elegance and timeless luxury. Interior design that speaks to the senses.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7 space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-primary-foreground/40">Explore</h3>
            <div className="flex flex-col space-y-4">
              <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
              <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link href="/about" className="hover:text-accent transition-colors">About Studio</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Inquiries</Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-primary-foreground/40">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80 font-light">
              <p>hello@lamaisonaurea.com</p>
                <p>+91 98765 43210</p>
              <p className="pt-4">
                  BTM Layout<br />
                  Bengaluru, Karnataka
              </p>
            </div>
          </div>
          
        </div>

          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/30">
          <p>© {new Date().getFullYear()} La Maison Aurea. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <FooterCredits />
    </footer>
  );
}
