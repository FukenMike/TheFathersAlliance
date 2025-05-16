import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        navy:  '#0c1b33',   // dark headers / bg
        bone:  '#f5f2e9',   // default text
        blood: '#8b0000',   // primary buttons & nav
        amber: '#ffb52e',   // **reserved** — “We Are Rising” + CTA
        slate: '#475569',   // subtle backgrounds
      },
    },
  },
  plugins: [],
});

