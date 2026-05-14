# Healing Touch

Healing Touch is an elderly nursing and healthcare portal designed to connect families with verified healthcare professionals, including nurses, caregivers, physiotherapists, attendants, and home medical support providers. The platform emphasizes compassionate, reliable in-home care, accessibility, and continuity for senior citizens.

### Project deployed link:
 - frontend: https://healing-touch-pearl.vercel.app/
 - backend: https://healing-touch-1.onrender.com

## Project Features

### Frontend Features
- Built with **React** and **Vite** for a fast, responsive SPA experience.
- **Home page hero section** with brand messaging, doctor illustration, and a callback CTA.
- **Navbar** with hover-enabled services menu, login route, and a `Book now` anchor link.
- **Request Callback** section with contact form fields: name, phone, city, and care requirements.
- **Doctor showcase** card carousel for featured providers.
- **FAQ component** with common care questions and answers.
- **About page** describing mission, services, and team members.
- **Login component** with role, name, and password inputs.
- **Register component** with role, name, DOB, mobile number, and password.
- **Client routing** via `react-router-dom` with routes for `/`, `/about`, `/login`, and `/register`.
- **Environment-driven API URL** support via `VITE_API_URL`.

### Backend Features
- **Express.js server** serving backend API routes.
- **MongoDB connection** via Mongoose using `Mongo_URL` from environment variables.
- **User registration** endpoint: `POST /user/register`.
- **User login** endpoint: `POST /user/login`.
- **Authenticated profile** endpoint: `GET /user/profile`.
- **JWT-based authentication** with token verification middleware.
- **Password hashing** with `bcrypt`.
- **CORS enabled** for frontend/back-end communication.

### Data Models
- **UserModel** includes:
  - `role`: Admin / caregiver / user
  - `name`
  - `dob`
  - `mobile`
  - `password`
- **ServiceModel** scaffolding exists for future service tracking and booking data.

## Technology Stack

- Frontend
  - React
  - Vite
  - React Router
  - Chakra UI
  - Framer Motion
  - React Icons
  - Axios
  - Next Themes

- Backend
  - Express
  - Mongoose
  - MongoDB
  - JSON Web Tokens
  - bcrypt
  - dotenv
  - cors

## Deployment Notes

### Backend
- The backend uses `index.js` as the entry point.
- Ensure the following environment variables are configured in Render:
  - `Mongo_URL` (MongoDB connection URI)
  - `SECRET_KEY` (JWT secret)
  - `PORT` (Render will set this automatically)
- Start command: `npm start`

### Frontend
- The frontend reads the backend URL from `VITE_API_URL`.
- Example `.env` value:
  - `VITE_API_URL=https://healing-touch-1.onrender.com`
- Build command: `npm run build`

## Local Setup

### Backend
```bash
cd Backend
npm install
npm start
```

### Frontend
```bash
cd Frontend
npm install
npm run dev
```

## Current Limitations
- Service route support is scaffolded in the backend but currently commented out.
- Auth context is available, but full session persistence and user state management may need additional wiring.

## Project Structure

```mermaid
tree
Root
  Backend
    index.js
    package.json
    .env
    src
      config
        db.js
      middleware
        auth.middleware.js
        Authrized.middleware.js
      models
        usermodel.js
        service.model.js
      routes
        user.route.js
        service.route.js
  Frontend
    package.json
    .env
    vite.config.js
    index.html
    src
      main.jsx
      App.jsx
      App.css
      index.css
      componants
        Allroutes.jsx
        Navbar.jsx
        Login.jsx
        Register.jsx
        Footer.jsx
        FAQ.jsx
        StepInfo.jsx
      pages
        Home.jsx
        Home.css
        About.jsx
        About.css
      context
        Authcontext.jsx
      photos
        doc.avif
```

## Useful Links
- Frontend repo: `Frontend/`
- Backend repo: `Backend/`
- Backend deploy URL: `https://healing-touch-1.onrender.com`

---

This README is generated from the current project source and reflects the implemented frontend UI, backend APIs, and available routes.