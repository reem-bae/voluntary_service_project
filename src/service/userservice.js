
export const getAllUsers = async () => {
    const token = localStorage.getItem("token"); 
    const response = await fetch("http://localhost:5000/api/user/all", { 
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

export const deleteUserApi = async (userId) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete user");
  }
  return response.json();
};