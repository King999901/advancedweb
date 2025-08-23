import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import  {motion}  from "framer-motion";
import { FaRocket, FaCode, FaBookOpen, FaStar } from "react-icons/fa";

const OurCourses = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then(res => res.json())
      .then(data => setCourse(data))
      .catch(err => console.error(err));
  }, []);

  if (!course) return <p className="text-center mt-10 text-gray-600">در حال بارگذاری...</p>;

  // Motion Variants
  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const hoverScale = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <section className="modern-course max-w-5xl mx-auto my-12 px-6">
      <motion.h2 
        className="text-3xl font-bold text-center text-[#1E40AF] mb-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        🚀 مسیر پیشرفته توسعه وب
      </motion.h2>

      {/* اطلاعات و پیش‌نیاز */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <motion.div 
          className="bg-blue-50 p-6 rounded-xl shadow-md"
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          animate="rest"
          {...hoverScale}
        >
          <h3 className="flex items-center gap-2 font-semibold mb-2">
            <FaRocket className="text-[#1E40AF]" /> معرفی دوره
          </h3>
          <p><strong>ترم:</strong> {course.semester}</p>
          <p><strong>واحد:</strong> {course.units}</p>
          <p><strong>زمان کلاس:</strong> {course.schedule}</p>
          <p className="mt-2 text-gray-700">{course.description}</p>
        </motion.div>

        <motion.div 
          className="bg-green-50 p-6 rounded-xl shadow-md"
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          animate="rest"
          {...hoverScale}
        >
          <h3 className="flex items-center gap-2 font-semibold mb-3">
            <FaCode className="text-green-600"/> مهارت‌های لازم
          </h3>
          <div className="flex flex-wrap gap-2">
            {course.prerequisites.map((item, idx) => (
              <motion.span 
                key={idx} 
                className="bg-green-600 text-white px-3 py-1 rounded-full text-sm shadow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* اهداف آموزشی */}
      <motion.div 
        className="bg-yellow-50 p-6 rounded-xl shadow-md mb-10"
        variants={fadeSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="flex items-center gap-2 font-semibold mb-3">
          <FaStar className="text-yellow-600"/> دستاوردهای دوره
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          {course.objectives.map((goal, idx) => (
            <motion.li 
              key={idx} 
              className="text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {goal}
            </motion.li>
          ))}
        </ol>
      </motion.div>

      {/* سرفصل‌ها */}
      <motion.div 
        className="bg-purple-50 p-6 rounded-xl shadow-md mb-10"
        variants={fadeSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="flex items-center gap-2 font-semibold mb-3">
          <FaBookOpen className="text-purple-600"/> محتوای دوره
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          {course.topics.map((topic, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="font-semibold text-purple-700">{idx + 1}.</span>
              <span className="text-gray-700">{topic}</span>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      {/* منابع */}
      <motion.div 
        className="bg-pink-50 p-6 rounded-xl shadow-md mb-10"
        variants={fadeSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="flex items-center gap-2 font-semibold mb-3">
          <FaStar className="text-pink-600"/> منابع مفید
        </h3>
        <div className="flex flex-wrap gap-2">
          {course.resources.map((res, idx) => (
            <motion.span 
              key={idx} 
              className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm shadow-sm"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {res}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurCourses;
