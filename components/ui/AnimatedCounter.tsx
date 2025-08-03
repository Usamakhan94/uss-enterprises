"use client";

import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  to: number;
  className?: string;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  to,
  animationOptions,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(0);
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, to]);

  return <span className={className} ref={ref}></span>;
};

export default AnimatedCounter;
