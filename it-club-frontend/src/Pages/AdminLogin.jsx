import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ username, password });
            localStorage.setItem("token", res.data.token);
            navigate("/admin");
        } catch {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="block w-full mb-4 p-2 border" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full mb-4 p-2 border" />
            <button type="submit" className="bg-[#4B0082] text-white px-4 py-2 rounded">Login</button>
        </form>
    );
}
