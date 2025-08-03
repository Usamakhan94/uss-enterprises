"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Transition = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px -100px -50px -100px",
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: "100%",
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4 }}
        ref={ref}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Transition;
