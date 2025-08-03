"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TbLoader3 } from "react-icons/tb";

const ContactUs = () => {
  const serviceId = "service_nz4ximb";
  const templateId = "template_5e2xuye";
  const publicId = "P3eBC6QdGj5_0I-eP";

  const [login, setLogin]: any = useState({
    name: "",
    email: "",
    message: "",
    to: "Aviorsol",
  });
  const [formLoading, setFormLoading] = useState(false);
  const form: any = useRef(null);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setFormLoading(true);
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          setLogin({
            name: "",
            email: "",
            message: "",
            to: "Aviorsol",
          });
          setFormLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="xsm:pb-32 pb-16 scroll-mt-10">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:flex justify-end hidden">
            <Image
              src="/contact-img.webp"
              className="max-h-[39.5rem]"
              width="555"
              height="100"
              alt=""
            />
          </div>
          <div className="bg-card md:py-20 xsm:pt-8 xsm:pb-16 xsm:px-14 px-5 pt-3 pb-4 rounded-[0.9375rem] md:rounded-tl-none md:rounded-bl-none relative md:before:absolute md:before:h-full md:before:w-32 md:before:rounded-[0.9375rem] md:before:bg-card md:before:top-0 md:before:-left-28 md:before:-z-10 md:before:rounded-tr-none md:before:rounded-br-none">
            <h3 className="sm:text-h3 xsm:text-h4 text-h5 font-bold">
              Get in Touch
            </h3>
            <form
              action=""
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
              ref={form}
            >
              <label htmlFor="" className="relative custom_label mt-3">
                <input
                  className="w-full bg-input xsm:h-16 h-12 rounded-[13px] shadow-none outline-none px-4 mt-5"
                  type="text"
                  onChange={(e) => {
                    setLogin({ ...login, name: e.target.value });
                  }}
                  name="user_name"
                  value={login.name}
                />
                <span className="absolute z-10 font-medium">Name</span>
              </label>
              <label htmlFor="" className="relative custom_label">
                <input
                  className="w-full bg-input xsm:h-16 h-12 rounded-[13px] shadow-none outline-none px-4 mt-5"
                  type="email"
                  name="user_email"
                  onChange={(e) => {
                    setLogin({ ...login, email: e.target.value });
                  }}
                  value={login.email}
                />
                <span className="absolute z-10 font-medium">Email</span>
              </label>
              <label htmlFor="" className="relative custom_label">
                <textarea
                  className="w-full bg-input rounded-[13px] h-[9.375rem] resize-none shadow-none outline-none px-4 pt-4 mt-5"
                  name="user_message"
                  onChange={(e) => {
                    setLogin({ ...login, message: e.target.value });
                  }}
                  value={login.message}
                ></textarea>
                <span className="absolute z-10 font-medium">Message</span>
              </label>
              <button
                disabled={
                  formLoading || login.name.length < 1 || login.email.length < 1
                }
                className={`xsm:h-[4.0625rem] h-12 rounded-[13px] flex items-center justify-center text-lg gradient_bg ${
                  formLoading ? "loading" : ""
                }`}
              >
                {formLoading ? <TbLoader3 /> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
