import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options: IntersectionObserverInit) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIntersecting(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return { containerRef, isIntersecting };
};

export default useElementOnScreen;
