import { Outlet, NavLink  } from 'react-router';



function DashboardLayout() {
    return (
        <div className='flex min-h-screen bg-gray-100'>

            <aside className='w-64 shrink-0 bg-slate-900 text-white p-5'>
                <h2 className="text-2xl font-bold mb-6">
                    Dashboard
                </h2>

                <nav className='flex flex-col gap-3 mt-8'>
                    <NavLink 
                        to="/dashboard" 
                        end 
                        className={({isActive}) => 
                            `block rounded-lg px-4 py-3 transition duration-200 ${
                                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-slate-700"
                            }`
                        
                        }>
                            Overview
                    </NavLink>

                    <NavLink 
                        to="/dashboard/profile"
                        className={({isActive}) => 
                            `block rounded-lg px-4 py-3 transition duration-200 ${
                                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-slate-700"
                            }`
                        
                        }>
                        Profile
                    </NavLink>

                    <NavLink 
                        to="/dashboard/settings"
                        className={({isActive}) => 
                            `block rounded-lg px-4 py-3 transition duration-200 ${
                                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-slate-700"
                            }`
                        
                        }>
                        Settings
                    </NavLink>
                </nav>
            </aside>

            <main className='flex-1 p-8'>
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;