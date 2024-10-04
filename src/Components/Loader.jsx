
export function Loader() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center gap-6 bg-gradient-to-r from-teal-300 to-teal-50 text-slate-600 opacity-50">
            <h2 className="text-lg font-semibold text-center">
                Loading Please Wait...
            </h2>
            <span class="relative flex h-16 w-16">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-50"></span>
                <span class="relative inline-flex justify-center items-center rounded-full h-16 w-16 border-2 border-teal-500">
                    <span class="absolute inline-flex rounded-full h-10 w-10 bg-teal-500"></span>
                </span>
            </span>
        </div>
    )
};
