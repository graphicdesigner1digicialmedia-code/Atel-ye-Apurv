import React from "react";
import { ArrowUpRight } from "lucide-react";

const ContactForm = () => {
    return (
        <section className="bg-[#000000] text-white py-6 px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
                <form className="space-y-6">

                    {/* First Row */}
                    <div className="grid md:grid-cols-2 gap-10">

                        <div>
                            <label className="block text-[20px] font-medium mb-4">
                                What's Your Name
                            </label>

                            <input
                                type="text"
                                placeholder=""
                                className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                            />
                        </div>

                        <div>
                            <label className="block text-[20px] font-medium mb-4">
                                Your E-mail
                            </label>

                            <input
                                type="email"
                                placeholder=""
                                className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                            />
                        </div>

                    </div>

                    {/* Location */}

                    <div>
                        <label className="block text-[20px] font-medium mb-4">
                            Your Location
                        </label>

                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                        />
                    </div>

                    {/* Project */}

                    <div>
                        <label className="block text-[20px] font-medium ">
                            Tell Us About Your Project
                        </label>

                        <textarea
                            rows="4"
                            className="w-full resize-none bg-transparent border-b border-zinc-700 pb-0 text-lg outline-none focus:border-white transition"
                        ></textarea>
                    </div>

                    {/* Button */}

                    <div className="flex justify-center pt-2">
                        <button
                            className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-white
                px-12
                py-5
                text-xl
                font-medium
                transition-all
                duration-500
                hover:text-black
              "
                        >
                            <span
                                className="
                  absolute
                  inset-0
                  scale-y-0
                  origin-bottom
                  bg-white
                  transition-transform
                  duration-500
                  group-hover:scale-y-100
                "
                            />

                            <span className="relative flex items-center gap-1">
                                Send Message
                                <ArrowUpRight size={20} />
                            </span>
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default ContactForm;