

import {  faInstagram, faLinkedin, faTelegram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,  faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-[5%]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Hope For All</h3>
                    <p className="text-gray-600 leading-relaxed">Connecting volunteers with impactful activities to create sustainable social change.</p>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
                    <ul className="space-y-4 text-gray-600">
                        <li><Link to="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
                        <li><Link to="/projects" className="hover:text-orange-600 transition-colors">Projects</Link></li>
                        <li><Link to="/volunteer" className="hover:text-orange-600 transition-colors">Volunteer</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faSquarePhone} className="text-orange-600" />
                            <a href="tel:+251946447155">+251946447155</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faEnvelope} className="text-orange-600" />
                            <a href="mailto:Hopeforall1517@gmail.com">Hopeforall1517@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Follow Us</h4>
                    <div className="flex gap-4">
                        {[  {  icon: faTelegram,url:"https://t.me/Ruhi_155"},
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
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                <p>© 2025 Hope For All. All rights reserved.</p>
            </div>
        </footer>
    );
}