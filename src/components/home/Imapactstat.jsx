import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

export default function Impactstt() {
    const [start, setstart] = useState(false);
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentRef = useRef(null);

    // 1. Handle Fetching Data
    useEffect(() => {
        const fetchImpactData = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/admin/stats");
                const data = await res.json();
                
                if (data.stats) {
                    const formattedStats = data.stats
                        .filter(s => s.title !== "Users")
                        .map(s => {
                            const title = s.title.toLowerCase();
                            // FIX: Added || operator
                            const countVal = Number(s.count) || 0;
                            
                            if (title.includes("funds")) return { count: countVal, description: "Funds Raised", suffix: "$" };
                            if (title.includes("projects")) return { count: countVal, description: "Total Projects", suffix: "+" };
                            if (title.includes("activities")) return { count: countVal, description: "Active Events", suffix: "+" };
                            if (title.includes("donation")) return { count: countVal, description: "Donations", suffix: "+" };
                            return { count: countVal, description: s.title, suffix: "" };
                        });
                    setStats(formattedStats);
                }
            } catch (err) {
                console.error("Error fetching stats:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchImpactData();
    }, []);

    // 2. Handle Observer (Only runs after loading is finished)
    useEffect(() => {
        // FIX: Added || operator
        if (loading || !currentRef.current) return;

        const observer = new IntersectionObserver(([ent]) => {
            if (ent.isIntersecting) {
                setstart(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        observer.observe(currentRef.current);
        return () => observer.disconnect();
    }, [loading]); 

    if (loading) {
        return (
            <div className="py-20 bg-gray-900 text-center text-white">
                <div className="animate-pulse">Loading Impact Data...</div>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-[5%]">
                <h2 className="text-center font-bold text-3xl md:text-4xl mb-16">
                    Our Impact So Far
                </h2>
                
                <div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 min-h-[150px]" 
                    ref={currentRef}
                >
                    {stats.map((i, idx) => (
                        <div key={idx} className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                                {start ? (
                                    <CountUp 
                                        end={i.count} 
                                        prefix={i.suffix === "$" ? "$" : ""} 
                                        suffix={i.suffix !== "$" ? i.suffix : ""} 
                                        duration={2.5} 
                                    />
                                ) : (
                                    <span>0{i.suffix}</span>
                                )}
                            </div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                                {i.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}