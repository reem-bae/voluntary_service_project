

import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="flex flex-col gap-24 py-16 px-6 md:px-16 max-w-7xl mx-auto">
           
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-black text-4xl md:text-5xl mb-8 text-gray-900">About <span className="text-orange-600">US</span></h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    We are a community-based volunteer service organization
                    operating locally to address social, environmental, and humanitarian needs.
                    Our work focuses on creating meaningful change by organizing structured
                    volunteer activities and enabling public support through transparent systems.
                    Currently, our organization operates at a growing stage, strengthening its
                    internal systems, expanding volunteer participation, and building partnerships
                    to increase impact.
                </p>
            </div>

           
            <div className="flex gap-12 flex-col md:flex-row items-center bg-gray-50 rounded-[3rem] p-8 md:p-16">
                <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-inner">
                    <img src="public\heropicture.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="font-black text-3xl text-gray-900">Our Mission & Vison</h2>
                    <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-orange-500 pl-6">
                        Our mission is to empower communities by connecting motivated volunteers,
                        resources, and opportunities through an organized and transparent system.
                        Our vision is to build a future where community service is accessible,
                        collaborative, and impactful — enabling individuals to contribute their time and skills
                        toward sustainable social development.
                    </p>
                </div>
            </div>

          
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Our Focus Area</h1>
                    <ul className="space-y-4">
                        {[
                            "🤝 Organize and manage volunteer-led activities",
                            "📋 Publish and coordinate community service initiatives",
                            "🧑‍🤝‍🧑 Engage registered volunteers and members",
                            "❤️ Enable public support through donations",
                            "📊 Track activities and measure impact"
                        ].map((text, i) => (
                            <li key={i} className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:translate-x-2 transition-transform cursor-default">
                                <span className="text-gray-800 font-medium">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                

                <div className="bg-orange-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-orange-200 space-y-8">
                    <p className="text-lg opacity-90 italic font-light leading-relaxed">
                        "Whether you want to volunteer your time, support ongoing initiatives,
                        or simply learn more, we welcome everyone to be part of our journey
                        toward positive change."
                    </p>
                    <div className="flex flex-col gap-4">
                        <Link to="/register">
                            <button className="w-full bg-white text-orange-600 font-black py-4 rounded-xl hover:bg-gray-100 transition-colors">Join as Volunteer</button>
                        </Link>
                        <div className="grid grid-cols-2 gap-4">
                            <Link to="/volunteer">
                                <button className="w-full bg-orange-700 text-white font-bold py-3 rounded-xl hover:bg-orange-800 transition-colors">View Activities</button>
                            </Link>
                            <Link to="/donate">
                                <button className="w-full bg-orange-700 text-white font-bold py-3 rounded-xl hover:bg-orange-800 transition-colors">Donate</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 