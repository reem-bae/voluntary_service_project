import { Outlet } from "react-router-dom";
import Usernavbar from "../User/usernavbar";
import Footer from "../common/Footer";


export default function Userlayout() {

    return <div>
        <div>
            <Usernavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    </div>
}