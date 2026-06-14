

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register() {
    const [name, setinput] = useState('')
    const [condition, setcondition] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [reset, setreset] = useState(false)

    const phoneregx = /^[0-9]{9,15}$/
    const passwordregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    async function handlesubmit(e) {
        e.preventDefault()

        if (!name.trim()) {
            setcondition("Enter your name please")
            return
        }
        if (!email.trim() || !email.includes('@')) {
            setcondition("Enter valid email")
            return
        }
        if (password.length < 8) {
            setcondition("Enter At Least 8 Characters")
            return
        }
        if (!passwordregx.test(password)) {
            setcondition("Password must contain Uppercase, Lowercase, Number and Special Character")
            return
        }
        if (password !== confirmpassword) {
            setcondition("Passwords do not match")
            return
        }
        if (!phoneregx.test(phonenumber)) {
            setcondition("Enter valid Phone number")
            return
        }
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "content-type": "application/json" }
                ,
                body: JSON.stringify({ name, email, password, phonenumber })
            })

            const data = await response.json()

            if (!response.ok) {
                setcondition(data.message || "Register fail")
            }
            setcondition("Success! Your account has been created.")
    alert("Registration Successful! You can now login.")

        } catch (e) {
            setcondition("error happen")
        }

        setreset(true)
        setinput("")
        setemail("")
        setpassword("")
        setconfirmpassword("")
        setphonenumber("")

       
        setTimeout(() => setcondition(""), 5000)
    }

    const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all placeholder:text-gray-300";
    const labelClass = "text-xs font-black uppercase tracking-widest text-gray-400 ml-1";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full flex bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">

           
                <div className="hidden lg:block w-5/12 bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 to-transparent z-0"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-12 text-white">
                        <div>
                            <p className="font-black text-2xl tracking-tighter">HOPE <span className="text-orange-500">FOR ALL</span></p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-black leading-tight mb-6">Create an Account</h2>
                            <p className="text-gray-400 text-lg">Join us to support projects, volunteer, and make a real impact in our community.</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
                            <div className="h-1 w-2 bg-gray-700 rounded-full"></div>
                            <div className="h-1 w-2 bg-gray-700 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Register</h1>
                        <p className="text-gray-500 mt-2 font-medium">Step into a world of meaningful change.</p>
                    </div>

                    <form onSubmit={handlesubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="space-y-2">
                                <label className={labelClass}>Full Name</label>
                                <input type="text" value={name} onChange={(e) => setinput(e.target.value)} className={inputClass} placeholder="Abebe Bikila" />
                            </div>

                            <div className="space-y-2">
                                <label className={labelClass}>Phone number</label>
                                <input type="tel" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} className={inputClass} placeholder="0911223344" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className={labelClass}>Email Address</label>
                            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className={inputClass} placeholder="email@example.com" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="space-y-2">
                                <label className={labelClass}>Password</label>
                                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className={inputClass} placeholder="••••••••" />
                            </div>

                            <div className="space-y-2">
                                <label className={labelClass}>Confirm Password</label>
                                <input type="password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} className={inputClass} placeholder="••••••••" />
                            </div>
                        </div>

                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
                            At least 8 Characters with mixed cases & symbols
                        </p>

                        {condition && (
                            <div className={`p-4 rounded-2xl text-sm font-bold border ${condition.includes("Success") ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-700"}`}>
                                {condition}
                            </div>
                        )}


                        <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-lg hover:bg-orange-600 transition-all active:scale-95 transform mt-4">
                            Register
                        </button>

                        <p className="text-center text-gray-500 font-bold text-sm mt-6">
                            Already have an account? <Link to="/login" className="text-orange-600 hover:underline ml-1">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}