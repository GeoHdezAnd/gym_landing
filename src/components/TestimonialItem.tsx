import clsx from "clsx";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    comment: string;
};
type TestimonialItemProps = {
    item: Testimonial;
    containerClassName?: string;
};
const TestimonialItem = ({
    item,
    containerClassName,
}: TestimonialItemProps) => {
    return (
        <div
            className={clsx(
                "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-screen after:bg-p3 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
                containerClassName
            )}
        >
            <blockquote className="h6 mb-8 text-p4">{item.comment}</blockquote>
            <motion.div
                variants={SlideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                className="flex items-center max-xl:-mr-8"
            >
                <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-p3 p-1.5">
                    <img
                        src={item.avatarUrl}
                        alt={item.name}
                        className="size-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="body-2 mb-0.5 text-p2">{item.name}</h4>
                    <p className="small-compact uppercase text-p4">
                        {item.role}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default TestimonialItem;
