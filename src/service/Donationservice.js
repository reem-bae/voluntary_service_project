const API_URL = "http://localhost:5000/api/donations"; // backend donation route

export const createDonation = async (donationPayload) => {
  
  const token = localStorage.getItem("token");
  
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
       ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(donationPayload),
  });

  if (!res.ok) {
        const errorText = await res.text();
    console.error("Status:", res.status);
    console.error("Response text:", errorText);
    throw new Error("Failed to create donation");
  }

  return res.json();
};

export const getMyDonations = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/user/my/donations", {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(errorText);
    throw new Error("Failed to fetch my donations");
  }

  return res.json();
};

export const getAdminDonations = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch("/api/donations/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch admin donations");
  return res.json();
};
