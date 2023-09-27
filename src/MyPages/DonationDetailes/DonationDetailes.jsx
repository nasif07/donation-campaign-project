import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

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

    const handleAddtoDonations = () => {
        const addedDonation = [];
        const donationItems = JSON.parse(localStorage.getItem('items'));

        if (!donationItems) {
            addedDonation.push(donationItem);


            localStorage.setItem('items', JSON.stringify(addedDonation));
            swal("Good job!", "Thanks for donating uss!", "success");

        }
        else {
            const isExist = donationItems.find(item => item.id == id)
            if (!isExist) {
                addedDonation.push(...donationItems, donationItem);
                localStorage.setItem('items', JSON.stringify(addedDonation));
                swal("Good job!", "Thanks for donating uss!", "success");
            }
            else{
                swal("Error!", "you already donate this item!", "error");
            }

        }
        console.log(addedDonation);
    }


    return (
        <div className=" max-w-[1500px] mx-auto p-12">
            <div className="card">
                <img className=" max-h-[700px]" src={picture} />
                    <div className=" -top-24 w-full relative bg-[#0B0B0B80] p-5">
                        <button onClick={handleAddtoDonations} style={{ background: text_color }} className="btn text-white  font-medium text-sm hover:text-black p-3">Donate {price}</button>
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