/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BookOpen, Star } from "lucide-react";

export default function StudentCard({ student, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      className="bg-white rounded-2xl shadow-lg p-5 cursor-pointer flex flex-col items-center gap-3 w-[250px] transition-all"
      onClick={onClick}
    >
      <motion.img
        src={student.avatar}
        alt={student.name}
        className="w-24 h-24 rounded-full border-2 border-purple-200 shadow-sm"
        whileHover={{ scale: 1.1 }}
      />
      <h3 className="text-lg font-semibold text-purple-700 text-center">{student.name}</h3>
      <div className="flex items-center gap-2 text-gray-600 text-sm">
        <BookOpen className="w-4 h-4" />
        <span>{student.major}</span>
      </div>
      <div className="flex items-center gap-1 text-pink-500 text-sm">
        <Star className="w-4 h-4" />
        <span>{student.gpa}</span>
      </div>
    </motion.div>
  );
}
