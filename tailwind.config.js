/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      screens: {
        'sm': '618px',  // Custom breakpoint for 375px
      },
      colors: {
        primary: '#7141e6',         // Purple
        secondary: '#ED8936',       // Orange
        Analogous1: '#7A57F3',          // Indigo
        Analogous2: '#26ceef',            // Teal
        Triadic1: '#4D2C91',          // Cream (for text or background)
        greenGradient: {
          left: '#4CAF50',
          right: '#66BB6A',
        },           // Green
        TextColor: '#333333',           // Dark Gray
        TextColorLight: '#4A5568',           // Medium Gray
        TextColorSubtle: '#9e9991',           // Light Gray
        blue: '#E3F2FD',            // Blue
        yellow: '#FFF9E1',          // Yellow
        red: '#E53E3E',             // Red for errors
        Success: '#82C91E',            // Lime for success
      }
    },
  },
  plugins: [],

  
}

