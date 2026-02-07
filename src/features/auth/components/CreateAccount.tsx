import { Link } from "react-router-dom";

export default function CreateAccount() {
    return <p className="text-[16px] sm:text-xl tracking-tighter">
        Don't have an account ? <Link to="/auth/signup" className="text-gray-600 ms-2 hover:text-gray-400 transition-colors delay-100">Sign Up</Link>
    </p>
}