import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
      '@components': path.resolve(__dirname,'./src/components'),
      // '@hook': path.resolve(__dirname,'./src/hook'),
    }
  },
  plugins: [react()],
})
