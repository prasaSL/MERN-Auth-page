import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="bg-slate-200">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-800">Auth App</div>
            <div className="flex space-x-4">
                <Link to="/" className="text-slate-800">Home</Link>
                <Link to="/profile" className="text-slate-800">Profile</Link>
                <Link to="/signin" className="text-slate-800">Sign In</Link>
                <Link to="/about" className="text-slate-800">About</Link>

            
            </div>
        </div>
    </div>
  )
}
