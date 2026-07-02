import React from 'react'

const Paragraph = () => {
    return (
        <section className="w-full bg-black px-6 pt-28 pb-12 md:px-20 lg:px-40">
            <div className="mx-auto max-w-6xl text-center">
                {/* Small Intro */}
                <p className=" mx-auto max-w-3xl text-[16px] text-gray-400 md:text-[20px]">
                    Designing spaces where the artistry of architecture
                    meets the purpose of human connection.
                </p>

                {/* Main Content */}
                <div className="mt-1 ">
                    <p className="text-[16px] text-gray-400 md:text-[20px]">
                        As the{" "}
                        <span className="font-semibold text-white">
                            best interior designers in Delhi
                        </span>
                        , we create warm, thoughtful spaces. Each design reflects
                        lifestyle and purpose. Our work blends comfort, beauty,
                        and lasting emotional connection.
                    </p>

                    <p className="text-[16px] text-gray-400 md:text-[20px]">
                        At Inspatia, we are recognized as the{" "}
                        <span className="font-semibold text-white">
                            best architecture firm in India
                        </span>{" "}
                        and a{" "}
                        <span className="font-semibold text-white">
                            best interior design studio in India
                        </span>
                        , designing spaces where the artistry of architecture
                        meets human connection. Our team of{" "}
                        <span className="font-semibold text-white">
                            best interior designers in Delhi
                        </span>{" "}
                        crafts warm, thoughtful interiors that reflect lifestyle
                        and purpose. Celebrated among the{" "}
                        <span className="font-semibold text-white">
                            top 5 architects in Delhi
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-white">
                            top 5 interior designers in Delhi
                        </span>
                        , we blend comfort, beauty, and lasting emotional
                        resonance. Every project transforms spaces into
                        experiences, ensuring each design is not only functional
                        but deeply meaningful.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Paragraph