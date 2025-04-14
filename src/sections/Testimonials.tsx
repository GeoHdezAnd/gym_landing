import TestimonialItem from "../components/TestimonialItem";
import { testimonials } from "../mockData/data";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";

const Testimonials = () => {
    const halfLength = Math.floor(testimonials.length / 2);
    return (
        <section className="relative z-2 py-24 md:py-28 lg:py-40">
            <Element name="testimonials" className="relative z-2">
                <div className="container block lg:flex">
                    <motion.div
                        variants={SlideRight(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        className="testimonials_head-res relative z-2 mr-20 flex-300"
                    >
                        <p className="caption text-p2 mb-5 max-md:mb-2.5">
                            Muro del olimpo
                        </p>
                        <h3 className="h3 max-md:h5 text-p4">
                            Palabras de nuestros miembros
                        </h3>
                    </motion.div>
                    <div className=" testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
                        <div className=" flex-50">
                            {testimonials
                                .slice(0, halfLength)
                                .map((testimonial) => (
                                    <TestimonialItem
                                        key={testimonial.id}
                                        item={testimonial}
                                        containerClassName="last:after:hidden last:after:max-md:block"
                                    />
                                ))}
                        </div>
                        <div className="flex-50">
                            {testimonials
                                .slice(halfLength)
                                .map((testimonial) => (
                                    <TestimonialItem
                                        key={testimonial.id}
                                        item={testimonial}
                                        containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Testimonials;
