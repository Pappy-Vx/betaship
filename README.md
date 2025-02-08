# Betaship E-Commerce Platform

Betaship is a full-fledged eCommerce platform built with **React.js (TypeScript) for the frontend** and **Node.js (Express) for the backend**. It provides a scalable architecture to manage products, orders, authentication, payments, and more.

## Features
- **User Authentication**: Sign up, login, logout (JWT/OAuth)
- **Product Management**: CRUD for admins and sellers
- **Shopping Cart & Checkout**
- **Payment Integration**: Flutterwove, monnify
- **Order Tracking & History**
- **Reviews & Ratings**
- **Optimized Performance**: Caching (Redis), Lazy Loading
- **Secure & Scalable**: Rate Limiting, API Security, CI/CD

## Tech Stack
### Frontend
- **React.js + TypeScript**
- **Vite** (for fast development)
- **Tailwind CSS** (UI styling)
- **Redux Toolkit** (State Management)
- **React Router** (Navigation)
- **React Query** (API state management)
- **Jest & React Testing Library** (Testing)

### Backend
- **Node.js + Express.js**
- **MongoDB (Mongoose) / PostgreSQL (Prisma)**
- **JWT & OAuth** (Authentication)
- **Stripe / PayPal** (Payments)
- **Multer + Cloudinary / AWS S3** (File Uploads)
- **Winston & Morgan** (Logging & Monitoring)
- **Jest & Supertest** (Backend Testing)

## Getting Started
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) or PostgreSQL
- [Vite](https://vitejs.dev/) (for frontend)
- [Git](https://git-scm.com/)

### Installation
#### 1. Clone the repository
```sh
git clone https://github.com/your-username/betaship.git
cd betaship
```

#### 2. Install dependencies
##### Frontend
```sh
cd client
npm install
```
##### Backend
```sh
cd server
npm install
```

#### 3. Configure Environment Variables
Create a **.env** file in the `server` directory and add:
```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
```

#### 4. Start Development Servers
##### Backend
```sh
cd server
npm run dev
```
##### Frontend
```sh
cd client
npm run dev
```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | User login |
| **GET** | `/api/products` | Get all products |
| **POST** | `/api/cart` | Add to cart |
| **POST** | `/api/checkout` | Checkout and process payment |

## Deployment
### Frontend (Vercel)
```sh
vercel deploy
```
### Backend (DigitalOcean / AWS / Heroku)
```sh
docker build -t betaship-backend .
docker run -p 5000:5000 betaship-backend
```

## Contribution Guidelines
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit changes and push (`git push origin feature-branch`)
4. Create a pull request (PR) for review

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any issues or inquiries, reach out:
- Email: info@betaship.com
- GitHub: [Pappy-Vx](https://github.com/pappy-vx)
- Website: [Betaship](https://betaship.com.ng)

