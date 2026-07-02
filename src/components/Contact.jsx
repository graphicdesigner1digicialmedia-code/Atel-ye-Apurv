const contactData = [
    ["info@inspatia.in", "Email"],
    ["46, Satya Niketan, New Delhi", "Address"],
    ["(+91) 9899544995", "Phone"],
];

const Contact = () => {
    return (
        <section className="grid lg:grid-cols-3 border-t border-white/10">
            {contactData.map(([title, label]) => (
                <div
                    key={label}
                    className="py-16 px-5 text-center border-r border-white/10 hover:bg-white/5 transition"
                >
                    <h6>{title}</h6>
                    <p>{label}</p>
                </div>
            ))}
        </section>
    );
};

export default Contact;