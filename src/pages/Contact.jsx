import { faFacebookF, faInstagram, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    const [formdata, setformdata] = useState({ name: "", email: "", subject: "", message: "" })
    const [condition, setcondition] = useState('')

    function handlechange(e) {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    function handlesubmit(e) {
        e.preventDefault()
        if (!formdata.name.trim() || !formdata.email.trim() || !formdata.message.trim()) {
            setcondition("Please fill the required field")
            return
        }
        if (!formdata.email.includes('@')) {
            setcondition("Please Enter Valid email")
            return
        }
        setcondition("Thank you for contacting us! Your message has been sent successfully. We will get back to you shortly.")
        setformdata({ name: "", email: "", subject: "", message: "" }) // Reset form properly
        setTimeout(() => setcondition(""), 5000)
    }

    const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm font-medium";

    return (
        <div className="min-h-screen bg-[#fcfcfd] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">Contact Us</h1>
                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                    We'd love to hear from you. Whether you have questions
                    about our programs, volunteering, or donations, feel free to
                    reach out and we'll get back to you as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <form onSubmit={handlesubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                <input type="text" name="name" value={formdata.name} onChange={handlechange} className={inputClass} placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                                <input type="text" name="email" value={formdata.email} onChange={handlechange} className={inputClass} placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Inquiry Type</label>
                            <select className={inputClass}>
                                <option>General Inquiry</option>
                                <option>Volunteer Opportunities</option>
                                <option>Donation Support</option>
                                <option>Partnership & Collaboration</option>
                                <option>Technical Support</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                            <textarea rows="4" placeholder="Your Message" name="message" value={formdata.message} onChange={handlechange} className={`${inputClass} resize-none`} />
                        </div>

                        <button className="w-full bg-gray-900 text-white font-black py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-gray-200">
                            Send Message
                        </button>

                        {condition && (
                            <p className={`text-sm font-bold p-4 rounded-xl ${condition.includes('Thank') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                                {condition}
                            </p>
                        )}
                    </form>
                </div>
                <div className="space-y-12 lg:pt-6">
                    <div className="grid grid-cols-1 gap-8">
                        {[
                            { icon: faPhone, label: "Phone Number", val: "+251946447155", href: "tel:+251946447155", color: "text-blue-600", bg: "bg-blue-50" },
                            { icon: faEnvelope, label: "Email", val: "Hopeforall1517@gmail.com", href: "mailto:Hopeforall1517@gmail.com", color: "text-orange-600", bg: "bg-orange-50" },
                            { icon: faLocationDot, label: "Address", val: "Addis Ababa, Ethiopia", href: "https://www.google.com/maps/search/?api=1&query=Addis+Ababa,+Ethiopia", color: "text-green-600", bg: "bg-green-50" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform`}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">{item.label}</p>
                                    <p><a href={item.href} target={item.label === "Address" ? "_blank" : "_self"} rel="noreferrer" className="flex items-center gap-6 group cursor-pointer" >{item.val}</a></p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Social Media</h3>
                        <div className="flex gap-4">
                            {[ {icon: faTelegram,url:"https://t.me/Ruhi_155"},
                                { icon: faInstagram, url: "https://www.instagram.com/reemo_155_?igsh=MWY1enNuNnV3MzF4cg%3D%3D" },
                                { icon: faLinkedin, url: "https://www.linkedin.com/in/rahmet-habtamu-30490b371/" }
                            ].map((i, index) => (
                                <button key={index} className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-200 hover:shadow-md transition-all" >
                                    <a href={i.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > <FontAwesomeIcon icon={i.icon} /></a>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/register" className="flex-1 bg-orange-50 text-orange-600 text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-orange-100 transition-colors">
                            Join as a Volunteer
                        </Link>
                        <Link to="/donate" className="flex-1 bg-green-50 text-green-700 text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-green-100 transition-colors">
                            Support Our Work
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}