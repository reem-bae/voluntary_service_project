import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Project";
import VolunteerActivity from "../pages/VolunterActivity";
import Donate from "../pages/Donate";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Adminlayout from "../components/layout/Adminlayout";
import AdminProjects from "../components/admin/projects/Adminprojects";
import AdminDonation from "../components/admin/donation/Admindonation";
import Register from "../pages/Register";
import AdminRoute from "./AdminRoute";
import Projectdetail from "../components/projects/Projectdetail";
import Dashboard from "../components/admin/dashboard/dashboard";
import AdminVolunteer from "../components/admin/volunteer/Adminvolunteer";
import Adminusers from "../components/admin/users/Adminusers";
import PublicLayout from "../components/layout/Publiclayout";
import Userdashboard from "../components/User/userdashboard";
import Mydonation from "../components/User/mydonation";
import Myvolunteractivity from "../components/User/myvolunteeractivity";
import Userprofile from "../components/User/userprofile";
import Notification from "../components/User/notification";
import Account from "../components/User/accountseeting";
import PrivateRoute from "./PrivateRoute";
import Userlayout from "../components/layout/Userlayout";
import ScrollToTop from "../Scrolltotop";
import useAuth from "../hooks/useAuth";
export default function AppRoute() {
  const {user} = useAuth()
  return <>
   <ScrollToTop />

    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/volunteer" element={<VolunteerActivity />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/projectdetail/:id" element={<Projectdetail />} />
      </Route>
  

      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<Adminlayout />}>

          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="volunteer" element={<AdminVolunteer />} />
          <Route path="donation" element={<AdminDonation />} />
          <Route path="users" element={<Adminusers />} />

        </Route>
      </Route>


      <Route element={<PrivateRoute />}>
        <Route path="/User" element={<Userlayout />}>

          <Route index element={<Userdashboard />} />
          <Route path="donation" element={<Mydonation />} />
          <Route path="activity" element={<Myvolunteractivity />} />
          <Route path="notification" element={<Notification />} />
          <Route path="seeting" element={<Account />} />
          <Route path="userprofile" element={<Userprofile />} />
          <Route path="donate" element={<Donate user={user}/>} />
        </Route>
      </Route>
    </Routes>
</>


  
}