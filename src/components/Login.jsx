import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isNewStudent = location.pathname === "/login";
  const studentId = params.id;

  const handleLogin = (e) => {
    e.preventDefault(); // جلوگیری از رفرش صفحه
    if (username === "ostad" && password === "1234") {
      if (isNewStudent) {
        navigate("/students/new/edit");
      } else if (studentId) {
        navigate(`/students/${studentId}/edit`);
      }
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 via-pink-100 to-pink-200 p-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          ورود استاد
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-md font-semibold hover:scale-105 transition-transform"
          >
            ورود
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-2">
          راهنمایی: username=ostad, password=1234
        </p>
      </div>
    </div>
  );
}
