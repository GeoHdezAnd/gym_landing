import { Element } from "react-scroll";
import FaqItem from "../components/FaqItem";
import { gymFaq } from "../mockData/data";
import { motion } from "framer-motion";
import { FadeUp, SlideLeft } from "../utility/animation";

const Faq = () => {
    const halfLength = Math.floor(gymFaq.length / 2);
    return (
        <section>
            <Element name="faq" className="relative">
                <div className="container relative z-2 py-28">
                    <div>
                        <motion.h3
                            variants={SlideLeft(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            className="h3  max-w-512 max-lg:max-w-md mb-7 text-p4"
                        >
                            Consejos para alcanzar tu <span className="text-p2">máximo</span> potencial
                        </motion.h3>
                        <p className="body-1 max-lg:pb-16 max-lg:max-w-sm">
                            {" "}
                            Tú tienes preguntas, nosotros tenemos respuestas
                        </p>
                        <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s4 " />
                    </div>
                    <div className=" faq-glow_before relative z-2 border border-s4 bg-s1   ">
                        <motion.div
                            variants={FadeUp(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            className=" container flex gap-10 max-lg:block"
                        >
                            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s4 bg-s1 ">
                                <img
                                    src="/images/faq-logo.png"
                                    width={50}
                                    alt="logo"
                                />
                            </div>
                            <div className="relative flex-1 pt-24">
                                {gymFaq
                                    .slice(0, halfLength)
                                    .map((item, index) => (
                                        <FaqItem
                                            key={item.id}
                                            item={item}
                                            index={index}
                                        />
                                    ))}
                            </div>
                            <div className="relative flex-1 lg:pt-24">
                                {gymFaq.slice(halfLength).map((item, index) => (
                                    <FaqItem
                                        key={item.id}
                                        item={item}
                                        index={halfLength + index}
                                    />
                                ))}
                            </div>
                        </motion.div>
                        <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s4 max-lg:hidden" />
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Faq;
