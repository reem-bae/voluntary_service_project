



import { faCreditCard, faMobileScreenButton, faUserCircle, faCalendarAlt, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DonationTable({ donations }) {
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">

      <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-white">
          <div>
              <h2 className="text-xl font-black text-gray-900">Donation Records</h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Real-time contribution tracking</p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
              <FontAwesomeIcon icon={faCoins} />
              Verified Transactions
          </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Donor</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Amount</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-left">Project</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Method</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {donations.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50/30 transition-colors group">
                
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </div>
                    <span className="font-black text-gray-900 text-sm">{d.donor || "Anonymous"}</span>
                  </div>
                </td>

                <td className="px-8 py-5">
                  <span className="text-sm font-black text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                    ${d.amount.toLocaleString()}
                  </span>
                </td>

              
                <td className="px-8 py-5">
                  <p className="text-sm font-bold text-gray-700 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                    {typeof d.project === 'object' ? d.project?.title : d.project || "General Fund"}
                  </p>
                </td>

                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    {d.paymentMethod.map((method, idx) => (
                      <span key={idx} className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                        <FontAwesomeIcon 
                            icon={method.toLowerCase().includes('card') ? faCreditCard : faMobileScreenButton} 
                            className={method.toLowerCase().includes('card') ? 'text-blue-500' : 'text-green-500'}
                        />
                        {method}
                      </span>
                    ))}
                  </div>
                </td>

     
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-xs text-gray-300" />
                    {new Date(d.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-5 bg-gray-50/30 flex justify-end">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Showing {donations.length} total donations
          </p>
      </div>
    </div>
  );
}