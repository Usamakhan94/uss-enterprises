"use client";
import VisionCard from "@/components/ui/visionCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Vision = () => {
  const content = [
    {
      heading: "Our Mission",
      details: `Creating a powerful and valued brand associated to being a trusted corporate 
strategy consultant that will be synonymous with developing and addressing the 
business problems of customers through technological change and innovation.
`,
    },
    {
      heading: "Our Vision",
      details: `Our vision is simple to be an effective value-added technology partner trusted by 
its clients through our consultative selling, support and services for their every
exploration with innovations.`,
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
