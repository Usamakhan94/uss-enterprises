"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "" },
  { icon: <FaInstagram />, href: "" },
  { icon: <FaDribbble />, href: "" },
  { icon: <FaLinkedin />, href: "" },
  { icon: <FaTwitter />, href: "" },
];

const Footer = () => {
  const pathName = usePathname().split("/")[1];
  return (
    // <footer
    //   className="relative xsm:h-[350px] h-[450px] bg-card rounded-[1.25rem]"
    //   style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    // >
    //   <div className="relative xsm:h-[calc(100vh+350px)] h-[calc(100vh+450px)] -top-[100vh] ">
    //     <div className="xsm:h-[350px] h-[450px] fixed container flex flex-col justify-between py-6 xsm:top-[calc(100vh-350px)] top-[calc(100vh-450px)]">
    //       <div className="grid xsm:grid-cols-3 xsm:pt-8 gap-4">
    //         <div>
    //           <div className="flex items-end justify-start pl-3 mb-4">
    //             <Image src="/logo.png" alt="Logo" width="70" height="60" />
    //             <Image
    //               src="/logo-title.png"
    //               alt="Logo"
    //               width="101"
    //               height="60"
    //             />
    //           </div>
    //           <p className="text-white text-sm">
    //             {`There are many variations of passages of Lorem Ipsum available,
    //             but the majority have suffered alteration in some form, by
    //             injected humour, `}
    //           </p>
    //         </div>
    //         <ul className="flex md:gap-9 xsm:gap-4 gap-2 md:items-center items-start md:flex-row flex-col justify-end xsm:col-start-3">
    //           {navLinks.map((navItem) => (
    //             <li key={navItem.label}>
    //               <Link
    //                 className={`relative text-nowrap ${
    //                   pathName === navItem.href ? "text-white" : "text-link"
    //                 }`}
    //                 href={`/${navItem.href}`}
    //               >
    //                 {navItem.label}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className=" bg-card-foregrounddark border border-white/10 flex xsm:flex-row flex-col items-center justify-between rounded-sm xsm:py-6 py-4 xsm:px-5 px-2 gap-3">
    //         <div className="flex items-center gap-2 flex-wrap">
    //           <p className="text-white/50 font-semibold">Follow us on :</p>
    //           <ul className="flex items-center gap-1">
    //             {socialLinks.map((item, index) => {
    //               return (
    //                 <li key={index}>
    //                   <Link
    //                     href={item.href}
    //                     className="footer_icons w-8 h-8 p-2 rounded-full grid place-items-center bg-gradient-to-br from-[#007DFF] to-[#3C1477]"
    //                   >
    //                     {item.icon}
    //                   </Link>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </div>
    //         <p className="xsm:text-sm text-[0.75rem] text-white/80 text-center">
    //           Copyright© 2024. Aviorsol.com all right reserved
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer
      className="relative xsm:h-[350px] h-[450px] bg-card rounded-[1.25rem]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 xsm:h-[350px] h-[450px] w-full  xsm:top-[calc(100vh-350px)] top-[calc(100vh-450px)]">
        <div className="container flex flex-col justify-between h-full py-6">
          <div className="grid xsm:grid-cols-3 xsm:pt-8 gap-4">
            <div>
              <div className="flex flex-col items-center justify-start w-fit pl-3 mb-4">
                <Image src="/logo.png" alt="Logo" width="90" height="60" />
                <Image
                  src="/logo-title.png"
                  alt="Logo"
                  width="130"
                  height="60"
                />
              </div>
              <p className="text-white text-sm">
                {`Empowering Digital Futures with Innovative Web and App Solutions. `}
              </p>
            </div>
            <ul className="flex md:gap-9 xsm:gap-4 gap-2 md:items-center items-start md:flex-row flex-col justify-end xsm:col-start-3">
              {navLinks.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    className={`relative text-nowrap xsm:text-body text-sm  ${
                      pathName === navItem.href ? "text-white" : "text-link"
                    }`}
                    href={`/${navItem.href}`}
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" bg-card-foregrounddark border border-white/10 flex xsm:flex-row flex-col items-center justify-between rounded-sm xsm:py-6 py-4 xsm:px-5 px-2 gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-white/50 font-semibold xsm:text-body text-sm">
                Follow us on :
              </p>
              <ul className="flex items-center gap-1">
                {socialLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="footer_icons w-8 h-8 p-2 rounded-full grid place-items-center bg-gradient-to-br from-[#007DFF] to-[#3C1477]"
                      >
                        {item.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="xsm:text-sm text-[0.75rem] text-white/80 text-center">
              Copyright© 2024. Aviorsol.com all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
