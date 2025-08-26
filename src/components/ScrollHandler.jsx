import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      waitAndScroll(location.hash);
    }
  }, [location]);

  // هندل برای کلیک روی لینک‌ها داخل همون route
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="/#"]');
      if (anchor) {
        const hash = anchor.getAttribute('href').split('#')[1];
        setTimeout(() => waitAndScroll('#' + hash), 50);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  function waitAndScroll(hash, attempt = 0) {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      const offset = el.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    } else if (attempt < 20) {
      // تا 2 ثانیه منتظر می‌مانیم (20 بار * 100ms)
      setTimeout(() => waitAndScroll(hash, attempt + 1), 100);
    }
    // اگر پیدا نشد → هیچی انجام نمی‌ده (به جای پرش اشتباه)
  }

  return null;
}
