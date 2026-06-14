

  import { useEffect, useState } from "react";
import UsersTable from "./usertable";
import { getAllUsers } from "../../../service/userservice"; // Import the service


export default function Adminusers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const data = await getAllUsers();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Could not load users. Ensure you are logged in as admin.");
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.name?.toLowerCase().includes(search.toLowerCase()) ||
            user.email?.toLowerCase().includes(search.toLowerCase());

        const matchesRole =
            roleFilter === "all" || user.role === roleFilter;

        return matchesSearch && matchesRole;
    });

    if (loading) return <div className="p-20 text-center font-black uppercase tracking-widest text-gray-400">Loading Directory...</div>;
    if (error) return <div className="p-20 text-center text-rose-500 font-bold">{error}</div>;
  const handleDeleteSuccess = (deletedId) => {
  setUsers(users.filter(u => u._id !== deletedId));
};
    return (
        <div className="min-h-screen bg-[#fcfcfd] p-6 md:p-10 lg:p-12">

            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                <UsersTable users={filteredUsers} onDeleteSuccess={handleDeleteSuccess}/>
            </div>
        </div>
    );
}