
function Navbar() {
    return (
        <nav className="navbar text-black">
            {/* Left part of the navbar */}
            <div className="navbar-start">
                {/* Dropdown menu for mobile view */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {/* Dropdown menu items */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 font-zilla">
                        <li><a className="font-bold text-xl">Home</a></li>
                        <li>
                            <a>Events</a>
                            <ul className="p-2 bg-white">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Datrimony</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Contact Us</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                {/* Logo */}
                <img src="/img/logo.png" alt="Logo" className="h-20 w-auto" />
            </div>

            {/* Center part of the navbar (visible on larger screens) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-zilla">
                    <li><a className="font-bold">Home</a></li>
                    <li>
                        <details>
                            <summary>Events</summary>
                            <ul className="p-2 bg-white">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Datrimony</summary>
                            <ul className="p-2 bg-white">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Contact Us</a></li>
                    <li><a>Blogs</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="bg-red-500 text-white p-2 px-10">Join</a>
            </div>
        </nav>
    )
}

export default Navbar