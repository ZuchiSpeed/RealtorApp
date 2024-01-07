import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className="text-center text-3xl font-semibold my-7 text-slate-400">Sign Up</h1>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Username" className="p-3 rounded-lg bg-gray-700" id="username" />
                <input type="email" placeholder="Email" className="p-3 rounded-lg bg-gray-700" id="email" />
                <input type="password" placeholder="Password" className="p-3 rounded-lg bg-gray-700" id="password" />

                <button className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-80">
                    Sign Up
                </button>
            </form>

            <div className="flex gap-2 mt-5">
                <p className="text-slate-400">Have an account?</p>
                <Link to={"/sign-in"}>
                <span className="text-blue-300 hover:underline">Sign In</span>
                </Link>
            </div>
        </div>
    )
}