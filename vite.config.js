import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // معمولاً نیاز نیست

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // فقط اگر مطمئنی که می‌خوای پلاگین جدا نصب بشه
  ],
});
