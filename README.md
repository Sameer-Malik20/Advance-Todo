# 📝 Advance Todo App

A powerful and intuitive Todo List Manager built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). Manage your tasks efficiently with filtering, categorization, due dates, and a responsive UI.

---

## 🚀 Features

- ✅ Create, edit, delete tasks  
- 📅 Add due dates and categories to tasks  
- 🟢 Mark tasks as completed or active  
- 🔍 Filter tasks by:
  - All
  - Active
  - Completed  
- 🧠 Persistent storage with MongoDB  
- ⚡ Responsive UI with Tailwind CSS  
- 🌐 RESTful API integration  
- 🗂️ Category selection (Work, Personal, Study, Others)  
- 🔐 Secure `.env` configuration  

---

## 🖥️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **State Management:** React Context API  
- **Environment Variables:** .env  
---

## 📂 Folder Structure
Advance-Todo/ │ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── .env │ └── server.js │
├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── context/ │ │ └── App.jsx │ └── tailwind.config.js │ 
├── .gitignore ├── README.md └── package.json


PORT=5000
MONGODB_URI=your_mongodb_connection_string


# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Start backend
cd backend
npm start

# In a separate terminal, start frontend
cd ../frontend
npm start

📬 API Endpoints
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task
PATCH	/tasks/:id/complete	Toggle completion
DELETE	/tasks/:id	Delete a task


✅ Todo Features
 Create task

 Edit task

 Delete task

 Mark task complete/incomplete

 Filter tasks

 Category & due date

 Authentication (coming soon)

 Mobile view optimization

🧑‍💻 Author
Made with ❤️ by sameer
Email: sameermalik63901@gmail.com

LinkedIn: https://www.linkedin.com/in/sameer-malik-67ab45217

live : https://stately-elf-da822d.netlify.app
