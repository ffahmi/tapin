/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./detail-service.html", "./form-order.html", "./confirm-order.html", "./succes-page.html", './failed-payment.html', "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:  '#2563eb',
        secondary: '#F1CC01',
        tertiery: '#2F3946',
        fourth: '#2563eb',
        background: '#F7F7F7',
        stroke: '#E8E8E8',
      },
      fontFamily: {
        sans: ['"Google Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"EB Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

