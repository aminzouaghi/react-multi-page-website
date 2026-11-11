import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import salesData from '../data/salesData';

function SalesChart() {

    return(
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            
            <ResponsiveContainer width="100%" height={300}>

                <BarChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="month"/>

                    <YAxis />

                    <Tooltip
                        cursor={{ fill: '#eff6ff' }}
                        contentStyle={{
                            borderRadius: '10px',
                            border: '1px solid #e5e7eb'
                        }}
                    />

                    <Bar dataKey="sales" fill='#2563eb' radius={[8, 8, 0, 0]}/>

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
    
}

export default SalesChart;