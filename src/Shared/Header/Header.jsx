import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import logo from '../../assets/cozy-home.png'
import user from '../../assets/user.png'


const Header = () => {
    const [open, setOpen] = useState(false)
    const navLinks = <>
        <NavLink to={"/"}><li >Home</li></NavLink>
        <NavLink to={"/listing"}><li>Listing</li></NavLink>
        <NavLink to={"/about"}><li>About</li></NavLink>
        <NavLink to={"/blog"}><li>Blog</li></NavLink>



    </>
    return (
        <nav className="flex justify-between items-center bg-[#f1f2f6]  text-skyBlue p-4  sticky">
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)} >
                {
                    open === true ?
                        <MdOutlineCancel></MdOutlineCancel> :
                        <HiMenuAlt1></HiMenuAlt1>

                }

            </div>
            <div>
                <ul className={`md:flex absolute md:static bg-[#f1f2f6] font-semibold duration-1000 px-6 py-4 ${open ? 'top-16' : '-top-60'} gap-5 lg:text-xl font-openSans`}>
                    {navLinks}

                </ul>
            </div>
            <div className="flex items-center">
                <h2 className="font-galada text-navyBlue text-3xl lg:text-5xl">Cozy <br />
                    <span className="text-[#319ff6]">Home</span></h2>
                <img className="lg:w-[110px] w-[50px]" src={logo} alt="" />
            </div>
            <div className="flex items-center gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-skyBlue btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user} alt="" />
                    </div>
                </div>
                <Link to={`/login`}><button className="bg-skyBlue text-white font-semibold lg:text-xl px-6 p-3 rounded-lg ">LogIn</button></Link>
            </div>
        </nav>
    );
};

export default Header;