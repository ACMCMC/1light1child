import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/background.png')",
      },
      fontFamily: {
        display: ['Londrina Solid', 'sans-serif'],
        sans: ['Lexend Deca', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        "focus-in-expand": "focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
        "focus-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            filter: "blur(12px)",
            opacity: "0"
          },
          to: {
            filter: "blur(0)",
            opacity: "1"
          }
        }
      }
    }
  }
}