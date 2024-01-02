import { FaSearch } from 'react-icons/fa'

//Helps with routing without a hard refresh
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gray-900 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-slate-400">Malone</span>
                        <span className="text-slate-700">Estate</span>
                    </h1>
                </Link>
                <form className="bg-gray-700 p-3 flex rounded-lg items-center">
                    <input type="text" placeholder="search..." className="bg-gray-700 focus:outline-none w-24 sm:w-64" />
                    <FaSearch className="text-slate-600" />
                </form>

                <ul className="flex gap-4">
                    <Link to="/">
                        <li className="hidden sm:inline text-slate-500 hover:underline">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline text-slate-500 hover:underline">
                            About
                        </li>
                    </Link>
                    <Link to="/sign-in">
                        <li className="hidden sm:inline text-slate-500 hover:underline">
                            {' '}
                            Sign In
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
