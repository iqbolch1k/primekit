import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="bg-slate-200 w-full">
            <div className="navbar continer flex justify-between items-center h-20">
                <div className="logo">
                    <h3 className="text-3xl font-bold">Prime<span className="text-[#008AFF]">Kit</span></h3>
                </div>
                <div className="hidden gap-10 items-center lg:flex">
                    <nav className="flex gap-10">
                        <NavLink className={({ isActive }) => `text-[18px] font-bold hover:text-[#008AFF] ${isActive ? "text-[#008AFF]" : "text-[#222D39]"}`} to={'/'}>Start</NavLink>
                        <NavLink className={({ isActive }) => `text-[18px] font-bold hover:text-[#008AFF] ${isActive ? "text-[#008AFF]" : "text-[#222D39]"}`} to={'/about'}>About</NavLink>
                        <NavLink className={({ isActive }) => `text-[18px] font-bold hover:text-[#008AFF] ${isActive ? "text-[#008AFF]" : "text-[#222D39]"}`} to={'/solutions'}>Solutions</NavLink>
                        <NavLink className={({ isActive }) => `text-[18px] font-bold hover:text-[#008AFF] ${isActive ? "text-[#008AFF]" : "text-[#222D39]"}`} to={'/pages'}>Pages</NavLink>
                        <NavLink className={({ isActive }) => `text-[18px] font-bold hover:text-[#008AFF] ${isActive ? "text-[#008AFF]" : "text-[#222D39]"}`} to={'/contact'}>Contact</NavLink>
                    </nav>
                    <button className="border-2 border-[#008AFF] py-2 px-4 font-bold rounded-lg text-[#fff] bg-[#008AFF] hover:border-black hover:bg-transparent hover:text-[black]">Get Started Now</button>
                </div>
                <div className="flex  lg:hidden text-2xl font-bold">
                    <GiHamburgerMenu />
                </div>

            </div>
        </div>
    )
}

export default Navbar