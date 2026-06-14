

export const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email, password}),
  });

let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("Server did not return JSON");
  }

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }


  localStorage.setItem("token",data.token)
  return data;
};
