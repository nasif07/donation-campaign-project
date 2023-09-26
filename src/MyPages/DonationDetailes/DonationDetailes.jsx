import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetailes = () => {

    const [donationItem, setDonationItem] = useState();
    const { id } = useParams();
    // console.log(id);


    const { donations } = useLoaderData();
    // console.log(donations);

    useEffect(() => {
        const findDonationItem = donations.find(donation => donation.id == id)
        // console.log(findDonationItem);
        setDonationItem(findDonationItem);
    }, [id, donations])

    console.log(donationItem);

    const { picture, price, title, description, text_color } = donationItem || {};


    return (
        <div className=" max-w-[1500px] mx-auto">
            <div className="card relative">
                <img className=" max-h-[700px]" src={picture} />
                <div className=" bottom-0 left-0 relative">
                    <div style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }} className=" bottom-0  left-0 w-full absolute">
                        <button style={{background: text_color}} className="btn text-white  font-medium text-sm -mt-20 absolute ml-5 hover:text-black">Donate {price}</button>
                    </div>
                </div>
                <div className="py-6 pl-4 h-32 text-[#0B0B0B]">
                    <h2 className="font-bold text-4xl pt-10">{title}</h2>
                    <p className={"pt-4 font-medium text-[16px] text-[#0B0B0B]"}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetailes;