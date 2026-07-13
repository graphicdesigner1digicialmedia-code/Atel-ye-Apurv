import { useState } from "react";
import FAQItem from "./FAQItem";
import { faqData } from "../../data/faqData";

export default function FAQ() {

    const [active, setActive] = useState(0);

    return (

        <section className="bg-black py-28">

            <div className="max-w-[1500px] mx-auto px-6">

                <div className="rounded-[34px] bg-[#161616] border border-zinc-700">

                    <div className="py-20">

                        <h2
                            className="
text-center
text-5xl
md:text-7xl
font-light
text-white
mb-16
">

                            Frequently Asked{" "}

                            <span className="text-[#B06C48]">
                                Questions
                            </span>

                        </h2>

                        <div className="space-y-6 px-8 md:px-12 pb-10">

                            {

                                faqData.map((faq, index) =>

                                    <FAQItem

                                        key={faq.id}

                                        faq={faq}

                                        active={active === index}

                                        onClick={() => setActive(
                                            active === index ? -1 : index
                                        )}

                                    />

                                )

                            }

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}