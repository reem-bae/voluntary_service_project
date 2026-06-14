
import { useState, useEffect } from "react"
import { useRef } from "react"
import CountUp from "react-countup";

   export default function Statcard({ stats }) {
    const [start, setstart] = useState(false);
    const currentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([ent]) => {
            if (ent.isIntersecting) {
                setstart(true); 
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (currentRef.current) observer.observe(currentRef.current);
        return () => observer.disconnect();
    }, []);

    if (!stats || stats.length === 0) {
        return <div className="grid grid-cols-4 gap-6 py-8">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-4xl"></div>
            ))}
        </div>;
    }

    return (
        <div className="w-full py-8" ref={currentRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-baseline gap-1">
                                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                                    {start ? <CountUp end={item.count || 0} duration={2} /> : "0"}
                                </h2>
                                <span className="text-orange-600 font-black text-xl">{item.icon}</span>
                            </div>
                            <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-gray-400">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}