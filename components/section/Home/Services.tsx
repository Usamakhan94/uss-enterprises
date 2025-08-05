"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/ParallexCards";
import Pills from "@/components/ui/pill";

const Services = () => {
  const projects = [
    // {
    //   title: "UI/UX DESIGN",
    //   description:
    //     "The fact that we understand the fundamentals of UI and UX is what sets us apart in the design world . As a well-designed UI with consistent colors and clean typography can make a complex application feel simple and approachable, while thoughtful UX design ensures that the user can achieve their goals with minimal friction. Together, they create a product that looks good and works even better, leading to higher user satisfaction and engagement.",
    //   src: "/Ui-Ux-Design.webp",
    //   link: "#",
    //   // color: "#BBACAF",
    // },
    {
      title: "WEB AND APP Development",
      description:
        "To realize your digital vision, we offer premium web and app development services. Our team of skilled developers is capable of building a dynamic website or an innovative mobile application; they have the knowledge and experience to provide solutions that are reliable, scalable, and easy to use. We approach development holistically, making sure that your project's front end and back end are optimized for usability, security, and performance.",
      src: "/Web-and-app-development.webp",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "Software Development.",
      description: "Software designing as per requirement with consultancy",
      src: "/Web-and-app-development.webp",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "IT Consultancy.",
      description:
        "Solution recommendations according to requirements with inspections.",
      src: "/Web-and-app-development.webp",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "Multimedia Solutions.",
      description:
        "Smart Conference room, Smart Labs, Projectors, LEDs, Sound Systems etc.",
      src: "/Web-and-app-development.webp",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "Smart Attendance Solutions.",
      description:
        "Wall mount, ATM Kiosk, Short range, Long range RFID’s, Finger Print, Face Detections solutions, Walk Through Floor Stand Single & Multiple Module.",
      src: "/Web-and-app-development.webp",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "Printing & Photocopying Devices.",
      description: "Printers, Scanners, AIO, Heavy Duty Photocopiers etc.",
      src: "/Web-and-app-development.webp",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "End User Computing.",
      description:
        "Desktops, Laptops, AIO PCs, Tablets, Smart Devices, Thin Clients, Zero Clients etc.",
      src: "/Brand-and-Product-Creation.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "Enterprises Data Centers Solutions.",
      description:
        "Servers, NAS/SAN/Hybrid Storages, Tape Libraries, Backup & Archiving solutions, Virtualization Solutions, Core Networking, Data Centers Designing & Implementation etc. ",
      src: "/Logo-Design.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "Security & Surveillances.",
      description: "CCTV & Walkthrough gates Security solutions.",
      src: "/Content-Management-System.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "Alternate Energy Solution.",
      description:
        "On Grid, Off Grid, Hybrid Solar Energy solutions, UPS, Generators, etc.",
      src: "/Ecommerce.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "Networking & Security Solutions.",
      description:
        "Firewalls, End User Security, Internet Management, WAN Optimization etc.",
      src: "/QC.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "Service Level Agreements (SLA’s).",
      description: "Local warranty Extensions.",
      src: "/Consultation.webp",
      link: "#",
      // color: "#C2491D",
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      className="relative md:pb-24 sm:pb-28 xsm:pb-40 pb-60"
    >
      <div className="container">
        <div className="flex items-center justify-center flex-col mt-20">
          <Pills>
            <span className="leading-none text-white font-bold xsm:text-base text-sm">
              What We Offer
            </span>
          </Pills>
          <h2 className="2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h5 pt-4 xsm:pt-0 font-bold leading-[1.2]">
            Our Offering Services
          </h2>
          <p className="text-base">
            As an end to end IT solution Provider, USS Enterprises offering a
            wide and comprehensive range of product and service which
            diversified in to following segments:
          </p>
        </div>
        <div ref={container}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.025, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
