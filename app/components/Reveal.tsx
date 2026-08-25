"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

type Direction = "up" | "down" | "left" | "right";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  ...rest
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "-10% 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[direction]} ${visible ? styles.visible : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
