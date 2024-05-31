/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'login-image': "url(./assets/Login.jpg)",
      'regis-image': "url(./assets/Registration.jpg)",
      'update-image': "url(./assets/Update_Appointment.jpg)",
      'add-image': "url(./assets/Add_Appointment.jpg)",
      'forgot-password' : "url(./assets/Forgot_Password.jfif)"
    },
  },
  plugins: [],
}