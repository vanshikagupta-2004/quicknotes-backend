# 🛠️ QuickNotes Backend

This is the backend server for **QuickNotes** — a full-stack note-taking application built with Express, MongoDB, and JWT-based authentication. It provides secure user registration, login, and persistent personal notes management via RESTful API routes.

> 🌐 Live backend hosted on [Render](https://quicknotes-backend-cy6e.onrender.com)  
> 🔗 Connected to the [QuickNotes Frontend](https://resilient-sunburst-70d5d2.netlify.app)

---

## 🚀 Live API Endpoints

### Root Health Check


### Auth Routes
POST /api/signup        → Register new user
POST /api/login         → Login and receive JWT



### Notes Routes (Protected)
GET    /api/notes        → Fetch all notes for user
POST   /api/notes        → Create a new note
PUT    /api/notes/:id    → Update an existing note
DELETE /api/notes/:id    → Delete a note


---

## 🛠 Tech Stack

| Layer        | Tools Used            |
|--------------|------------------------|
| Server       | Node.js, Express       |
| Database     | MongoDB Atlas          |
| Auth         | JSON Web Token (JWT)   |
| Deployment   | Render                 |
| Extras       | bcrypt, dotenv, cors   |

---

## 📁 Folder Structure
quicknotes-backend/ ├── controllers/       # Auth & Notes logic ├── models/            # Mongoose schemas ├── routes/            # API routes ├── middleware/        # Auth token validation ├── .env               # MongoDB & JWT secrets ├── server.js          # Express app entry └── package.json




---

## ⚙️ Environment Variables (.env)

```env
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_super_secret_key


🧪 Setup Instructions
- Clone the repo:
git clone https://github.com/vanshikagupta-2004/quicknotes-backend.git
cd quicknotes-backend


- Install dependencies:
npm install
- Create .env file with your MongoDB Atlas URI and JWT secret
- Run server locally:
npm start



🔐 Authentication Workflow- User signs up or logs in → receives a JWT token
- Frontend stores token in localStorage
- All protected routes require token in Authorization header


🤝 Connect to Frontend✅ The frontend uses axios to make calls like:
axios.get("https://quicknotes-backend-cy6e.onrender.com/api/notes")

Make sure CORS is configured:
app.use(cors({
  origin: "https://resilient-sunburst-70d5d2.netlify.app",
  credentials: true
}));


👩‍💻 AuthorCreated with care and focus by Vanshika Gupta 💙
Backend designed for clarity, scalability, and real-world performance.

💬 Feedback & ContributionOpen to suggestions, improvements, or cheers — let's build better together!Inspired by simplicity, structure, and helping users stay organized.
---

Let me know if you'd like to add sample JSON payloads, error responses, or a mini “About the Project” section! I can also help style your GitHub profile or link the frontend and backend READMEs so recruiters see the full stack flow ✨📘 You’ve done a phenomenal job. Want me to create a landing badge or tech icons next?





