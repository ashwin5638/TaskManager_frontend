📌 TaskManager Frontend (React + Axios)                   
A modern frontend UI for the Task Manager Application, built with:                 
•	⚛️ React                           
•	🔐 JWT Authentication                           
•	🔀 React Router                                        
•	🗂 Protected Routes                                          
•	📝 Create / Edit / Delete Tasks                                     
•	🧩 Role-based UI (admin/user)                                         
•	🌐 Axios API wrapper                                        
•	🚀 Deployment-ready for Vercel                                                  
This frontend connects to the backend API deployed on Render.  
________________________________________
🚀 Live Demo     

Frontend (Vercel):                     
https://task-manager-frontend-seven-mauve.vercel.app/                                                      
Backend (Render):                                                      
https://taskmanager-backend1-46y3.onrender.com           
________________________________________
📁 Project Structure        

frontend/      
├── src/          
│   ├── api.js             
│   ├── App.js                              
│   ├── components/                        
│   │   ├── Navbar.js                                   
│   │   └── PrivateRoute.js                                                 
│   ├── context/                                                        
│   │   └── AuthContext.js                                                                 
│   ├── pages/                                                             
│   │   ├── Login.js                                                                  
│   │   ├── Register.js                                                          
│   │   ├── TaskList.js                                                                      
│   │   └── TaskForm.js                                            
│   ├── styles.css                                                                                       
├── public/                                                             
├── package.json                                                                              
└── README.md                                                     
________________________________________
🧠 Features       
🔐 Authentication           
•	Login                 
•	Register                   
•	Logout                                 
•	Stores JWT token in localStorage                  
🛡 Protected Routes    
________________________________________
▶️ Run Locally
  
1.	Install dependencies:   
npm install   
2.	Run the development server:        
npm start         
App starts at:             
http://localhost:3000          
________________________________________
🔧 Environment Variables (Optional)    

For production deployments:     
Create .env:          
REACT_APP_API_URL=https://taskmanager-backend1-46y3.onrender.com            
And update api.js to use:                 
baseURL: process.env.REACT_APP_API_URL
________________________________________
🌍 Deployment (Vercel)
1.	Push your frontend to a separate GitHub repo
2.	Go to https://vercel.com
3.	Click New Project
4.	Import your GitHub repo
5.	Set:
Setting	Value
Framework	React
Root Directory	frontend (if needed)
Build Command	npm run build
Output Directory	build


