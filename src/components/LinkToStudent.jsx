import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function LinkBox() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-200 to-pink-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[500px] bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-start gap-6 border-t-4 border-purple-600"
      >
        <h2 className="text-2xl font-bold text-purple-800">
          به پرتال دانشجویان ما خوش آمدید
        </h2>
        <p className="text-gray-700">
          در این بخش می‌توانید با دانشجویان با استعداد ما، رشته‌های تحصیلی و دستاوردهای آن‌ها آشنا شوید.
        </p>
        <p className="text-gray-700">
          کارت‌های هر دانشجو تعاملی، مدرن و پر از اطلاعات هستند. برای مشاهده جزئیات هر دانشجو روی لینک زیر کلیک کنید.
        </p>

        {/* لینک */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full text-center px-6 py-3 rounded-xl cursor-pointer shadow-md font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          onClick={() => navigate("/students")}
        >
          مشاهده لیست دانشجویان
        </motion.div>
      </motion.div>
    </div>
  );
}
