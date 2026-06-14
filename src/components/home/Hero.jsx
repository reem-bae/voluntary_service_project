

  import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-orange-50 to-white py-20 px-[5%]">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                    Make a Difference Through <br/>
                    <span className="text-orange-600">Meaningful Activities</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                    Join our community of volunteers working together to support local initiatives and create lasting social impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: "Join as Volunteer", text: "Register to participate in activities.", link: "/register" },
                        { title: "View Activities", text: "Explore opportunities that match interests.", link: "/volunteer" },
                        { title: "Donate", text: "Support us by contributing resources.", link: "/donate" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                            <p className="text-gray-500 mb-6">{item.text}</p>
                            <Link to={item.link} className="text-orange-600 font-bold inline-flex items-center group-hover:gap-2 transition-all">
                                View More <span className="ml-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-gray-500 font-medium">
                    <span className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-green-500"/> Community-driven</span>
                    <span className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-green-500"/> Trusted organization</span>
                    <span className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-green-500"/> Real impact</span>
                </div>
            </div>
        </section>
    );
}