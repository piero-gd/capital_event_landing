import { defineConfig } from 'vite';

// @ts-ignore - Ignorar temporalmente el error de tipo
export default defineConfig(async () => {
  // @ts-ignore - Ignorar temporalmente el error de tipo
  const tailwindcss = (await import('@tailwindcss/vite')).default;
  
  return {
    plugins: [
      tailwindcss(),
    ],
  };
});