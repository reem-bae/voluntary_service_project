

import { useEffect, useState } from "react"
import { getMyDonations } from "../../service/Donationservice";
export default function Mydonation() {
    const [donation, setdonation] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
       const getDonations = async () => {
        const data = await getMyDonations();
        
        console.log("Data received in UI:", data); 
        setdonation(data.donationsCount || []); 
        setTotal(data.totalDonated || 0);
    };
    getDonations();
    }, []);

  if (!donation.length) return <p>No donations yet</p>;

    return (
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden my-10">
            <div className="px-8 py-6 border-b border-gray-50">
                <h2 className="text-xl font-black text-gray-900">My Donation History</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50/50">
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Project</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Amount</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Type</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Date</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-50">
                        {donation.map((don, index) => (
                            <tr key={index} className="hover:bg-gray-50/30 transition-colors group">
                                <td className="px-8 py-5 font-black text-gray-900 text-sm group-hover:text-orange-600">{don.project.title}</td>
                                <td className="px-8 py-5 font-bold text-gray-700 text-sm">${don.amount}</td>
                                <td className="px-8 py-5">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-lg">
                                        {don.paymentMethod}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-sm font-bold text-gray-500">{don.createdAt ? new Date(don.createdAt).toLocaleDateString(): "No Date"}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}