

import UserRow from "./userrow";
import { faUsers, faFilter, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UsersTable = ({ users, onDeleteSuccess }) => {

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="px-8 py-6 border-b border-gray-50 bg-gray-50/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xs">
                <FontAwesomeIcon icon={faUsers} />
            </div>
            <div>
                <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">Platform Users</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                    Showing {users.length} total members
                </p>
            </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">#</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Identity</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Contact</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Role</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-right pr-12">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {users.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-24 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 text-xl">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                        No users matching your criteria were found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <UserRow key={user._id} user={user} index={index} onDeleteSuccess={onDeleteSuccess}/>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-4 bg-gray-50/50 border-t border-gray-50">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">
              Security Audit Log: Last updated {new Date().toLocaleTimeString()}
          </p>
      </div>
    </div>
  );
};

export default UsersTable;