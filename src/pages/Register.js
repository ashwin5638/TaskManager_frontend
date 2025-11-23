import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api";


const Register = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    
   
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });



    const [error, setError] = useState('')

    const handleChange = (e) => {
       setform({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try{
           const res = await api.post('/api/auth/register', form)
           login(res.data.user, res.data.token)
              navigate('/')
        }catch(err){
            setError(err.response?.data?.message || 'Registration failed');
        }
    }

    return (
        <div className="container">
        <h2 className="head">Register</h2>
         {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>
                <input type="name" name="name" value={form.name} onChange={handleChange}/>
            </div>
            <div>
                <label>Email :</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password :</label>
                <input type='password' name="password" value={form.password} onChange={handleChange}/>
            </div>
          <button type="submit" onClick={handleSubmit}>Register</button>
        </form>

        </div>
    )
}

export default Register