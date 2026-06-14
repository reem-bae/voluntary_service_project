import { useState } from "react";
import { createActivity } from "../../../services/activityService";
import { useAuth } from "../../../context/AuthContext";

export default function ActivityForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    location: "",
    skills: "",
    maxVolunteers: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createActivity(
        { ...formData, skills: formData.skills.split(",") },
        user.token
      );
      alert("Activity created successfully!");
      setFormData({
        title: "",
        description: "",
        category: "",
        date: "",
        location: "",
        skills: "",
        maxVolunteers: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create activity");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Activity</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma separated)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="maxVolunteers"
          value={formData.maxVolunteers}
          onChange={handleChange}
          placeholder="Max Volunteers"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Activity"}
        </button>
      </form>
    </div>
  );
}
