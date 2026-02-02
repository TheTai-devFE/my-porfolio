# Portfolio Website

A modern, responsive portfolio website with a complete backend for content management.

## 🚀 Tech Stack

### Backend

- **Node.js + Express.js** - REST API server
- **MongoDB + Mongoose** - Database
- **JWT** - Admin authentication

### Frontend

- **React 18 + Vite** - UI framework
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **TanStack Query** - Data fetching

## 📁 Project Structure

```
my-porfolio/
├── backend/
│   ├── src/
│   │   ├── index.js          # Express app entry
│   │   ├── config/db.js      # MongoDB connection
│   │   ├── models/           # Mongoose schemas
│   │   ├── routes/           # API routes
│   │   └── middleware/       # JWT auth
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # React components
    │   ├── hooks/            # TanStack Query hooks
    │   └── services/         # API client
    └── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB running locally or MongoDB Atlas

### Backend Setup

```bash
cd backend
npm install
# Configure .env file
npm run dev
```

The API will run on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will run on `http://localhost:3000`

### Seed Data

To populate the database with sample data:

```bash
cd backend
node src/seed.js
```

## 🔐 Admin API

Login endpoint: `POST /api/admin/login`

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

All admin routes require JWT token in Authorization header:

```
Authorization: Bearer <token>
```

## 📝 API Endpoints

### Public

- `GET /api/personal-info` - Personal information
- `GET /api/projects` - All projects
- `GET /api/skills` - All skills
- `GET /api/education` - Education & experience
- `GET /api/blogs` - Published blogs

### Admin (Protected)

- `PUT /api/admin/personal-info` - Update personal info
- `POST/PUT/DELETE /api/admin/projects/:id` - Manage projects
- `POST/PUT/DELETE /api/admin/skills/:id` - Manage skills
- `POST/PUT/DELETE /api/admin/education/:id` - Manage education
- `POST/PUT/DELETE /api/admin/blogs/:id` - Manage blogs

## 🎨 Features

- ✅ Modern, minimalist design with Teal/Cyan theme
- ✅ Smooth animations with Framer Motion
- ✅ Responsive (Mobile First)
- ✅ Dark theme
- ✅ SEO optimized
- ✅ Admin API for content management
- ✅ Blog section (Coming Soon placeholder)

## 📄 License

MIT
