# 🛍️ Modern E-Commerce Platform

A complete e-commerce solution built from the ground up with modern web technologies. This project demonstrates practical implementation of full-stack development principles with real-world authentication, database management, and responsive design.

## What I Built

This application serves as a comprehensive online store where users can browse products, manage their shopping cart, and complete secure purchases. The entire system runs on a modern tech stack combining backend APIs with an interactive frontend.

### Core Features

**Shopping Experience**
- Browse through categorized product listings
- Real-time cart management without page reloads
- Secure checkout process with user authentication
- Responsive design that works seamlessly across devices

**Technical Implementation**
- RESTful API architecture for clean data handling
- Type-safe database operations with modern ORM
- Efficient client-side state management and caching
- Production-ready authentication system

## Tech Stack

**Backend**
- Node.js with Express framework
- PostgreSQL for reliable data storage
- Drizzle ORM providing type safety
- TypeScript for better code quality
- Clerk for authentication and user management

**Frontend**
- React with modern hooks
- TanStack Query for smart data fetching
- Tailwind CSS with DaisyUI components
- TypeScript throughout

## Getting Started

### What You'll Need

Make sure you have these installed:
- Node.js (version 16 or higher recommended)
- PostgreSQL database
- A Clerk account for authentication

### Environment Configuration

Create a `.env` file in the backend directory:

```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key

FRONTEND_URL=http://localhost:5173
```

Create another `.env` file in the frontend directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
VITE_API_URL=http://localhost:3000/api
```

### Installation and Running

**Starting the Backend**

```bash
cd backend
npm install
npm run dev
```

The API will be available at `http://localhost:3000`

**Starting the Frontend**

```bash
cd frontend
npm install
npm run dev
```

The application will open at `http://localhost:5173`

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── db/
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── hooks/
    │   ├── services/
    │   └── utils/
    └── package.json
```

## Key Learnings

Building this project taught me how to:
- Design and implement RESTful APIs from scratch
- Structure a full-stack application with proper separation of concerns
- Handle user authentication securely
- Write type-safe code with TypeScript across the stack
- Optimize database queries and manage relationships
- Create responsive UI components that feel native on any device
- Deploy and manage environment variables for different stages

## Development Notes

The application uses best practices including:
- Clean code architecture with separation of concerns
- Proper error handling on both client and server
- Environment-based configuration
- Type safety to catch errors during development
- Efficient data caching to reduce unnecessary network requests

## Why I Built This

I wanted to gain hands-on experience with the complete lifecycle of a modern web application - from database design to user interface. This project helped me understand how different parts of the stack communicate and work together to create a cohesive user experience.

## Future Improvements

Some ideas I'm considering:
- Add product reviews and ratings
- Implement order history and tracking
- Create an admin dashboard for inventory management
- Add payment gateway integration
- Implement advanced search and filtering
- Build a recommendation system

## Deployment

This application can be deployed on various platforms:
- Backend: Railway, Render, or Fly.io
- Frontend: Vercel, Netlify, or Cloudflare Pages
- Database: Neon, Supabase, or managed PostgreSQL

## Contributing

Feel free to fork this project and make your own modifications. If you find any issues or have suggestions, I'd appreciate hearing about them.

## License

This project is open source and available for educational purposes.

---

Built with care and lots of coffee ☕