import StatCard from '../../components/StatCard';
import { Package, User, ShoppingCart } from 'lucide-react';
import activities from '../../data/activities';
import RecentActivities from '../../components/RecentActivities';
import SalesChart from "../../components/SalesChart"
import UserChart from "../../components/UsersChart"


function DashboardHome() {

    return (

        // State Card:
        
        <div className='space-y-8'>

            <h1 className='text-3xl font-bold text-slate-800'>
                Overview
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>

                <StatCard title='Products' value={120} icon={Package}/>

                <StatCard title='Users' value={85} icon={User}/>

                <StatCard title='Orders' value={45} icon={ShoppingCart}/>

            </div>

            {/* Recent Activity */}

            <div className='space-y-5'>
                <h2 className='text-2xl font-bold text-slate-800'>
                    Recent Activity
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        activities.map((activity) => 
                            (
                                <RecentActivities 
                                    key={activity.id}
                                    title={activity.title} 
                                    time={activity.time} 
                                    icon={activity.icon} 
                                />
                            )
                        )
                    }

                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold text-slate-800'>
                        Sales Overview
                    </h2>
                    <SalesChart/>
                </div>

                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold text-slate-800'>
                        Users Overview
                    </h2>
                    <UserChart/>
                </div>

            </div>
        </div>
    );
}

export default DashboardHome;