import { Link }  from 'react-router-dom'


export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 "> sign up</h1>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="username" className="bg-slate-100 p-3 rounded-lg" id="username"/>
        <input type="email" placeholder="email" className="bg-slate-100 p-3 rounded-lg" id="email"/>
        <input type="password" placeholder="password" className="bg-slate-100 p-3 rounded-lg" id="password"/>
    <button className="bg-slate-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">sign up</button>
      </form>
      <div className=" flex gap-2 mt-4">

        <p>Already have an account? 
          <Link to="/signin" >
            <span className="text-blue-500" > sign in</span>
            
            </Link>
          
        </p>
      </div>

    </div>
  )
}
