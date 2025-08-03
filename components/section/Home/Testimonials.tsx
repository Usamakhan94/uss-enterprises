"use client";
import Transition from "@/components/ui/transition";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials" className=" xsm:py-36 py-10 relative">
      <div className="absolute -top-[100%] left-1/2 -translate-x-1/2 w-full -z-50 pointer-events-none max-w-[120rem] blur-[3.125rem]">
        <img src="/colored_bg.webp" className="w-full" alt="" />
      </div>
      <div className="container">
        <Transition>
          <h2 className="2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h5 font-bold">
            Testimonials
          </h2>
        </Transition>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            660: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className="TestimonailsSwiper !py-5"
        >
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                {`Aviorsol's creative web development solutions improved our
                online presence. Their competence, careful attention to detail,
                and constant commitment to quality resulted in a high-performing
                website that flawlessly complements our corporate
                objectives.Highly recommended for any web development needs!`}
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/isabelle.png"
                  alt="model"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    {`Deborah Tailor`}
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                {`Working with Aviorsol was a game-changer for our company. Their
                innovative approach and dedication to quality resulted in a
                robust and scalable software solution that perfectly meets our
                needs. Their team's professionalism and technical expertise are
                second to none. Highly recommended!`}
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/micheal.png"
                  alt="model"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    {`Vijay Sharma`}
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                {`Aviorsol's outstanding web development services far surpassed
                our expectations. Their group created an amazing, easy-to-use
                website that precisely represents our company. Furthermore, our
                project is completed on schedule, fully tested, and highly
                recommended.`}
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/isabelle.png"
                  alt="model"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    {`Isabell Collins`}
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                {`Aviorsol delivered an outstanding software solution that has
                greatly improved our operations. Their attention to detail,
                responsive support, and deep understanding of our requirements
                ensured a seamless development process. We are thrilled with the
                results and grateful for their exceptional service.`}
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/micheal.png"
                  alt="micheal"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    {`John Williams`}
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                {`Our experience with Aviorsol was fantastic. They provided a
                custom software solution that was both efficient and
                user-friendly. Their team's commitment to excellence and their
                ability to translate our vision into a functional product made
                the entire process smooth and successful. We highly endorse
                their services.`}
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/micheal.png"
                  alt="model"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    {`Micheal Smith`}
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                {`My experience working with Aviorsol was fantastic; they have a
                very skilled team, and they delivered my project just as I had
                requested. I would strongly recommend them.`}
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/isabelle.png"
                  alt="model"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    {`Nikita Nanda`}
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
