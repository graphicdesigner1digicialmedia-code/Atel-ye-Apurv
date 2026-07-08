import {
    FaTelegramPlane,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";

export default function ContactInfo() {
    return (
        <section className="bg-[#000000] py-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <FaTelegramPlane className="text-white text-[28px] mb-6" />
                        <h3 className="text-white text-[18px] font-semibold">
                            info@inspatia.in
                        </h3>
                        <p className="text-[#9A9A9A] text-[18px] mt-2">Email</p>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-center">
                        <FaMapMarkerAlt className="text-white text-[28px] mb-6" />
                        <h3 className="text-white text-[18px] font-semibold">
                            46, Satya Niketan, New Delhi
                        </h3>
                        <p className="text-[#9A9A9A] text-[18px] mt-2">Address</p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center">
                        <FaPhoneAlt className="text-white text-[28px] mb-6" />
                        <h3 className="text-white text-[18px] font-semibold">
                            (+91) 9899544995
                        </h3>
                        <p className="text-[#9A9A9A] text-[18px] mt-2">Phone</p>
                    </div>
                </div>
            </div>
        </section>
    );
}