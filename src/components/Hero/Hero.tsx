const Hero = () => {
    return (
        <>
            <section className="container grid grid-cols-1 p-4 md:grid-cols-2 min-h-[650px] relative">
                {/* Brand Info */}
                <div className="flex flex-col justify-center py-14 px-6 md:py-0 font-playfair">
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold grid leading-snug">
                            Lo más difícil del ejercicio es comenzar a hacerlo{" "}
                            <span className="text-primary font-extrabold ">
                                PRO FIT
                            </span>
                            {""}
                        </h1>
                        <p className="text-gray-600 xl:max-x-[500px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatibus. Quisquam,
                            voluptatibus. Quisquam, voluptatibus. Quisquam,
                            voluptatibus.
                        </p>
                        {/* Button section */}
                        <div>
                            <button>
                                Membresias
                            </button>
                            <button>
                                Personal
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
