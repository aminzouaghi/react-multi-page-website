
import {useState} from 'react';
import { useNavigate } from 'react-router';
import users from '../data/users'


function Login(){

    const [form, setForm] = useState(
        {
            email: "",
            password:"",
            remember:false
        }
    );

    const [error, setError] = useState({});
    const navigate = useNavigate();

    function handleChange(e) {


        const {name, type, value, checked} = e.target;

        setForm(f => ({
                ...f,
                [name] : type === 'checkbox' ? checked : value,
        }));

        setError(prev => ({   
            ...prev,
            [name]: "",
            noUser: "",
        }));
    }

    function handleErrors(){

        const newErrors = {};

        if (!form.email.trim()) {
            newErrors.email = "Email is required";

        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){

            newErrors.email = 'Invalid email address';
        }

        if(form.password.length < 8){
            newErrors.password = 'Password must be at least 8 characters';
        }

        if(Object.keys(newErrors).length === 0 && !handleUsers()){
            newErrors.noUser = "Invalid email or password";
        }

        return newErrors;
    }

    function handleUsers(){

        const user = users.find(
            user => (user.email.toLowerCase() === form.email.trim().toLowerCase() && user.password === form.password)
        )

        return user;
    }

    function handleSubmit(e) {

        e.preventDefault();

        const validationErrors = handleErrors();
        setError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            navigate("/dashboard");

        }
    }

    return(
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <form onSubmit={handleSubmit} noValidate
            className='w-full max-w-md  bg-white p-8 rounded-2xl shadow-lg space-y-5'
            >
                
                <h2 className='text-2xl font-bold text-center text-gray-800'>
                    Login
                </h2>
                <div>
                    <label  
                        htmlFor="email"
                        className='block text-sm font-medium text-gray-700 mb-2'>
                        Email:
                    </label>

                    <input 
                        id='email'
                        name="email" 
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Enter your email'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    />
                    
                    {error.email && 
                        (<p className='text-sm text-red-500 mt-2'>
                            {error.email}
                        </p> )}
                    
                </div>

                <div>
                    <label 
                        htmlFor="password"
                        className='block text-sm font-medium text-gray-700 mb-2'
                        >
                        Password:
                    </label>

                    <input 
                        id='password'
                        name="password" 
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder='Enter your password'
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                    {error.password && 
                        (<p className='text-sm text-red-500 mt-2'>
                            {error.password}
                        </p> )
                    }

                </div>

                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input 
                        id='remember'
                        name="remember" 
                        type='checkbox'
                        checked = {form.remember}
                        onChange={handleChange}
                        className='w-4 h-4 accent-blue-600'
                    />
                    Remember Me
                </label>
                {error.noUser &&
                    (<p className='text-sm text-red-500'>
                            {error.noUser}
                     </p> )
                }
                <button 
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-200'
                >
                    Login
                </button>
        
            </form>

        </div>
    );
}

export default Login;