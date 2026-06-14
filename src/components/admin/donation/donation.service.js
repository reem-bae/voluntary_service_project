const API_URL = "http://localhost:5000/api/donations";

export const getAdminDonations = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch donations");
  }

  return res.json();
};

