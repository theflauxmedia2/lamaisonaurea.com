## Packages
framer-motion | Page transitions and scroll animations
lucide-react | Icons for UI elements (already in base, but ensuring availability)
zod | Schema validation (already in base)

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  serif: ["'Playfair Display'", "serif"],
  sans: ["'DM Sans'", "sans-serif"],
}
Images will use Unsplash placeholders for now as per instructions.
Backend API routes are defined in @shared/routes, using TanStack Query for data fetching.
