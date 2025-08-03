"use client";
import { ArrowCircleIcons } from "@/components/ui/icons";
import Pills from "@/components/ui/pill";
import Transition from "@/components/ui/transition";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    url: "/portfolio/abstract-1.jpeg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/portfolio/abstract-2.jpeg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/portfolio/abstract-3.jpeg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/portfolio/abstract-4.jpeg",
    title: "Title 4",
    id: 4,
  },
];

const PortfolioSection = () => {
  const [cardSize, setCardSize] = useState(750);
  const [cardsStart, setCardsStart] = useState(350);
  const [cardEnd, setCardEnd] = useState(1.46);

  const cardsResponsive = () => {
    setCardSize(window.innerWidth / 2.25);
    if (window.innerWidth < 1200) {
      setCardSize(window.innerWidth / 1.65);
      setCardsStart(250);
      setCardEnd(0.8);
    } else if (window.innerWidth < 1440) {
      setCardSize(window.innerWidth / 1.65);
      setCardsStart(250);
      setCardEnd(0.8);
      return;
    } else if (window.innerWidth < 1700) {
      setCardSize(window.innerWidth / 2.4);
      setCardEnd(1.35);
      return;
    }
  };

  useEffect(() => {
    cardsResponsive();
    window.addEventListener("resize", cardsResponsive);
    return () => window.removeEventListener("resize", cardsResponsive);
  }, [cardSize]);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${cardsStart}px`, `-${cards.length * cardSize - cardSize * cardEnd}px`]
  );
  return (
    <section id="work" className=" sm:py-32 xsm:py-20 py-10">
      <div ref={targetRef} className="relative h-[300vh] md:block hidden">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="lg:ml-32 ml-6">
            <Pills>
              <span className="font-bold">Portfolio</span>
            </Pills>
            <h4 className="text-h2 font-bold leading-none">Our Portfolio</h4>
            <Link
              className="rounded-full block mt-7 mb-1 self-center xsm:h-[72px] h-[58px] xsm:min-w-[16.75rem] min-w-[17.5rem] w-fit relative group"
              href="#contact"
            >
              <div className="bg-clip-padding p-[1px] relative isolate overflow-hidden min-w-14 gap-4 h-full rounded-full">
                <div className="absolute w-full h-full btn-gradeint -z-10 top-0 left-0 animate-pulse group-hover:animate-none" />
                <div className="bg-[#05080B] rounded-full flex items-center justify-between w-full h-full px-[0.625rem] pl-[1.7rem]">
                  <span className=" xsm:text-h6 text-body font-medium">
                    For More
                  </span>
                  <span className="group-hover:rotate-45 transition-all">
                    <ArrowCircleIcons />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <motion.div style={{ x }} className="flex gap-4 bg-background">
            {cards.map((card) => {
              return (
                <a
                  key={card.id}
                  className={`relative h-[80vh] overflow-hidden bg-card-background rounded-md mt-10`}
                  style={{ width: `${cardSize}px` }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${card.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 pointer-events-none"
                  ></div>
                  {/* <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-h6 font-black uppercase text-white backdrop-blur-lg">
                      {card.title}
                    </p>
                  </div> */}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="container md:hidden">
        <div className="flex flex-col gap-3 mb-8">
          <Pills>
            <span className="font-bold">Portfolio</span>
          </Pills>
          <h4 className="font-bold leading-none 2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h5 ">
            Our Portfolio
          </h4>
        </div>
        <div className=" grid xsm:grid-cols-2 gap-2">
          {cards.map((item, index) => {
            return (
              <Link
                href="#"
                key={index}
                className=" xsm:first:row-span-2 xsm:first:h-[21.875rem] xsm:[&:nth-last-child(4n)]:row-span-2 xsm:[&:nth-last-child(4n)]:h-[21.875rem] min-h-[160px]"
              >
                <Transition className="h-full">
                  <div
                    style={{
                      backgroundImage: `url(${item.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className=" h-full bg-card rounded-[10px] grid place-items-center overflow-hidden"
                  >
                    {/* <h4 className="text-h4 text-secondary">{item?.title}</h4> */}
                  </div>
                </Transition>
              </Link>
            );
          })}
        </div>
        <Link
          className="rounded-full block m-auto mt-7 self-center xsm:h-[72px] h-[58px] xsm:min-w-[18.75rem] min-w-[17.5rem] w-fit relative group"
          href=""
        >
          <div className="bg-clip-padding p-[1px] relative isolate overflow-hidden min-w-14 gap-4 h-full rounded-full">
            <div className="absolute w-full h-full btn-gradeint -z-10 top-0 left-0 animate-pulse group-hover:animate-none" />
            <div className="bg-[#05080B] rounded-full flex items-center justify-between w-full h-full px-[0.625rem] pl-[1.7rem]">
              <span className=" xsm:text-h6 text-body font-medium">
                View More
              </span>
              <span className="group-hover:rotate-45 transition-all">
                <ArrowCircleIcons />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
