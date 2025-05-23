import clsx from "clsx";
import { Marker } from "./Marker";
type ButtonProps = {
    icon: string;
    children: React.ReactNode;
    href?: string;
    containerClassName?: string;
    onClick?: () => void;
    markerFill?: string;
};

const Button = ({
    icon,
    children,
    href,
    containerClassName,
    onClick,
    markerFill,
}: ButtonProps) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-1 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -left-[1px]">
                    <Marker fill={markerFill} />
                </span>

                {icon && <i className={`${icon} p-2 text-2xl object-contain z-10  text-white`}></i>}

                <span className="relative z-2 font-poppins base-bold text-white uppercase">
                    {children}
                </span>
            </span>

            <span className="glow-before glow-after" />
        </>
    );
    return href ? (
        <a
            className={clsx(
                "relative p-0.5 rounded-2xl shadow-500 group",
                containerClassName
            )}
            href={href}
        >
            <Inner />
        </a>
    ) : (
        <button
            className={clsx(
                "relative px-0.5  rounded-2xl shadow-500 group",
                containerClassName
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
};
export default Button;
