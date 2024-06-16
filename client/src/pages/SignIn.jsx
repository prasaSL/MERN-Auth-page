import { useState } from 'react';
import { Link , useNavigate }  from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setError(false);

      if(data.success == false){
        setError(true);
      }
      if (data.success ==true ){
        navigate('/dashboard');
      }
    }
    catch(error){
      setLoading(false);
      setError(true);
      setError(error);
    }
    
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 "> sign IN</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
     
        <input type="email" placeholder="email" className="bg-slate-100 p-3 rounded-lg" id="email" onChange={handleChange}/>
        <input type="password" placeholder="password" className="bg-slate-100 p-3 rounded-lg" id="password" onChange={handleChange}/>
    <button className="bg-slate-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" disabled={loading}>{loading ? 'loading...' : 'sign In'    }</button>
      </form >
      <div className=" flex gap-2 mt-4">

        <p> haven&apos;t an account? 
          <Link to="/signup" >
            <span className="text-blue-500" > sign up</span>
            
            </Link>
        </p>
       
      </div>
      <div>
          {error ? <p className="text-red-500 mt-5">Something went wrong</p> : null}
        </div>
    </div>
  )
}
