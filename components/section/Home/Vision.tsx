"use client";
import VisionCard from "@/components/ui/visionCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Vision = () => {
  const content = [
    {
      heading: "Our Mission",
      details: `Our Mission is to deliver superior web design and development solutions, including bespoke web and app services. We are dedicated to creating elegant, user-focused digital experiences that fulfill our clients' unique objectives with exceptional precision.`,
    },
    {
      heading: "Our Vision",
      details: `Our Vision is to be the leading provider of innovative web design and development solutions. We aspire to set new industry standards by delivering exceptional, user-centric digital experiences that drive progress and elevate our clients' success globally.`,
    },
    {
      heading: "Our Goal",
      details: `Our Goal is to revolutionize the digital realm with innovative web design and development. We aim to enhance client success by providing groundbreaking, customized solutions that engage users and establish new standards of excellence.`,
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px -100px -250px -100px",
  });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className=" xsm:py-32 py-5">
      <div className="container">
        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 100, opacity: 0, filter: "blur(10px)" },
            visible: {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                staggerChildren: 0.5,
                duration: 0.4,
              },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className="grid lg:grid-cols-3 xsm:gap-9 gap-4"
        >
          {content.map((visonContent, index: any) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              key={index}
            >
              <VisionCard indexed={index} cardContent={visonContent} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
