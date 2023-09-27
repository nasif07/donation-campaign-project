import { NavLink } from "react-router-dom";
import logo from "./../../../public/Logo.png"


const Navbar = () => {
    return (
        <>
            <div className="md:flex items-center justify-between max-w-[1500px] mx-auto p-10">
                <img src={logo} alt="" />
                <ul className="flex gap-6 text-[#0B0B0B] text-xl font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                    
                </ul>
            </div>

        </>
    );
};

export default Navbar;