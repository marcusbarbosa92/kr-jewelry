import { useState, useEffect } from "react";

export function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!node) return;
    let rafId: number;
    const observer = new IntersectionObserver(
       ([entry]) => {
         if (!entry.isIntersecting) return;
         observer.disconnect();
         const start = performance.now();
         const tick = (now: number) => {
           const p = Math.min((now - start) / duration, 1);
           const eased = 1 - Math.pow(1 - p, 3);
           setValue(Math.round(target * eased));
           if (p < 1) {
             rafId = requestAnimationFrame(tick);
           }
         };
         rafId = requestAnimationFrame(tick);
       },
       { threshold: 0.4 }
     );
     observer.observe(node);
     return () => {
       observer.disconnect();
       cancelAnimationFrame(rafId);
     };
  }, [node, target, duration]);

  return [setNode, value] as const;
}
