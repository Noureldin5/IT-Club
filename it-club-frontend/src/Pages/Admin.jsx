import React, { useEffect, useState } from "react";
import { getApplications } from "../services/api";

export default function Admin() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await getApplications(token);
      setApplications(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-[#4B0082] mb-6">Submitted Applications</h1>
      {applications.map((app) => (
        <div key={app.id} className="p-4 border rounded shadow mb-2">
          <h2 className="text-xl font-semibold">{app.fullName}</h2>
          <p><strong>Email:</strong> {app.email}</p>
          <p><strong>Reason:</strong> {app.reason}</p>
          <p><strong>Skills:</strong> {app.skills}</p>
        </div>
      ))}
    </div>
  );
}
