"use client";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  progress: any;
  range: any;
  targetScale: any;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="md:h-[80vh] xsm:h-[60vh] h-[50vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col justify-center items-center relative xsl:h-[80%] xsm:h-[90%] h-[100%] xl:w-[80%] lg:w-[90%] w-full rounded-[1.25rem] sm:p-12 xsm:p-8 p-3 origin-top bg-card-foregrounddark overflow-hidden border border-white/10"
        style={{
          scale,
          top: `calc(10vh + ${i * 25}px)`,
        }}
      >
        <h2 className="lg:text-[3.375rem] sm:text-[3rem] xsm:text-[2.25rem] text-[1.125rem] font-bold xsm:leading-[1.2] leading-none uppercase text-center">
          {title}
        </h2>
        <div className="flex xsm:mt-[1.125rem] mt-[1rem] gap-[2.125rem]">
          <div className="lg:w-[40%] sm:w-[60%] md:text-left text-center relative md:top-[10%] xsm:text-body text-sm flex-1 first-letter:text-h6">
            <p>{description}</p>
          </div>
          <div className="relative w-fit flex-1 md:block hidden ">
            <div className="max-h-72 w-full h-full rounded-[1.5625rem] overflow-hidden">
              <motion.img
                style={{ scale: imageScale }}
                className=" w-full h-full object-fill"
                src={src}
                alt="image"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
