
const Header = () => {
    return (
        <div style={{
            backgroundImage: `url("/cover.jpg")`
        }} className="bg-cover">
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.95)"}} className="h-[70vh] mx-auto">
            <h1 className="text-[#0B0B0B] text-center text-2xl md:text-5xl font-medium md:font-bold pt-40 overlay">I Grow By Helping People In Need</h1>
            <div className="form-control">
                <div className="input-group flex items-center justify-center py-12">
                    <input type="text" placeholder="Search here...." className="input input-bordered w-1/3" />
                    <button className="btn text-white bg-[#FF444A]">
                        Search
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;