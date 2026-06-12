import { useState, useEffect } from "react";

const WISHLIST_KEY = "kr-wishlist";

export function useWishlist() {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
  }, [items]);

  const toggle = (name: string) =>
    setItems((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const clear = () => setItems([]);

  return { items, toggle, clear };
}
