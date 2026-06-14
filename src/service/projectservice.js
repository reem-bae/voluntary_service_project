const API = "http://localhost:5000/api/projects/all";
const API1 = "http://localhost:5000/api/projects";
export const getProjects = async () => {
  const res = await fetch(API);
  return res.json();
};
export const createProject = async (data) => {
  const token = localStorage.getItem("token");

  const isFormData = data instanceof FormData;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(API1, {
    method: "POST",
    headers: headers,
    // Don't stringify if it's FormData
    body: isFormData ? data : JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
};
export const deleteProject = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API1}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
