import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const links = <>
        <li className='ml-4'><NavLink to='/'>Home</NavLink> </li>
        <li className='ml-4'><NavLink to='/listbooks'>List Books</NavLink> </li>
        <li className='ml-4'><NavLink to='/favoritebook'>Favorite Books</NavLink> </li>
        <li className='ml-4'><NavLink to='/pagetoread'>Page To Read</NavLink> </li>
        <li className='ml-4'><NavLink to='/review'>Review</NavLink> </li>
    </>
    return (
        <div className="navbar bg-base-300 container mx-auto rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-black font-bold">Literary <span className='text-[#23BE0A]'>Oasis</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-normal text-[#404040]">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hidden md:block text-end">
                <a className="btn bg-[#23BE0A] text-lg font-semibold text-white ">Sign In</a>
                <a className="btn bg-[#59C6D2] text-lg font-semibold text-white ml-5">Sign up</a>

            </div>
        </div>
    );
};

export default Navbar;