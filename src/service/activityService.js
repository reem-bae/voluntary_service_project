

const API_URL = "http://localhost:5000/api/activities";

export const getActivities = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch activities");
  }

  return await response.json();
};

export const createActivity = async (activityData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(activityData),
  });

  if (!response.ok) {
    throw new Error("Failed to create activity");
  }

  return await response.json();
};


export const deleteActivity = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:5000/api/activities/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to delete activity");
  return res.json();
};


export const updateActivity = async (id, updatedData) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`/api/activities/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Update failed");
  }

  return data;
};


export const getApplications = async () => {
  const res = await fetch("/api/applications");
  if (!res.ok) throw new Error("Failed to fetch applications");
  return res.json();
};


export const updateApplicationStatus = async (id, status, token) => {
  const res = await fetch(`/api/applications/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Failed to update application");
  return res.json();
};

export const getMyActivitiesApi = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/api/users/my/activities", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) throw new Error("Failed to fetch activities");
    return response.json();
};