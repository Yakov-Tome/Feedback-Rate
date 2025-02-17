import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // השרת המקומי
        changeOrigin: true, // משנה את הכותרת של Host בהתאם לשרת היעד
        secure: false, // לא חובה, כי זה HTTP
        rewrite: (path) => path.replace(/^\/api/, ""), // מסיר את /api מהנתיב
      },
    },
  },
});
