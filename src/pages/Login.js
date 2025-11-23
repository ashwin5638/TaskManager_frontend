import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api";


const  Login = () => {

    const [form, setForm] = useState({email: '', password: ''});
    const {login} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

     const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
     } 

 const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try{
         const response = await api.post('/api/auth/login', form)
         
        
         console.log("Login response:", response.data);
         console.log("Token:", response.data.token);
        
         localStorage.setItem('token', response.data.token);
         console.log("Token saved to localStorage");
         
         login(response.data.user, response.data.token);
         navigate('/');

    } catch (err) {
        setError(err.response?.data?.message || 'Login failed');
    }
}

    return (
        <div className="container">
        <h2>Login</h2>
       {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input className="input" name="email" onChange={handleChange} value={form.email} type="email"/>
            </div>
            <div>
                <label>Password:</label>
                <input className="input" name="password" onChange={handleChange} value={form.password} type="password"/>
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    )
   
}

export default Login