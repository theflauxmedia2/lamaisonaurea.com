import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f7f5f1] px-4">
      <Link href="/" className="flex items-center gap-2 mb-12">
        <img
          src="/favicon_io/apple-touch-icon.png"
          alt="La Maison Aurea"
          className="h-10 w-10 object-contain"
        />
        <span className="font-serif text-xl font-semibold text-foreground">
          La Maison Aurea
        </span>
      </Link>
      <div className="flex flex-col items-center gap-4 max-w-md text-center">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-8 w-8 text-muted-foreground shrink-0" />
          <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
            404 — Page not found
          </h1>
        </div>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-3 bg-foreground text-background font-medium text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
