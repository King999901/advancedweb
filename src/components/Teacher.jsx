/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  SparklesIcon,
  BriefcaseIcon,
  PhoneIcon,
  LinkIcon,
  CodeBracketIcon,
  TrophyIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/solid";

function Teacher() {
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/Teacher")
      .then((res) => res.json())
      .then((data) => setTeacherData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!teacherData) return <p className="text-center mt-10 text-gray-500">در حال بارگذاری...</p>;

  return (
    <motion.div
      className="w-[95vw] h-screen bg-gradient-to-tr from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      dir="ltr" // اسکرول سمت راست
    >
      <motion.div
        className="scrollbar-hide rounded-3xl shadow-2xl p-8 max-w-5xl w-full mx-4 text-gray-900 overflow-y-auto max-h-[90vh] border border-gray-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        dir="rtl" // محتوا راست‌چین
      >
        {/* Header */}
        <motion.div className="flex flex-row items-center gap-6 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.img
            src={teacherData.image}
            alt={teacherData.name}
            className="w-32 h-32 rounded-full border-4 border-purple-300 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <div className="text-right">
            <motion.h1 className="text-4xl font-bold mb-2 text-purple-700">{teacherData.name}</motion.h1>
            <div className="flex flex-wrap  gap-2">
              {teacherData.titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-pink-300 to-purple-300 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {title}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section className="mt-6 bg-indigo-50 rounded-lg p-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2 ">
            <AcademicCapIcon className="h-6 w-6 text-indigo-600" /> درباره من
          </h2>
          <p className="text-lg leading-relaxed text-right">{teacherData.about}</p>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="mt-6 bg-green-50 rounded-lg p-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2 ">
            <SparklesIcon className="h-6 w-6 text-green-600" /> مهارت‌ها
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["web","research"].map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-medium mb-2 text-right">{cat === "web" ? "وب" : "تحقیق و طراحی"}</h3>
                <ul className="space-y-2">
                  {teacherData.skills[cat].map((skill, i) => (
                    <motion.li
                      key={i}
                      className="bg-white p-2 rounded-lg hover:bg-gray-100 text-right"
                      whileHover={{ x: -10 }} // راست‌چین: x منفی برای شیفت به چپ
                      transition={{ duration: 0.3 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section className="mt-6 bg-pink-50 rounded-lg p-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2 ">
            <TrophyIcon className="h-6 w-6 text-pink-400" /> دستاوردها
          </h2>
          <ul className="space-y-2">
            {teacherData.achievements.map((ach, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2  text-right"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {ach}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Experience Section */}
        <motion.section className="mt-6 bg-yellow-50 rounded-lg p-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2 ">
            <BriefcaseIcon className="h-6 w-6 text-yellow-500" /> تجربیات
          </h2>
          {teacherData.experience.map((exp, index) => (
            <motion.div key={index} className="mb-4 p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors text-right"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium">{exp.role} - {exp.company}</h3>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <p className="mt-2">{exp.details}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Contact Section */}
        <motion.section className="mt-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2 ">
            <PhoneIcon className="h-6 w-6 text-purple-500" /> راه های ارتباطی
          </h2>
          <div className="flex flex-wrap gap-27 ">
            {Object.keys(teacherData.contact).map((key, i) => {
              let IconComponent;
              let label;
              switch(key){
                case "email": 
                  IconComponent=EnvelopeIcon; 
                  label="ایمیل";
                  break;
                case "linkedin": 
                  IconComponent=LinkIcon; 
                  label="لینکدین";
                  break;
                case "website": 
                  IconComponent=GlobeAltIcon; 
                  label="وبسایت";
                  break;
                case "github": 
                  IconComponent=CodeBracketIcon; 
                  label="گیتهاب";
                  break;
                case "twitter": 
                  IconComponent=ChatBubbleBottomCenterTextIcon; 
                  label="توییتر";
                  break;
                default: 
                  IconComponent=EnvelopeIcon;
                  label=key;
              }
              return (
                <motion.a
                  key={i}
                  href={teacherData.contact[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {label} <IconComponent className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}

export default Teacher;