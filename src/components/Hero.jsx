import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#EAE7FF] h-screen flex items-center justify-center overflow-hidden">
      {/* المان‌های پس‌زمینه */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#6A0572] rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-[#6A0572] rounded-full opacity-15 animate-rotate-slow"></div>
      <div className="absolute top-1/2 right-20 w-20 h-20 bg-[#6A0572] rounded-full opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-16 w-28 h-28 bg-[#6A0572] rounded-full opacity-15 animate-rotate-slow"></div>

      {/* متن و دکمه‌ها */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] animate-slide-up">
          مهارت‌های وب خود را به سطح بعدی ببرید
        </h1>
        <p className="text-lg md:text-xl text-[#4B3F72] animate-slide-up delay-200">
          با دوره‌های وب ۲ ما، پروژه‌های واقعی بسازید و دانش خود را ارتقا دهید.
        </p>
        <button className="bg-[#6A0572] hover:bg-[#5a0465] text-white px-8 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 animate-slide-up delay-400">
          ثبت‌نام در دوره‌ها
        </button>
      </div>
    </section>
  );
};

export default Hero;
