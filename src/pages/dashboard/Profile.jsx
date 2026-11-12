import { useNavigate } from 'react-router';
import {useState, useContext ,useEffect } from 'react';
import AuthContext from '../../context/AuthContext';


function Profile() {

    const {user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        if(user) {
            setForm({
                name: user.name,
                email: user.email,
                phone: user.phone,
            });
        }
    }, [user]);

    if(!user){
        return (<h1>No user is logged in.</h1>)
    }
    

    const profileInfo = [
        { label: "Full Name", value: user.name },
        { label: "Email Address", value: user.email },
        { label: "Phone Number", value: user.phone },
        { label: "Role", value: user.role },
        { label: "Joined At", value: user.joinedAt },
    ];

    function handleSave(e) {

        e.preventDefault();

        const validationErrors = handleErrors();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const updatedUser = {
                ...user,
                name: form.name,
                email: form.email,
                phone: form.phone,
            };

            setUser(updatedUser);

            setIsEditing(false);

        }
        

    }

    function handleCancel() {
        setForm({
            name: user.name,
            email: user.email,
            phone: user.phone,
        });

        setIsEditing(false);
        setErrors({});
    }


    function handleErrors(){

        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Full Name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";

        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){

            newErrors.email = 'Invalid email address';
        }

        if(!/^\d{10}$/.test(form.phone)){
            newErrors.phone = 'Phone Number must contain exactly 10 digits';
        }


        return newErrors;
    }

    function handleChange(e) {

        setForm(f => ({
                ...f,
                [e.target.name] : e.target.value,
        }));

        setErrors(prev => ({   
            ...prev,
            [e.target.name]: "",
        }));
    }

    function handleLogout() {
        setUser(null);
        navigate("/login");
    }

    return (
        <section className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-slate-800 mb-6'>
                My Profile
            </h1>

            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>

                <header  className="flex items-center gap-4 pb-6 border-b border-gray-200">
                    <div className='w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold'>
                        {
                            user.name.charAt(0).toUpperCase()
                        }
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <h2 className="text-xl font-bold text-slate-800">
                            {user.name}
                        </h2>

                        <span className="text-sm text-gray-500">
                            {user.role}
                        </span>
                    </div>
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Edit
                        </button>
                    )}
                </header>

                <div className='pt-6'>

                    <h3 className="text-lg font-semibold text-slate-800 mb-5">
                        Personal Information
                    </h3>

                    {!isEditing ? (
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {profileInfo.map((item) => (
                                <div key={item.label} className="flex flex-col gap-2 border-b border-gray-100 pb-3">

                                    <dt className="text-sm text-gray-500">
                                        {item.label}
                                    </dt>

                                    <dd className="font-medium text-slate-800">
                                        {item.value}
                                    </dd>

                                </div>
                            ))}
                        </dl>
                    ) : (
                        <form 
                            className="space-y-5"
                            onSubmit={handleSave}    
                            noValidate
                        >

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleChange}
                                    required
                                />

                                {errors.name && 
                                (<p className='text-sm text-red-500 mt-2'>
                                    {errors.name}
                                </p> )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleChange}
                                    required
                                />

                                {errors.email && 
                                (<p className='text-sm text-red-500 mt-2'>
                                    {errors.email}
                                </p> )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    maxLength={10}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleChange}
                                    required
                                />

                                {errors.phone && 
                                (<p className='text-sm text-red-500 mt-2'>
                                    {errors.phone}
                                </p> )}
                            </div>

                            <div className="flex justify-end gap-3 pt-4">

                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>

                            </div>

                        </form>
                    )}
                    <div className='flex justify-end'>
                        {!isEditing && (
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="mt-8 px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-700 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                    

                </div>
            </div>
        </section>
    );
}

export default Profile;