import React,{useState} from 'react'
import heroImage from '../hero1.jpg';
import '../componants/Login.css'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('loggedInEmail', email); 
        navigate('/filtered');
      } else {
        alert(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };


  return (
    <>

      <div className='formImg'>
        <img src={heroImage} alt="" />
      </div>
      <form className="number" onSubmit={handleSubmit}>
        <div id='mail' className="mx-1">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div id='password' className="mb-3 mx-1">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
        <button className='button-33 mx-2' type='submit'> Submit</button>

      </form>

    </>
  )
}

