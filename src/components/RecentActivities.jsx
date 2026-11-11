


function RecentActivities({title, time, icon: Icon}){

    return(
        <div className="flex items-center gap-4 bg-white py-6 px-10 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">

            <div className="p-5 bg-blue-100 rounded-lg shrink-0">
                <Icon className="w-6 h-6 text-blue-600"/>
            </div>

            <div className="min-w-0">
                <h3 className="text-slate-600 text-base font-semibold ">
                    {title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                    {time}
                </p>
            </div>
        </div>
    );
}

export default RecentActivities;