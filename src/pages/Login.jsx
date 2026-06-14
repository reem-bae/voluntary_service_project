
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"; // Changed faRoadLock to faLock for standard UI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../service/authService";


export default function Login() {
    const { login } = useAuth();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
async function handleSubmit(e) {
    e.preventDefault();
    try {
        const userData = await loginUser(email, password); 
        login(userData); 
        const pendingActivity = localStorage.getItem("pendingActivityId");

        setTimeout(() => {
            if (userData.role === "admin") {
                navigate("/admin");
            } else if (pendingActivity) {
               
                navigate("/volunteer"); 
            } else {
                navigate("/User"); 
            }
        }, 500);
  
    } catch (error) {
        alert(error.message);
    }
}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 my-5">
            <div className="max-w-4xl w-full flex bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
                <div className="hidden md:block w-1/2 bg-orange-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-orange-700 opacity-90"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center p-12 text-white">
                        <h2 className="text-4xl font-black leading-tight mb-6">Welcome Back to Hope for All</h2>
                        <p className="text-orange-100 text-lg">Log in to manage your activities, track your impact, and stay connected with the community.</p>
                    </div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-16">
                    <div className="text-center md:text-left mb-10">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Login</h1>
                        <p className="text-gray-500 mt-2 font-medium">Please enter your details to continue.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Password</label>
                             
                            </div>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder="Enter your Password"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-lg hover:bg-orange-600 transition-all active:scale-95 transform mt-4"
                        >
                            Login
                        </button>

                        <p className="text-center text-gray-500 font-bold text-sm">
                            Don't have an account? <Link to="/register" className="text-orange-600 hover:underline ml-1">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}