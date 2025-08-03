"use client";
import { RxChevronDown } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowCircleIcons } from "../ui/icons";
import {
  motion,
  MotionConfig,
  stagger,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    href: "#about",
    label: "About us",
    children: [
      { href: "#Partnerships", label: "Partnerships" },
      { href: "#team", label: "team" },
    ],
  },
  { href: "#services", label: "Services" },
  { href: "#Projects", label: "Projects" },
  { href: "#Products", label: "Products" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isView, setIsVIew] = useState(false);
  const [navBarWidth, setNavBarWidth] = useState(60);
  const [windowResize, setWindowResize] = useState(0);

  const { scrollY } = useScroll();
  const ref = useRef(null);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (ref !== null && value < 2) {
      setIsVIew(false);
    } else {
      setIsVIew(true);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowResize(window.innerWidth);
      if (window.innerWidth < 1400) {
        setNavBarWidth(70);
      } else {
        setNavBarWidth(50);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowResize]);

  const pathName = usePathname().split("/")[1];
  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 8px)",
      },
    },
  };
  const scope = useMenuAnimation(active);

  return (
    <nav className="">
      <div className="container fixed z-50 left-0 right-0">
        {windowResize > 1023 ? (
          <motion.div
            ref={ref}
            className={`md:flex hidden justify-between gap-8 items-center absolute z-[9999] px-3 py-3 rounded-full top-6 left-0`}
            style={{
              transition:
                "all 550ms, background 0ms, box-shadow 0ms, translate 500ms",
              width: isView ? `${navBarWidth}%` : "100%",
              left: isView ? "50%" : "0%",
              x: isView ? "-50%" : "0%",
              background: isView ? "#0a1016" : "transparent",
              boxShadow: isView
                ? "inset 4px -4px 10px #4C0E49, inset -3px 4px 10px #3C1477, rgb(60, 20, 119) -6px 5px 10px inset"
                : "none",
            }}
          >
            <div className="flex items-end justify-start pl-3">
              <Image src="/logo.png" alt="Logo" width="70" height="60" />
              <Image
                className={` ${isView ? "hidden" : ""}`}
                src="/logo-title.png"
                alt="Logo"
                width="130"
                height="60"
              />
            </div>
            <div className="flex gap-9">
              <ul className="flex gap-9 items-center">
                {navLinks.map((navItem) => (
                  <li key={navItem.label} className="relative group">
                    <Link
                      className={`relative text-nowrap flex items-center [&>svg]:hover:rotate-180 transition-all ${
                        pathName === navItem.href ? "text-white" : "text-link"
                      }`}
                      href={`/${navItem.href}`}
                    >
                      {navItem.label} {navItem.children && <RxChevronDown />}
                    </Link>
                    {navItem.children && (
                      <div className="flex flex-col gap-4 absolute top-6 left-0 bg-background px-4 py-4 rounded-sm border scale-y-0 group-hover:scale-y-100 transition-all origin-top">
                        {navItem.children.map((innerNav) => (
                          <Link
                            key={innerNav.href + 1}
                            className={`relative text-nowrap hover:translate-x-2 transition-all ${
                              pathName === innerNav.href
                                ? "text-white"
                                : "text-link"
                            }`}
                            href={`/${innerNav.href}`}
                          >
                            {innerNav.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                className="rounded-full h-14 min-w-[10.25rem] relative group"
                href="#contact"
              >
                {!isView && (
                  <div className="absolute w-1/2 h-1/2 bg-[#01BAED] -bottom-1 left-1/2 -translate-x-1/2 rounded-full blur-md opacity-30" />
                )}
                <div className="bg-clip-padding p-[1px] relative isolate overflow-hidden min-w-14 gap-4 h-full rounded-full">
                  <div className="absolute w-full h-full btn-gradeint -z-10 top-0 left-0 animate-pulse group-hover:animate-none" />
                  <div className="bg-button rounded-full flex items-center justify-between w-full h-full px-[0.625rem] pl-[0.9375rem]">
                    <span>Contact us</span>
                    <span className="group-hover:rotate-45 transition-all">
                      <ArrowCircleIcons />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ) : (
          <div
            className={`md:hidden flex justify-between items-center w-full mt-5 relative p-1 rounded-[0.875rem] transition-all duration-300 ${
              isView || active ? "bg-card" : "bg-transparent"
            }`}
          >
            <div className="flex items-end justify-start pl-3">
              <Image
                className="xsm:max-w-[70px] max-w-[50px]"
                src="/logo.png"
                alt="Logo"
                width="70"
                height="60"
              />
              <Image
                className="xsm:max-w-[101px] max-w-[80px]"
                src="/logo-title.png"
                alt="Logo"
                width="101"
                height="60"
              />
            </div>
            <nav ref={scope} className="grid place-items-center">
              <MotionConfig
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <motion.button
                  initial={false}
                  animate={active ? "open" : "closed"}
                  onClick={() => setActive((pv) => !pv)}
                  className="relative h-16 w-16 rounded-full transition-colors"
                >
                  <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-[3px] w-7 bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                  />
                  <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-[3px] w-7 bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                  />
                  <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-[3px] w-3 bg-white"
                    style={{
                      x: "-50%",
                      y: "50%",
                      bottom: "35%",
                      left: "calc(50% + 8px)",
                    }}
                  />
                </motion.button>
              </MotionConfig>
              <ul
                className="w-full absolute left-0 top-[120%] bg-card p-7 flex flex-col justify-between h-[50vh]"
                style={{
                  pointerEvents: active ? "auto" : "none",
                  clipPath: "inset(10% 50% 90% 50% round 14px)",
                }}
              >
                {navLinks.map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      onClick={() => setActive((prev) => !prev)}
                      className={`relative text-nowrap ${
                        pathName === navItem.href ? "text-white" : "text-link"
                      }`}
                      href={`/${navItem.href}`}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
                {/* <li> */}
                <Link
                  className="rounded-full h-14 min-w-[10.25rem] relative group block w-fit contact_btn"
                  href="#contact"
                >
                  <div className="absolute w-1/2 h-1/2 bg-[#01BAED] -bottom-1 left-1/2 -translate-x-1/2 rounded-full blur-md opacity-30" />

                  <div className="bg-clip-padding p-[1px] relative isolate overflow-hidden min-w-14 gap-4 h-full rounded-full">
                    <div className="absolute w-full h-full btn-gradeint -z-10 top-0 left-0 animate-pulse group-hover:animate-none" />
                    <div className="bg-button rounded-full flex items-center justify-between w-full h-full px-[0.625rem] pl-[0.9375rem]">
                      <span>Contact us</span>
                      <span className="group-hover:rotate-45 transition-all">
                        <ArrowCircleIcons />
                      </span>
                    </div>
                  </div>
                </Link>
                {/* </li> */}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 14px)"
          : "inset(0% 0% 100% 100% round 14px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );

    animate(
      ".contact_btn",
      isOpen
        ? { opacity: 1, filter: "blur(0px)" }
        : { opacity: 0, filter: "blur(20px)" },
      {
        duration: 0.35,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default Navbar;
