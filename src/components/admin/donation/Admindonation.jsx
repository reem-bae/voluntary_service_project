


import { useEffect, useState } from "react";
import DonationTable from "./donationtable";
import DonationStats from "./donationstatus";
import { getAdminDonations } from "./donation.service";
import { faCoins, faDownload, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminDonation() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const data = await getAdminDonations();
      setDonations(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] p-6 md:p-10 lg:p-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center text-sm">
              <FontAwesomeIcon icon={faCoins} />
            </div>
            Donations Management
          </h1>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mt-2 ml-13">
            Financial Oversight & Contribution Tracking
          </p>
        </div>

      
      </div>

      <div className="mb-10">
        <DonationStats donations={donations} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Detailed Transaction Log</h3>
            <span className="text-[10px] font-bold text-gray-400">Total Records: {donations.length}</span>
        </div>
        <DonationTable donations={donations} />
      </div>
    </div>
  );
}