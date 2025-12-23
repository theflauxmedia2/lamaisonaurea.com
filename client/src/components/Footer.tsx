import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-4 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl">La Maison Aurea.</h2>
            <p className="text-primary-foreground/60 max-w-sm font-light leading-relaxed">
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
              <p>+1 (555) 123-4567</p>
              <p className="pt-4">
                123 Design District Blvd<br />
                New York, NY 10012
              </p>
            </div>
          </div>
          
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/30">
          <p>© {new Date().getFullYear()} La Maison Aurea. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
