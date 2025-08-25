/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookOpen, Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent({
          ...data,
          bio:
            data.bio ||
            "این دانشجو علاقه‌مند به پیشرفت در رشته خود است و در پروژه‌های مختلف دانشگاهی فعال بوده است.",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // handle navigates
  const handleBack = () => {
    navigate("/students");
  };

  const handleEdit = () => {
    navigate(`/students/${id}/login`);
  };

  if (loading) return <div className="p-8 text-center">در حال بارگذاری...</div>;
  if (!student) return <div className="p-8 text-center">دانشجو یافت نشد</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-200 to-pink-100 p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 max-w-3xl bg-white rounded-3xl shadow-2xl w-full relative overflow-hidden"
      >
        {/* کارت اصلی */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-36 h-36 rounded-full border-4 border-purple-200 shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-800">
              {student.name}
            </h2>

            <div className="flex items-center gap-3 mt-2 text-gray-700">
              <BookOpen className="w-5 h-5" />
              <span>{student.major}</span>
            </div>

            <div className="flex items-center gap-3 mt-1 text-yellow-500">
              <Star className="w-5 h-5" />
              <span>{student.gpa}</span>
            </div>

            <div className="flex items-center gap-3 mt-1 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>ورودی: {student.year}</span>
            </div>

            <div className="mt-2">
              <span className="text-gray-700 font-semibold">سطح کلاس: </span>
              <span>{student.level}</span>
            </div>

            {/* علایق به صورت badge */}
            <div className="mt-3">
              <span className="text-gray-700 font-semibold">علایق: </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {student.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* progress bar فعالیت‌ها */}
            <div className="mt-4">
              <span className="text-gray-700 font-semibold">
                پیشرفت فعالیت‌ها:{" "}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
                <div
                  className="bg-purple-500 h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (student.activitiesCompleted / student.totalActivities) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 mt-1">
                {student.activitiesCompleted} از {student.totalActivities}{" "}
                فعالیت
              </span>
            </div>

            {/* bio */}
            <div className="mt-4 text-gray-600 text-sm sm:text-base">
              <p>{student.bio}</p>
            </div>

            {/* دکمه ویرایش */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handleEdit}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
              >
                ویرایش دانشجو
              </button>

              <button
                onClick={handleBack}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
              >
                بازگشت به لیست دانشجویان
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
