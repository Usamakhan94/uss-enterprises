import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1600px",
      xl: "1400px",
      lg: "1280px",
      md: "1024px",
      sm: "800px",
      xsm: "660px",
    },
    container: {
      center: true,
      padding: {
        "2xl": "1.0625rem",
        xl: "1.0625rem",
        lg: "1.25rem",
        md: "1rem",
        sm: "1rem",
        xsm: "0.625rem",
        DEFAULT: "0.5rem",
      },
    },
    extend: {
      boxShadow: {
        multi: "var(--card-shadow)",
        single: "var(--card-shadow-hover)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "var(--input)",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        button: "var(--button)",
        link: "var(--links)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "var(--card)",
          background: "var(--primary-card)",
          foreground: "var(--card-foreground)",
          foregrounddark: "var(--card-foreground-dark)",
          foregroundHover: "var(--card-foreground-hover)",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        h1: "120px",
        h2: "80px",
        h3: "64px",
        h4: "40px",
        h5: "34px",
        h6: "24px",
        base: "20px",
        body: "16px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "translate-left": {
          from: { translate: "0%" },
          to: { translate: "-100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "translate-left": "translate-left 50s linear infinite",
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
        "4000": "4000ms",
        "5000": "5000ms",
        full: "10000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
