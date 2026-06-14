
import { Outlet } from "react-router-dom";
import Adminnavbar from "../admin/Adminnavbar";
import Footer from "../common/Footer";

export default function Adminlayout(){

    return <div>
        <div>
            <Adminnavbar />
            <main>

            <Outlet />
            </main>
            <Footer />
        </div>
    </div>
}