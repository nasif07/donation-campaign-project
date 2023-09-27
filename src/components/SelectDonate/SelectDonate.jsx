
const SelectDonate = ({ donation }) => {

    const { picture, category, category_bg_color, card_bg_color, text_color, title, id, price } = donation;


    // console.log(donation);
    return (
        <div className="">
            <div className="bg-base-100 md:flex rounded-md w-[300px] mx-auto md:w-[650px]">
                <img className="w-[312px] h-[230px]" src={picture} />
                <div style={{ background: card_bg_color }} className="card-body">
                    <div>
                        <span style={{ color: text_color, background: category_bg_color }} className=" px-3 py-1 bg-slate-100">{category}</span>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p className="font-semibold text-lg" style={{color: text_color}}>{price}</p>
                    <div className="card-actions">
                        <button style={{ background: text_color }} className="btn text-white">View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SelectDonate;