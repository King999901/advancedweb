import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

 function Login() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // hint برای استاد: username=ostad, password=1234
    if (username === "ostad" && password === "1234") {
      navigate(`/students/${id}/edit`);
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 via-pink-100 to-pink-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          ورود برای ویرایش دانشجو
        </h2>

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
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-md font-semibold hover:scale-105 transition-transform"
        >
          ورود
        </button>

        <p className="text-gray-400 text-sm mt-2">
          hint: username=ostad, password=1234
        </p>
      </motion.div>
    </div>
  );
}
export default Login;