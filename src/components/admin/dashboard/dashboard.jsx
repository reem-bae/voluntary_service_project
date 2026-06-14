import { useEffect, useState } from "react";
import DashboardChart from "./dashboardchart";
import Quicklink from "./quicklink";
import Statcard from "./statcard";

export default function Dashboard() {
    const [data, setData] = useState({ stats: [], donationsData: [], volunteersData: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/admin/stats", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                });
                const result = await res.json();
                setData(result);
            } catch (err) {
                console.error("Dashboard fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    if (loading) return <div className="p-20 text-center font-black uppercase tracking-widest text-gray-400">Loading Stats...</div>;

    return (
        <div className="min-h-screen bg-[#fcfcfd] p-4 md:p-8 lg:p-12">
            <div className="mb-10">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">Admin Dashboard</h1>
                <p className="text-gray-500 font-medium mt-1">Real-time system overview.</p>
            </div>
            <div className="mb-8">
                <Statcard stats={data.stats} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
                <div className="xl:col-span-3 space-y-8">
                    <div className="bg-white p-2 rounded-[2.5rem] border border-gray-100 shadow-sm">
                        <DashboardChart 
                            donationsData={data.donationsData} 
                            volunteersData={data.volunteersData} 
                        />
                    </div>
                    <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
                        <Quicklink />
                    </div>
                </div>
            </div>
        </div>
    );
}