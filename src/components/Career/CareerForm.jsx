import { ArrowRight, Upload } from "lucide-react";

export default function CareerForm() {
    return (
        <section className="w-full bg-black text-white py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Heading */}

                <div className="grid lg:grid-cols-2 gap-20 mb-20">

                    <div>
                        <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-5">
                            Careers
                        </p>

                        <h2 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
                            Build Spaces.
                            <br />
                            Build Your
                            <span className="italic font-normal"> Future.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="text-neutral-600 text-lg leading-8 max-w-lg">
                            We believe exceptional design begins with exceptional people.
                            If you're passionate about architecture, interiors, visualization,
                            or project execution, we'd love to hear from you.
                        </p>
                    </div>

                </div>

                {/* Form */}

                <form className="grid lg:grid-cols-2 gap-12">

                    {/* Left */}

                    <div className="space-y-10">

                        <div>
                            <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border-b border-neutral-300 pb-4 outline-none bg-transparent focus:border-black transition-all duration-300 placeholder:text-neutral-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full border-b border-neutral-300 pb-4 outline-none bg-transparent focus:border-black transition-all duration-300 placeholder:text-neutral-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                                Phone
                            </label>

                            <input
                                type="text"
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full border-b border-neutral-300 pb-4 outline-none bg-transparent focus:border-black transition-all duration-300 placeholder:text-neutral-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                                Position Applying For
                            </label>

                            <select
                                className="w-full border-b border-neutral-600 bg-neutral-900 text-white pb-4 px-2 outline-none focus:border-white transition-all duration-300"
                            >
                                <option className="bg-neutral-900 text-white">Select Position</option>
                                <option className="bg-neutral-900 text-white">Interior Designer</option>
                                <option className="bg-neutral-900 text-white">Architect</option>
                                <option className="bg-neutral-900 text-white">3D Visualizer</option>
                                <option className="bg-neutral-900 text-white">Site Supervisor</option>
                                <option className="bg-neutral-900 text-white">Project Manager</option>
                            </select>
                        </div>

                    </div>

                    {/* Right */}

                    <div className="space-y-10">

                        <div>
                            <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                                Cover Letter
                            </label>

                            <textarea
                                rows={8}
                                placeholder="Tell us about yourself..."
                                className="w-full border border-neutral-300 p-6 outline-none resize-none focus:border-black transition-all duration-300 placeholder:text-neutral-400"
                            />
                        </div>

                        {/* Upload */}

                        <div>

                            <label className="block text-sm uppercase tracking-[0.2em] mb-4">
                                Resume
                            </label>

                            <label className="border border-dashed border-neutral-400 rounded-sm h-44 flex flex-col items-center justify-center cursor-pointer hover:border-black transition">

                                <Upload
                                    size={34}
                                    className="text-neutral-600 mb-4"
                                />

                                <p className="text-neutral-700">
                                    Upload Resume
                                </p>

                                <span className="text-sm text-neutral-400 mt-2">
                                    PDF / DOC / DOCX
                                </span>

                                <input
                                    type="file"
                                    className="hidden"
                                />

                            </label>

                        </div>

                        {/* Button */}

                        <button
                            className="group inline-flex items-center gap-4 border border-black px-8 py-4 uppercase tracking-[0.25em] text-sm hover:bg-black hover:text-white transition-all duration-500"
                        >
                            Submit Application

                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-2 transition-transform duration-300"
                            />
                        </button>

                    </div>

                </form>

            </div>
        </section>
    );
}