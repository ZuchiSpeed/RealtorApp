import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    //handle change in data and store in the State
    const handleChange = (e) => {
        setFormData({
            //spread operator that holds data
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    //handle information on submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            //request form data and stringify into json after method call
            const res = await fetch('api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            //loading data through state
            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            navigate('/sign-in');
            setError(null);
        } catch (error) {
            setLoading(false)
            setError(error.message);
        }
    };


    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className="text-center text-3xl font-semibold my-7 text-slate-400">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Username" className="p-3 rounded-lg bg-gray-700" id="username" onChange={handleChange} />
                <input type="email" placeholder="Email" className="p-3 rounded-lg bg-gray-700" id="email" onChange={handleChange} />
                <input type="password" placeholder="Password" className="p-3 rounded-lg bg-gray-700" id="password" onChange={handleChange} />

                <button disabled={loading} className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-80">
                    {loading ? 'loading...' : 'Sign Up'}
                </button>
            </form>

            <div className="flex gap-2 mt-5">
                <p className="text-slate-400">Have an account?</p>
                <Link to={"/sign-in"}>
                    <span className="text-blue-300 hover:underline">Sign In</span>
                </Link>
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}