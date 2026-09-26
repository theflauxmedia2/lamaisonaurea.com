import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls the window to top whenever the route changes.
 * Use as a sibling to your router so each page opens at the top.
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
