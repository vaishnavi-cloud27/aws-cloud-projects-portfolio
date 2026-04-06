# 🐳 Full Stack Login Application (Dockerized)

> A full-stack web application with signup and login functionality, containerized using Docker and deployed on AWS EC2.

---

## 📌 Project Aim

To develop a full-stack web application with login and signup functionality, integrate the frontend and backend using REST APIs, containerize both services using Docker, and deploy them on AWS EC2.

---

## 🛠️ Technologies Used

| Layer | Technology |
|---|---|
| Frontend | HTML, JavaScript |
| Backend | Node.js, Express.js |
| Containerization | Docker |
| Deployment | AWS EC2 (Mumbai Region) |
| API Communication | Fetch API (REST) |

---

## ✨ Features

- ✅ User Signup — register with username and password
- ✅ User Login — authenticate against in-memory store
- ✅ REST API — `/api`, `/signup`, `/login` endpoints
- ✅ CORS-enabled backend for frontend-backend communication
- ✅ Dockerized frontend (served via Nginx) and backend (Node.js)
- ✅ Deployed on AWS EC2 with public access

---

## 📁 Project Structure

```
fullstack-login-app/
├── backend/
│   ├── service.js       # Express server with signup/login APIs
│   ├── package.json     # Node.js dependencies
│   └── Dockerfile       # Docker config for backend
├── frontend/
│   ├── index.html       # HTML + JS frontend with Fetch API
│   └── Dockerfile       # Docker config for frontend (Nginx)
└── README.md
```

---

## 🚀 How to Run Locally Using Docker

### Prerequisites
- Docker installed on your machine
- Git (to clone the repo)

### Step 1 — Clone the Repository
```bash
git clone https://github.com/vaishnavi-cloud27/aws-cloud-projects-portfolio.git
cd aws-cloud-projects-portfolio/fullstack-login-app
```

### Step 2 — Run the Backend
```bash
cd backend
docker build -t backend-app .
docker run -d -p 3000:3000 backend-app
```

### Step 3 — Run the Frontend
```bash
cd ../frontend
docker build -t frontend-app .
docker run -d -p 3001:80 frontend-app
```

### Step 4 — Test Locally
| Service | URL |
|---|---|
| Frontend | http://localhost:3001 |
| Backend API | http://localhost:3000/api |

---

## 🌐 Deployed Links (AWS EC2)

| Service | URL |
|---|---|
| 🖥️ Frontend | http://13.235.19.47:3001 |
| ⚙️ Backend API | http://13.235.19.47:3000/api |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api` | Health check — returns `{ message: "Backend is working" }` |
| POST | `/signup` | Register a new user with `{ username, password }` |
| POST | `/login` | Authenticate user with `{ username, password }` |

---

## 👩‍💻 Author

**Vaishnavi Ghadge**  
BSC. Computer Science (Cloud Computing) — University of Mumbai  
🔗 [GitHub](https://github.com/vaishnavi-cloud27)

---

> ⭐ If you found this project useful, consider giving it a star!
