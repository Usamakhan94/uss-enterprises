"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/ParallexCards";
import Pills from "@/components/ui/pill";

const Services = () => {
  const projects = [
    {
      title: "UI/UX DESIGN",
      description:
        "The fact that we understand the fundamentals of UI and UX is what sets us apart in the design world . As a well-designed UI with consistent colors and clean typography can make a complex application feel simple and approachable, while thoughtful UX design ensures that the user can achieve their goals with minimal friction. Together, they create a product that looks good and works even better, leading to higher user satisfaction and engagement.",
      src: "/Ui-Ux-Design.webp",
      link: "#",
      // color: "#BBACAF",
    },
    {
      title: "WEB AND APP Development",
      description:
        "To realize your digital vision, we offer premium web and app development services. Our team of skilled developers is capable of building a dynamic website or an innovative mobile application; they have the knowledge and experience to provide solutions that are reliable, scalable, and easy to use. We approach development holistically, making sure that your project's front end and back end are optimized for usability, security, and performance.",
      src: "/Web-and-app-development.webp",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "Brand and product creation",
      description:
        "We specialize in crafting compelling brands that resonate with your target audience. Our comprehensive service transforms ideas into market-ready entities, handling everything from brand identity to product development. With a focus on market trends and consumer behavior, we deliver solutions that make your brand stand out, driving lasting customer engagement and loyalty.",
      src: "/Brand-and-Product-Creation.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "LOGO DESIGN",
      description:
        "Looking for the perfect logo? Aviorsol specializes in creating memorable, impactful logo designs that form the cornerstone of your brand identity. Our service captures your business's essence, conveying your values and mission through a unique, visually striking symbol. We ensure your logo leaves a lasting impression, making it a true reflection of your brand.",
      src: "/Logo-Design.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "Content Management System (CMS)",
      description:
        "We offer advanced CMS and headless web development services to elevate your digital presence. Our user-friendly CMS ensures seamless content management, while our headless approach provides unmatched flexibility. By decoupling the front-end and back-end, we deliver customized, high-performance websites that adapt to your needs, enhancing user experiences across all devices and building a future-proof online presence for your business.",
      src: "/Content-Management-System.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "e-commerce",
      description:
        "We provide comprehensive eCommerce solutions that empower businesses to thrive online. Whether launching or enhancing your store, we deliver secure, scalable platforms tailored to your brand. Our expert team guides you through every step, ensuring a fully functional, high-performance online store that meets your business's unique needs and drives success in the digital marketplace.",
      src: "/Ecommerce.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "QA/QC",
      description:
        "We provide comprehensive QA and QC services to ensure your web projects meet the highest Google Lighthouse standards. Our services identify and address issues throughout development, guaranteeing flawless functionality and a seamless user experience. Additionally, we offer support for maintaining your website and resolving any bugs you encounter.",
      src: "/QC.webp",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "Consultation",
      description:
        "At Aviorsol, we're dedicated to giving our clients accurate, top-notch technical consulting services. Our strategy is based on a thorough comprehension of the particular needs of every customer, guaranteeing that we provide solutions that not only fulfil but also beyond expectations.",
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
            Our Services
          </h2>
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
