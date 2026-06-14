
import UserActions from "./useraction";
import { faEnvelope, faPhone, faUserShield, faUserGraduate, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserRow = ({ user, index, onDeleteSuccess }) => {
  const getRoleConfig = (role) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return { bg: 'bg-rose-50', text: 'text-rose-600', icon: faUserShield };
      case 'volunteer':
        return { bg: 'bg-green-50', text: 'text-green-600', icon: faUserGraduate };
      default:
        return { bg: 'bg-blue-50', text: 'text-blue-600', icon: faUser };
    }
  };

  const roleConfig = getRoleConfig(user.role);

  return (
    <tr className="group hover:bg-gray-50/50 transition-all duration-200 border-b border-gray-50">

      <td className="p-5 text-center">
        <span className="text-[10px] font-black text-gray-300">#{index + 1}</span>
      </td>

      <td className="p-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${roleConfig.bg} ${roleConfig.text} flex items-center justify-center font-black text-sm shadow-sm`}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="font-black text-gray-900 text-sm tracking-tight">{user.name}</span>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
               <FontAwesomeIcon icon={faEnvelope} className="text-[9px]" />
               {user.email}
            </div>
          </div>
        </div>
      </td>

      {/* Contact */}
      <td className="p-5">
        <div className="flex items-center gap-2 text-gray-600 font-bold text-xs">
          <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] text-gray-400">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          {user.phonenumber || "N/A"}
        </div>
      </td>
      <td className="p-5">
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${roleConfig.bg} ${roleConfig.text}`}>
          <FontAwesomeIcon icon={roleConfig.icon} />
          {user.role}
        </span>
      </td>
      <td className="p-5 text-right">
        <div className="flex justify-end pr-2">
          <UserActions user={user} onDeleteSuccess={onDeleteSuccess} />
        </div>
      </td>
    </tr>
  );
};

export default UserRow;