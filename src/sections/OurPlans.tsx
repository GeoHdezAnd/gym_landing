import { Element } from "react-scroll";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import clsx from "clsx";
import { useState } from "react";
import { gymPlans } from "../mockData/data";
import { FadeUp } from "../utility/animation";

const OurPlans = () => {
    const [monthly, setMonthly] = useState(true);
    return (
        <section>
            <Element name="planes">
                <div className="container">
                    <motion.div
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        className="max-w-1000 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16"
                    >
                        <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
                            Nuestros planes
                        </h3>
                        <div className="relative z-4 mx-auto flex w-[350px] rounded-3xl border-[3px] border-s4/25 bg-s1/50  backdrop-blur-[6px] max-md:w-[310px]">
                            <button
                                className={clsx(
                                    "pricing-head_btn ",
                                    monthly && "text-p4 "
                                )}
                                onClick={() => setMonthly(true)}
                            >
                                Mensual
                            </button>
                            <button
                                className={clsx(
                                    "pricing-head_btn ",
                                    !monthly && "text-p4 "
                                )}
                                onClick={() => setMonthly(false)}
                            >
                                Anual
                            </button>
                            <div
                                className={clsx(
                                    "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                                    !monthly && "translate-x-full"
                                )}
                            />
                        </div>
                        <div className="pricing-bg flex items-center">
                            <img
                                src="/images/bg-bad-omens.png"
                                width={600}
                                height={380}
                                alt="outline"
                                className="top-388 opacity-5 mix-blend-soft-light"
                            />
                        </div>
                    </motion.div>
                    {/* Pricing section */}
                    <motion.div
                        variants={FadeUp(0.3)}
                        initial="hidden"
                        whileInView="visible"
                        className="scroll-hide relative z-2 -mt-24 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-2 "
                    >
                        {gymPlans.map((plan, index) => (
                            <div
                                key={plan.id}
                                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 px-4 pb-9 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] "
                            >
                                <div
                                    className={clsx(
                                        "absolute left-0 right-0 z-2 flex items-center justify-center",
                                        index === 1
                                            ? "-top-6 "
                                            : "-top-6 xl:-top-11"
                                    )}
                                ></div>
                                <div
                                    className={clsx(
                                        "relative flex flex-col items-center",
                                        index === 1 ? "pt-14 " : "pt-14"
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-3 py-1.5 uppercase",
                                            
                                        )}
                                    >
                                        {plan.title}
                                    </div>
                                    <div className="relative z-2 flex items-center justify-center">
                                        <div
                                            className={clsx(
                                                "h-num flex items-start",
                                                index === 1
                                                    ? "text-p3"
                                                    : "text-p4"
                                            )}
                                        >
                                            ${" "}
                                            <CountUp
                                                start={plan.priceMonthly}
                                                end={
                                                    monthly
                                                        ? plan.priceMonthly
                                                        : plan.priceYearly
                                                }
                                                duration={0.6}
                                                useEasing={false}
                                                preserveValue
                                            ></CountUp>
                                        </div>
                                        <div className="small-1 relative top-3 ml-1 uppercase">
                                            {monthly ? " /MES" : "/ANUAL"}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={clsx(
                                        "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                                        index === 1 && "border-b"
                                    )}
                                >
                                    {plan.caption}
                                </div>
                                <ul className="mx-auto space-y-4 xl:px-7  ">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="relative flex items-center gap-5"
                                        >
                                            <i className="ri-focus-2-fill text-p2" />

                                            <p className="flex-1">{feature}</p>
                                        </li>
                                    ))}
                                </ul>

                                {index === 1 && (
                                    <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:text-p4 before:content-['-'] after:mx-2.5 after:text-p4 after:content-['-'] ">
                                        Oferta por tiempo limitado
                                    </p>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Element>
        </section>
    );
};

export default OurPlans;
