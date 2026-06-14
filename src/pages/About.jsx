
    import { Link } from "react-router-dom";
import { faBullseye, faEye, faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    const focusAreas = [
        "Organize and manage volunteer-led activities",
        "Publish and coordinate community service initiatives",
        "Engage registered volunteers and members",
        "Enable public support through donations",
        "Track activities and measure impact"
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 space-y-24">

            <section className="text-center max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                    About <span className="text-orange-600">Us</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We are a community-based volunteer service organization operating locally to address social, 
                    environmental, and humanitarian needs. Our work focuses on creating meaningful 
                    change by organizing structured volunteer activities and enabling public support through 
                    transparent systems. Currently, our organization is strengthening its internal 
                    systems and expanding volunteer participation to increase impact.
                </p>
            </section>


            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-3xl h-80 md:h-112.5 flex items-center justify-center overflow-hidden shadow-inner">
                    <img  src="\public\herobgimage.jpg"  alt="impact imagery" className="h-full"/>
                </div>
                
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        Our Mission & Vision
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-orange-100 p-3 rounded-xl h-fit">
                                <FontAwesomeIcon icon={faBullseye} className="text-orange-600 text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Our Mission</h3>
                                <p className="text-gray-600">To empower communities by connecting motivated volunteers, resources, and opportunities through an organized and transparent system.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-orange-100 p-3 rounded-xl h-fit">
                                <FontAwesomeIcon icon={faEye} className="text-orange-600 text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Our Vision</h3>
                                <p className="text-gray-600">To build a future where community service is accessible, collaborative, and impactful — enabling individuals to contribute their skills toward sustainable development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

     
            <section className="bg-orange-600 rounded-[3rem] p-10 md:p-16 text-white shadow-xl">
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold leading-tight">Our Core Focus Areas</h2>
                        <p className="mt-4 text-orange-100">The specific pillars that guide our daily operations and community engagement.</p>
                    </div>
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                        {focusAreas.map((area, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-orange-200 mt-1" />
                                <span className="font-medium">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-center py-12 border-t border-gray-100 space-y-8">
                <p className="text-gray-500 max-w-2xl mx-auto italic">
                    Whether you want to volunteer your time, support ongoing initiatives, or simply learn more, 
                    we welcome everyone to be part of our journey toward positive change.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/register">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                            Join as Volunteer
                        </button>
                    </Link>
                    <Link to="/volunteer">
                        <button className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-all shadow-sm">
                            View Activities
                        </button>
                    </Link>
                    <Link to="/donate">
                        <button className="text-gray-700 hover:text-orange-600 font-bold px-8 py-3 group">
                            Donate <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}