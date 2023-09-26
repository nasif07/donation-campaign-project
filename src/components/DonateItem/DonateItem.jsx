import { Link } from "react-router-dom";

const DonateItem = ({ donation }) => {
    const { picture, category, category_bg_color, card_bg_color, text_color, title, id } = donation;
    // console.log(donation);
    return (
        <>
            <Link to={`/donations/${id}`}>
                <div className="card">
                    <img className=" h-48" src={picture} />
                    <div style={{ background: card_bg_color }} className="py-6 pl-4 h-32">
                        <span style={{ color: text_color, background: category_bg_color }} className=" px-3 py-1 bg-slate-100">{category}</span>
                        <h2 style={{ color: text_color }} className={"pt-4 font-semibold text-xl text-{text-color}"}>{title}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default DonateItem;