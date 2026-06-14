
  import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteUserApi } from "../../../service/userservice";
const UserActions = ({ user, onDeleteSuccess }) => {


  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUserApi(user._id);
        alert("User deleted successfully");
        onDeleteSuccess(user._id); 
      } catch (err) {
        alert(err.message);
      }
    }
  };
if (user.role === 'admin') {
    return <span className="text-[9px] font-bold text-gray-300 uppercase italic">Protected</span>;
  }
  const btnBase = "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 shadow-sm border";

  return (
    <div className="flex items-center gap-2">

      <button
        onClick={handleDelete}
        title="Delete User"
        className={`${btnBase} bg-white border-gray-100 text-rose-600 hover:bg-rose-50 hover:border-rose-100`}
      >
        <FontAwesomeIcon icon={faTrashAlt} className="text-xs" />
      </button>
    </div>
  );
};

export default UserActions;