import Button from "../components/Button";
import { Element, Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const Hero = () => {
    return (
        <section className="relative pt-52 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Element name="hero">
                <div className="container">
                    <div className="relative z-2 max-lg:max-w-388">
                        <motion.p
                            variants={SlideRight(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="caption uppercase text-white"
                        >
                            NO PAIN, NO GAIN
                        </motion.p>
                        <motion.h1
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="mb-6 text-p4 uppercase max-lg:mb-7 h1 max-md:mb-4 max-md:text-5xl flex flex-col max-md:leading-12"
                        >
                            <span className="font-logo  ">MR. GYM</span>
                        </motion.h1>
                        <h2 className="h3 py-4">Ponte en forma y sé saludable</h2>
                        <motion.p
                            variants={SlideRight(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="max-w-440 mb-12 body-1 max-md:mb-10"
                        >
                            Olvídate de las medias repeticiones. Aquí levantamos
                            pesado, sudamos sangre y rompemos límites.
                        </motion.p>
                        <motion.div
                            variants={SlideRight(0.3)}
                            initial="hidden"
                            animate="visible"
                        >
                            <LinkScroll to="features" offset={-100} spy smooth>
                                <Button icon="ri-whatsapp-fill">
                                    !Contactar!
                                </Button>
                            </LinkScroll>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={SlideLeft(0.4)}
                        initial="hidden"
                        animate="visible"
                        className="absolute top-32 left-[calc(50%-0px)] w-[1230px] pointer-events-none hero-img_res "
                    >
                        <img
                            src="/images/hero.png"
                            className="size-512 opacity-50 
              drop-shadow-[0_20px_25px_rgba(245,140,39,0.8)] "
                            alt="hero"
                        />
                    </motion.div>
                </div>
            </Element>
        </section>
    );
};

export default Hero;
