
function Search() {
    return (
        <div className="flex justify-center">
            <div className="flex">
                <button className="flex items-center justify-center px-4 border-r">
                    <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <input className="px-4 py-2 w-80 bg-white border-b border-gray-400" type="search" placeholder="Search by Event, Artist, Venue..." />
                <button className="bg-red-500 text-white px-6  rounded-r">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search