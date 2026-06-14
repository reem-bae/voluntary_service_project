import Donateform from "../components/donate/Donateform";

export default function Donate(){
   

    return <div className="mt-[10%] md:mt-12 text-center">
        <h1 className="font-black text-xl md:text-5xl mb-8 text-gray-900 mt-10">Support Our Mission</h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-20">Your donation helps us continue our
         volunteer activities and bring positive change to communities.
        </p>
        <Donateform />
    </div>
}