import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentCard from "../components/StudentCard";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">در حال بارگذاری...</div>;
  if (!students.length)
    return <div className="p-8 text-center">هیچ دانشجویی یافت نشد</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-pink-100 p-8">
      {/* تیتر بالای صفحه */}
      <div className="mt-[100px] mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">
          لیست دانشجویان
        </h1>
        <p className="text-pink-400 text-base sm:text-lg">
          با دانشجویان با استعداد ما آشنا شوید و جزئیات هر دانشجو را مشاهده کنید
        </p>
      </div>

      {/* کارت‌ها */}
      <div className="flex flex-wrap justify-center gap-6">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onClick={() => navigate(`/students/${student.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
