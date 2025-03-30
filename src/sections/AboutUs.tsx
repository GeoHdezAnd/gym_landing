import { Element } from "react-scroll";
import { aboutUsCards } from "../mockData/data";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const AboutUs = () => {
    return (
        <section>
            <Element name="nosotros">
                <div className="container flex max-md:grid gap-20 max-md:gap-10">
                    <div className="relative w-auto md:w-60">
                        <motion.h2
                            variants={SlideLeft(0.4)}
                            initial="hidden"
                            whileInView="visible"
                            className="mb-4 h3 leading-5 text-p4 uppercase max-lg:mb-7  max-md:mb-4 max-md:text-5xl flex flex-col max-md:leading-10 "
                        >
                            Sobre <span className="text-p2">Nosotros</span>
                        </motion.h2>
                        <motion.p
                            variants={SlideLeft(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            className="relative"
                        >
                            En{" "}
                            <span className="font-inter font-bold text-red-600">
                                KingSlayer
                            </span>
                            , no solo transformamos cuerpos, ¡transformamos
                            vidas! Somos un equipo de apasionados por el fitness
                            comprometidos con ayudarte a alcanzar tus metas en
                            un ambiente motivador, inclusivo y con equipos de
                            última generación.
                        </motion.p>
                    </div>

                    <div className="flex flex-1 gap-4 w-full flex-wrap">
                        {aboutUsCards.map(
                            ({ id, icon, title, description, delay }) => (
                                <motion.div
                                    variants={SlideLeft(delay)}
                                    initial="hidden"
                                    whileInView="visible"
                                    key={id}
                                    className="border-2 border-s4 bg-gradient-to-br from-s1 to-slate-800 text-white px-10 pb-12 rounded-xl flex-1 min-w-[250px] md:flex-[2] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-p1/20"
                                >
                                    <div className="flex flex-col items-center mb-4">
                                        <div className="w-[1px] h-8 bg-gradient-to-l from-transparent via-p1 to-transparent " />
                                        <div className="p-1 rounded-full border-2 border-p1 bg-gray-800/80 backdrop-blur-sm shadow-lg">
                                            <div className="bg-black p-2 rounded-full">
                                                <img
                                                    src={icon}
                                                    className="size-12 object-contain rounded-full"
                                                    alt={title}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 caption text-center bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent">
                                        {title}
                                    </h3>
                                    <p className="pointer-events-none text-gray-300 text-center text-sm leading-relaxed">
                                        {description}
                                    </p>
                                </motion.div>
                            )
                        )}
                        {/* Card 1 (Destacada - más grande) */}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default AboutUs;
