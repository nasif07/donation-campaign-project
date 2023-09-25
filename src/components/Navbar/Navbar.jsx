import { Link } from "react-router-dom";
import logo from "./../../../public/Logo.png"


const Navbar = () => {
    return (
        <>
        <div className="flex items-center justify-between max-w-[1400px] mx-auto p-10">
            <img src={logo} alt="" />
            <ul className="flex gap-6 text-[#0B0B0B] text-xl">
                <Link to={"/"}>Home</Link>
                <Link to={"/donation"}>Donation</Link>
                <Link to={"/statistics"}>Statistics</Link>
            </ul>
        </div>
            
        </>
    );
};

export default Navbar;