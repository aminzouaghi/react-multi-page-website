import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import usersData from '../data/usersData';


function UserChart(){

    return(
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">

            <ResponsiveContainer width='100%' height={300}>
                <LineChart data={usersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>

                    <CartesianGrid  strokeDasharray="3 3"/>

                    <XAxis dataKey="month"/>

                    <YAxis/>

                    <Tooltip
                        cursor={{ fill: '#eff6ff' }}
                        contentStyle={{
                            borderRadius: '10px',
                            border: '1px solid #e5e7eb'
                        }}
                    />

                    <Line 
                        type='monotone'
                        dataKey="users" 
                        stroke='#2563eb'
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />

                </LineChart>

            </ResponsiveContainer>
        </div>
    );
}
export default UserChart;