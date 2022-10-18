const NavBar = () => {
    return (
        <nav className="flex items-center justify-between font-bold text-white">
            <img src="/images/logo.svg" alt="" />
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                    <a href="#">About</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                    <a href="#">Careers</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                    <a href="#">Events</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                    <a href="#">Products</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                    <a href="#">Support</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
            </div>
            {/* TODO hamburger button */}
         </nav>
        //  TODO mobile Menu
    )
}

export default NavBar