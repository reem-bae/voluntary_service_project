

import { useState, useEffect } from "react";
import { createDonation } from "../../service/Donationservice";
import { getProjects } from "../../service/projectservice";
import useAuth from "../../hooks/useAuth"
import { useSearchParams } from "react-router-dom";
export default function Donateform() {
    const [searchParams] = useSearchParams();
    const preselectedProjectId = searchParams.get("projectId")
    const { user } = useAuth()
    const [projects, setprojects] = useState([])

    const [formData, setFormData] = useState({
       project: preselectedProjectId || "",
        amount: "",
        customAmount: "",
        paymentMethod: [],
    });

    useEffect(() => {
         getProjects()
            .then(data => setprojects(data))
            .catch(err => console.error(err));
    }, []);


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => {
                const newArray = checked ? [...prev.paymentMethod, value]
                    : prev.paymentMethod.filter((item) => item !== value);
                return { ...prev, paymentMethod: newArray };
            });
        }
        else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const amountToSend = formData.customAmount || formData.amount;
            if (!amountToSend) return alert("Please select or enter an amount");

            if (formData.paymentMethod.length === 0) {
                return alert("Please select a payment method");
            }
            
            const donationPayload = {
                project: formData.project,
                amount: amountToSend,
                paymentMethod: formData.paymentMethod,
                user: user ? user._id : "Anonymous"
            };
            
            console.log("Donation Payload:", donationPayload);
            await createDonation(donationPayload);
            alert("Donation successful!");
            setFormData({
                project: "Clean water initiative",
                amount: "",
                customAmount: "",
                paymentMethod: [],
            });
        } catch (err) {
            console.error(err);
            alert("Failed to donate");
        }
    };

    return (
        <div className="flex justify-center items-center py-12 px-4 bg-gray-50 min-h-screen">
            <form
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-orange-100 max-w-xl w-full space-y-8 border border-gray-100"
                onSubmit={handleSubmit}
            >
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Select Project</label>
                    <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none appearance-none cursor-pointer"
                    >
                        <option value="">Select a project</option>
                       {
                        projects.map(p=>(
                            <option key={p._id} value={p._id}>{p.title}</option>
                        )
                        )
                       }
                    </select>
                </div>
                <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                        Choose Amount
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["10", "25", "50", "100"].map((amount) => (
                            <label key={amount} className="relative cursor-pointer group">
                                <input
                                    type="radio"
                                    name="amount"
                                    value={amount}
                                    checked={formData.amount === amount}
                                    onChange={handleInputChange}
                                    className="peer sr-only"
                                />
                                <div className="py-3 text-center rounded-xl border-2 border-gray-100 font-black text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all group-hover:border-orange-200">
                                    ${amount}
                                </div>
                            </label>
                        ))}
                    </div>

                    <div className="relative group">
                        <input
                            type="text"
                            name="customAmount"
                            value={formData.customAmount}
                            onChange={handleInputChange}
                            placeholder="Enter custom amount"
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 font-bold text-gray-400">USD</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Payment Method</label>
                    <div className="grid grid-cols-2 gap-4">
                        {["Card", "Mobile"].map((method) => (
                            <label
                                key={method}
                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    name="paymentMethod"
                                    value={method}
                                    checked={formData.paymentMethod.includes(method)}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 accent-orange-600"
                                />
                                <span className="font-bold text-sm text-gray-700">{method}</span>
                            </label>
                        ))}
                    </div>
                    <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl flex items-center gap-3 text-amber-700">
                        <span className="text-lg">⚠️</span>
                        <p className="text-[10px] font-bold uppercase tracking-tight">Payment gateway integration coming soon.</p>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all active:scale-95 transform"
                >
                    Donate Now
                </button>
            </form>
        </div>
    );
}
