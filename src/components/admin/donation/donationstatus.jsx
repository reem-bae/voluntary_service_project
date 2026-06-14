

import { faCoins, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DonationStats({ donations }) {
    const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
       
            <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-green-200 transition-colors">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faCoins} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Total Donations</p>
                    <h2 className="text-2xl font-black text-gray-900">${totalAmount.toLocaleString()}</h2>
                </div>
            </div>
            <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-blue-200 transition-colors">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faFileLines} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Total Records</p>
                    <h2 className="text-2xl font-black text-gray-900">{donations.length}</h2>
                </div>
            </div>
        </div>
    );
}