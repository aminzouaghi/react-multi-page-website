


function StatCard({title, value, icon: Icon}){

    return(
        <div className="bg-white py-6 px-10 rounded-xl shadow-sm border border-gray-200">

            <div className="p-3 bg-blue-100 rounded-lg shrink-0 mb-1 w-15">
                <Icon className="w-8 h-8 text-blue-600"/>
            </div>

            <div>
                <h3 className="text-gray-600 text-base font-medium">
                    {title}
                </h3>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                    {value}
                </p>
            </div>
        </div>
    );
}

export default StatCard;