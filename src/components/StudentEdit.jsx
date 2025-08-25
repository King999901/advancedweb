import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function StudentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8 text-center">در حال بارگذاری...</div>;
  if (!student) return <div className="p-8 text-center">دانشجو یافت نشد</div>;

  const handleChange = (field, value) => {
    setStudent({ ...student, [field]: value });
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`http://localhost:5000/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      if (!res.ok) throw new Error("خطا در ذخیره‌سازی");
      navigate(`/students/${id}`);
    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-pink-200 p-8 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl mt-16 ">
        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          ویرایش اطلاعات {student.name}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {/* نام */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">نام</label>
              <input
                type="text"
                value={student.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="نام دانشجو"
                className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* رشته */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">رشته</label>
              <input
                type="text"
                value={student.major}
                onChange={(e) => handleChange("major", e.target.value)}
                placeholder="رشته دانشجو"
                className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* GPA و سال ورود کنار هم */}
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col">
                <label className="text-gray-700 font-semibold mb-1">GPA</label>
                <input
                  type="number"
                  value={student.gpa}
                  onChange={(e) => handleChange("gpa", e.target.value)}
                  placeholder="معدل"
                  className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-gray-700 font-semibold mb-1">
                  سال ورود
                </label>
                <input
                  type="number"
                  value={student.year}
                  onChange={(e) => handleChange("year", e.target.value)}
                  placeholder="سال ورود"
                  className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>

            {/* علایق */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">علایق</label>
              <input
                type="text"
                value={student.interests.join(", ")}
                onChange={(e) =>
                  handleChange(
                    "interests",
                    e.target.value.split(",").map((i) => i.trim())
                  )
                }
                placeholder="علایق (با کاما جدا شود)"
                className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* سطح کلاس */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">
                سطح کلاس
              </label>
              <input
                type="text"
                value={student.level}
                onChange={(e) => handleChange("level", e.target.value)}
                placeholder="سطح کلاس"
                className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* فعالیت‌ها کنار هم */}
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col">
                <label className="text-gray-700 font-semibold mb-1">
                  فعالیت‌های انجام شده
                </label>
                <input
                  type="number"
                  value={student.activitiesCompleted}
                  onChange={(e) =>
                    handleChange("activitiesCompleted", e.target.value)
                  }
                  className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-gray-700 font-semibold mb-1">
                  کل فعالیت‌ها
                </label>
                <input
                  type="number"
                  value={student.totalActivities}
                  onChange={(e) =>
                    handleChange("totalActivities", e.target.value)
                  }
                  className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={saving}
            className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-md font-semibold hover:scale-105 transition-transform"
          >
            {saving ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </button>
        </div>
      </div>
    </div>
  );
}
