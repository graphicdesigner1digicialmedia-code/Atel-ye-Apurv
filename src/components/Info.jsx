import {
    FaTelegramPlane,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";

export default function ContactInfo() {
    return (
        <section className="bg-black py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-12 sm:gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">

                    {/* Email */}
                    <div className="flex flex-col items-center text-center">
                        <FaTelegramPlane className="mb-5 text-2xl text-white sm:text-3xl" />

                        <h3 className="text-base font-semibold text-white sm:text-lg lg:text-xl break-all">
                            info@inspatia.in
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 sm:text-base lg:text-lg">
                            Email
                        </p>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-center text-center">
                        <FaMapMarkerAlt className="mb-5 text-2xl text-white sm:text-3xl" />

                        <h3 className="max-w-xs text-base font-semibold leading-relaxed text-white sm:max-w-sm sm:text-lg lg:max-w-md lg:text-xl">
                            46, Satya Niketan,
                            <br className="sm:hidden" />
                            {" "}New Delhi
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 sm:text-base lg:text-lg">
                            Address
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center text-center">
                        <FaPhoneAlt className="mb-5 text-2xl text-white sm:text-3xl" />

                        <h3 className="text-base font-semibold text-white sm:text-lg lg:text-xl">
                            (+91) 98995 44995
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 sm:text-base lg:text-lg">
                            Phone
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}