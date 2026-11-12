import {Routes, Route} from 'react-router';

import Navbar from './components/Navbar'

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';
import ProtectedRoute from './components/ProtectedRoute';





function App() {
    return(
        <>
            <Navbar/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/products/:id' element={<ProductDetails/>}/>
                    <Route path='/login' element={<Login/>}/>

                    <Route element={<ProtectedRoute/>}>
                        <Route path='/dashboard' element={<DashboardLayout/>}>
                            <Route index element={<DashboardHome/>}/>
                            <Route path='profile' element={<Profile/>}/>
                            <Route path='settings' element={<Settings/>}/>
                        </Route>
                    </Route>

                    <Route path='*' element={<NotFound/>}/>
                </Routes>

            </main>
        
        </>

    );
    
}

export default App
