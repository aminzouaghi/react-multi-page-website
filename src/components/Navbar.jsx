
import {Outlet, Link } from 'react-router';


function Navbar(){

    return (
        <>
            <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 shadow-md">
                <span className="text-xl font-bold text-white">MyApp</span>

                <div className="flex gap-6">
                    <Link 
                        to="/"
                        className="text-gray-300 transition-colors duration-200 hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-gray-300 transition-colors duration-200 hover:text-white"
                        >
                        About
                    </Link>

                    <Link
                        to="/products"
                        className="text-gray-300 transition-colors duration-200 hover:text-white"
                        >
                        Products
                    </Link>

                    <Link
                        to="/login"
                        className="text-gray-300 transition-colors duration-200 hover:text-white"
                        >
                        Login
                    </Link>

                </div>
            
            </nav>
        </>
    );

}

export default Navbar;